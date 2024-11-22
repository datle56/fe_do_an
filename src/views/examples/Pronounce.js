import React, { useState, useRef } from "react";

function PronunciationApp() {
  const [inputText, setInputText] = useState(""); 
  const [displayText, setDisplayText] = useState(""); 
  const [ipaText, setIpaText] = useState(""); 
  const [predictedText, setPredictedText] = useState(""); 
  const [matchingResult, setMatchingResult] = useState(""); 
  const [isMicActive, setIsMicActive] = useState(false); 
  const [recordedAudio, setRecordedAudio] = useState(null);
  const [generatedAudio, setGeneratedAudio] = useState(null);
  const mediaRecorderRef = useRef(null); 
  const audioChunksRef = useRef([]); 
  const audioPlayerRef = useRef(null);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleConfirm = async () => {
    setDisplayText(inputText);

    try {
      const response = await fetch(`http://localhost:8000/GetIPA`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await response.json();
      setIpaText(data.ipa);
    } catch (error) {
      console.error("Error fetching IPA:", error);
    }
  };

  const handleMic = async () => {
    if (!isMicActive) {
      setIsMicActive(true);
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        audioChunksRef.current = [];

        mediaRecorderRef.current.ondataavailable = (event) => {
          audioChunksRef.current.push(event.data);
        };

        mediaRecorderRef.current.onstop = async () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: "audio/ogg" });
          const base64Audio = await blobToBase64(audioBlob);
          await sendAudioToBackend(base64Audio);
        };

        mediaRecorderRef.current.start();
      } catch (error) {
        console.error("Error accessing microphone:", error);
      }
    } else {
      setIsMicActive(false);
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.stop();
      }
    }
  };

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const sendAudioToBackend = async (base64Audio) => {
    try {
      const response = await fetch("http://localhost:8000/GetAccuracyFromRecordedAudio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          title: inputText,
          base64Audio: base64Audio,
          language: "en",
          comparison_mode: "text", 
        }),
      });
      const data = await response.json();
      setPredictedText(data.predicted_text);
      setMatchingResult(data.matching_result);
      setRecordedAudio(data.base64_audio);
      setGeneratedAudio(data.generated_audio);
    } catch (error) {
      console.error("Error sending audio to backend:", error);
    }
  };

  const handlePlayRecording = () => {
    if (recordedAudio && audioPlayerRef.current) {
      audioPlayerRef.current.src = recordedAudio;
      audioPlayerRef.current.play();
    }
  };

  const handlePlayGeneratedAudio = () => {
    if (generatedAudio && audioPlayerRef.current) {
      audioPlayerRef.current.src = generatedAudio;
      audioPlayerRef.current.play();
    }
  };

  const renderColoredText = () => {
    if (!displayText || !matchingResult) return null;
  
    const words = displayText.split(" ");
    const matchingValues = matchingResult.trim().split(" ");
  
    return words.map((word, wordIndex) => {
      const matchingWord = matchingValues[wordIndex] || "";
      
      return (
        <span key={wordIndex} style={{ marginRight: "10px" }}>
          {word.split("").map((char, charIndex) => {
            const matchValue = matchingWord[charIndex];
            return (
              <span
                key={charIndex}
                style={{
                  color: matchValue === "1" ? "green" : matchValue === "0" ? "red" : "black",
                }}
              >
                {char}
              </span>
            );
          })}
        </span>
      );
    });
  };

  const renderTextWithIPA = () => {
    if (!displayText || !ipaText) return displayText;

    const textWords = displayText.split(" ");
    const ipaWords = ipaText.split(" ");

    return textWords.map((word, index) => (
      <div key={index} style={{ display: "inline-block", textAlign: "center", marginRight: "10px" }}>
        <span style={{ fontSize: "18px" }}>{word}</span>
        <div style={{ fontSize: "14px", color: "gray" }}>{ipaWords[index] || ""}</div>
      </div>
    ));
  };

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          height: 500,
          width: '100%',
          margin: 5,
          overflow: 'auto',
          border: '1px solid black',
          padding: '20px',
          fontFamily: 'Arial',
        }}
      >
        <h1>App Nhận Diện Phát Âm</h1>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Nhập câu để phát âm..."
            style={{
              padding: '10px',
              fontSize: '16px',
              width: '300px',
              marginRight: '10px',
            }}
          />
          <button
            onClick={handleConfirm}
            style={{ padding: '10px 15px', fontSize: '16px' }}
          >
            Xác Nhận
          </button>
        </div>
  
        {displayText && (
          <div style={{ marginBottom: '20px', fontSize: '18px' }}>
            <strong>Câu bạn cần phát âm:</strong>
            <div style={{ marginTop: '10px' }}>{renderTextWithIPA()}</div>
          </div>
        )}
  
        {ipaText && (
          <div style={{ marginBottom: '20px', fontSize: '18px' }}>
            <strong>IPA Phân Tích:</strong>
            <div
              style={{
                marginTop: '10px',
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {ipaText}
            </div>
          </div>
        )}
  
        {predictedText && (
          <div style={{ marginBottom: '20px', fontSize: '18px' }}>
            <strong>Văn bản dự đoán:</strong>
            <div style={{ color: 'blue', marginTop: '10px' }}>
              {predictedText}
            </div>
          </div>
        )}
  
        {matchingResult && (
          <div style={{ marginBottom: '20px', fontSize: '18px' }}>
            <strong>Kết quả so sánh:</strong>
            <div
              style={{
                marginTop: '10px',
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              {renderColoredText()}
            </div>
          </div>
        )}
  
        <div style={{ display: 'flex', gap: '10px' }}>
          {ipaText && (
            <button
              onClick={handleMic}
              style={{ padding: '10px 15px', fontSize: '16px' }}
            >
              {isMicActive ? 'Tắt Mic' : 'Bật Mic'}
            </button>
          )}
  
          {recordedAudio && (
            <button
              onClick={handlePlayRecording}
              style={{ padding: '10px 15px', fontSize: '16px' }}
            >
              Phát Lại Âm Thanh Ghi
            </button>
          )}
  
          {generatedAudio && (
            <button
              onClick={handlePlayGeneratedAudio}
              style={{ padding: '10px 15px', fontSize: '16px' }}
            >
              Phát Âm Thanh Mẫu
            </button>
          )}
        </div>
  
        <audio ref={audioPlayerRef} style={{ display: 'none' }} />
      </div>
    </div>
  );
}

export default PronunciationApp;


// import React, { useState, useRef } from "react";

// function PronunciationApp() {
//   const [inputText, setInputText] = useState(""); // User input text
//   const [displayText, setDisplayText] = useState(""); // Text to display
//   const [ipaText, setIpaText] = useState(""); // IPA transcription
//   const [predictedIpa, setPredictedIpa] = useState(""); // Predicted IPA transcription
//   const [matchingIpa, setMatchingIpa] = useState(""); // Matching IPA string
//   const [isMicActive, setIsMicActive] = useState(false); // Mic status
//   const mediaRecorderRef = useRef(null); // Ref for MediaRecorder
//   const audioChunksRef = useRef([]); // Ref to store audio chunks

//   const handleInputChange = (event) => {
//     setInputText(event.target.value);
//   };

//   // Handle submission of text
//   const handleConfirm = async () => {
//     setDisplayText(inputText);

//     try {
//       const response = await fetch(`http://localhost:8000/GetIPA`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//         },
//         body: JSON.stringify({ text: inputText }),
//       });
//       const data = await response.json();
//       setIpaText(data.ipa); // Set the IPA text from response
//     } catch (error) {
//       console.error("Error fetching IPA:", error);
//     }
//   };

//   // Handle microphone button
//   const handleMic = async () => {
//     if (!isMicActive) {
//       // Start recording
//       setIsMicActive(true);
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//         mediaRecorderRef.current = new MediaRecorder(stream);
//         audioChunksRef.current = [];

//         mediaRecorderRef.current.ondataavailable = (event) => {
//           audioChunksRef.current.push(event.data);
//         };

//         mediaRecorderRef.current.onstop = async () => {
//           const audioBlob = new Blob(audioChunksRef.current, { type: "audio/ogg" });
//           const base64Audio = await blobToBase64(audioBlob);
//           await sendAudioToBackend(base64Audio); // Send audio after stopping
//         };

//         mediaRecorderRef.current.start();
//       } catch (error) {
//         console.error("Error accessing microphone:", error);
//       }
//     } else {
//       // Stop recording
//       setIsMicActive(false);
//       if (mediaRecorderRef.current) {
//         mediaRecorderRef.current.stop();
//       }
//     }
//   };

//   // Convert blob to base64
//   const blobToBase64 = (blob) => {
//     return new Promise((resolve, reject) => {
//       const reader = new FileReader();
//       reader.onloadend = () => resolve(reader.result);
//       reader.onerror = reject;
//       reader.readAsDataURL(blob);
//     });
//   };

//   // Send audio to backend
//   const sendAudioToBackend = async (base64Audio) => {
//     try {
//       const response = await fetch("http://localhost:8000/GetAccuracyFromRecordedAudio", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "Accept": "application/json",
//         },
//         body: JSON.stringify({
//           title: inputText,
//           base64Audio: base64Audio,
//           language: "en",
//         }),
//       });
//       const data = await response.json();\
//       setPredictedIpa(data["ipa_predict"]);
//       setMatchingIpa(data["matching_ipa"]);
//     } catch (error) {
//       console.error("Error sending audio to backend:", error);
//     }
//   };

//   // Split displayText and ipaText into individual words for alignment
//   const displayWords = displayText.split(" ");
//   const ipaWords = ipaText.split(" ");

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1>App Nhận Diện Phát Âm</h1>
//       <div style={{ marginBottom: "20px" }}>
//         <input
//           type="text"
//           value={inputText}
//           onChange={handleInputChange}
//           placeholder="Nhập câu để phát âm..."
//           style={{
//             padding: "10px",
//             fontSize: "16px",
//             width: "300px",
//             marginRight: "10px",
//           }}
//         />
//         <button onClick={handleConfirm} style={{ padding: "10px 15px", fontSize: "16px" }}>
//           Xác Nhận
//         </button>
//       </div>

//       {/* Display text and aligned IPA after confirmation */}
//       {displayText && (
//         <div style={{ marginBottom: "20px", fontSize: "18px" }}>
//           <strong>Câu bạn cần phát âm:</strong>
//           <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "8px", marginTop: "10px" }}>
//             {displayWords.map((word, index) => (
//               <div
//                 key={index}
//                 style={{
//                   textAlign: "center",
//                   color:
//                     matchingIpa && matchingIpa[index] === "1"
//                       ? "green"
//                       : matchingIpa && matchingIpa[index] === "0"
//                       ? "red"
//                       : "black", // Default color
//                 }}
//               >
//                 <span>{word}</span>
//                 <div style={{ fontSize: "14px", color: "gray" }}>{ipaWords[index] || ""}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Display predicted IPA */}
//       {predictedIpa && (
//         <div style={{ marginBottom: "20px", fontSize: "18px" }}>
//           <strong>IPA dự đoán:</strong>
//           <div style={{ color: "blue", marginTop: "10px" }}>{predictedIpa}</div>
//         </div>
//       )}

//       {/* Show microphone button only after IPA text is displayed */}
//       {ipaText && (
//         <button onClick={handleMic} style={{ padding: "10px 15px", fontSize: "16px" }}>
//           {isMicActive ? "Tắt Mic" : "Bật Mic"}
//         </button>
//       )}
//     </div>
//   );
// }

// export default PronunciationApp;
