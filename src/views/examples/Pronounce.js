import React, { useState, useRef } from 'react';
import './chat.css';
import DataTest from '../../data/result.json';

function PronunciationApp() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');
  const [ipaText, setIpaText] = useState('');
  const [predictedText, setPredictedText] = useState(DataTest.predicted_text);
  const [matchingResult, setMatchingResult] = useState(
    DataTest.matching_result
  );
  const [isMicActive, setIsMicActive] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState(DataTest.base64_audio);
  const [generatedAudio, setGeneratedAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const audioPlayerRef = useRef(null);

  console.log(DataTest);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleConfirm = async () => {
    setInputText('');
    setDisplayText(inputText);
    setMatchingResult(null);

    try {
      const response = await fetch(`http://localhost:8000/GetIPA`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ text: inputText }),
      });
      const data = await response.json();

      setIpaText(data.ipa);
    } catch (error) {
      console.error('Error fetching IPA:', error);
    }
  };

  const handleMic = async () => {
    if (!isMicActive) {
      setIsMicActive(true);
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        mediaRecorderRef.current = new MediaRecorder(stream);
        audioChunksRef.current = [];

        mediaRecorderRef.current.ondataavailable = (event) => {
          audioChunksRef.current.push(event.data);
        };

        mediaRecorderRef.current.onstop = async () => {
          const audioBlob = new Blob(audioChunksRef.current, {
            type: 'audio/ogg',
          });
          const base64Audio = await blobToBase64(audioBlob);
          await sendAudioToBackend(base64Audio);
        };

        mediaRecorderRef.current.start();
      } catch (error) {
        console.error('Error accessing microphone:', error);
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
      const response = await fetch(
        'http://localhost:8000/GetAccuracyFromRecordedAudio',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            title: inputText,
            base64Audio: base64Audio,
            language: 'en',
            comparison_mode: 'text',
          }),
        }
      );
      const data = await response.json();

      setPredictedText(data.predicted_text);
      setMatchingResult(data.matching_result);
      setRecordedAudio(data.base64_audio);
      // setGeneratedAudio(data.generated_audio);
    } catch (error) {
      console.error('Error sending audio to backend:', error);
    }
  };

  const handlePlayRecording = () => {
    if (audioPlayerRef.current) {
      if (!isPlaying) {
        // Bắt đầu phát âm thanh
        audioPlayerRef.current.src = recordedAudio;
        audioPlayerRef.current.play();
        setIsPlaying(true);

        // Khi âm thanh kết thúc, chuyển về trạng thái ban đầu
        audioPlayerRef.current.onended = () => {
          setIsPlaying(false);
        };
      } else {
        // Dừng phát âm thanh
        audioPlayerRef.current.pause();
        audioPlayerRef.current.currentTime = 0;
        setIsPlaying(false);
      }
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

    const words = displayText.split(' ');
    const matchingValues = matchingResult.trim().split(' ');

    return words.map((word, wordIndex) => {
      const matchingWord = matchingValues[wordIndex] || '';

      return (
        <span key={wordIndex} style={{ marginRight: '10px' }}>
          {word.split('').map((char, charIndex) => {
            const matchValue = matchingWord[charIndex];
            return (
              <span
                key={charIndex}
                style={{
                  color:
                    matchValue === '1'
                      ? 'green'
                      : matchValue === '0'
                      ? 'red'
                      : 'black',
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

    const textWords = displayText.split(' ');
    const ipaWords = ipaText.split(' ');

    return textWords.map((word, index) => (
      <div
        key={index}
        style={{
          display: 'inline-block',
          textAlign: 'center',
          marginRight: '10px',
        }}
      >
        <span style={{ fontSize: '18px' }}>{word}</span>
        <div style={{ fontSize: '14px', color: 'gray' }}>
          {ipaWords[index] || ''}
        </div>
      </div>
    ));
  };

  return (
    <div className="chat-root">
      <div
        className="chat-container shadow"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <h1 style={{ textAlign: 'center', padding: '20px' }}>
          App Nhận Diện Phát Âm
        </h1>

        <div style={{ padding: '16px' }}>
          {displayText && (
            <div
              style={{
                marginBottom: '20px',
                fontSize: '18px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  marginTop: '10px',
                  fontSize: '32px',
                  fontWeight: '600',
                }}
              >
                {matchingResult ? renderColoredText() : renderTextWithIPA()}
              </div>
            </div>
          )}

          {displayText && (
            <div
              style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                marginTop: '20px',
              }}
            >
              <button
                onClick={handleMic}
                style={{
                  padding: '15px',
                  borderRadius: '50%',
                  backgroundColor: isMicActive ? '#a2d5ab' : '#f4a7a7',
                  color: '#0288d1',
                  border: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                }}
              >
                🎤
              </button>

              <button
                onClick={handlePlayRecording}
                style={{
                  padding: '15px',
                  borderRadius: '50%',
                  backgroundColor: '#f1f8e9',
                  color: '#388e3c',
                  border: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                }}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
            </div>
          )}

          {/* {ipaText && (
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
              <div style={{ color: 'blue', marginTop: '10px' }}>
                {predictedText}
              </div>
            </div>
          )}

          {matchingResult && (
            <div style={{ marginBottom: '20px', fontSize: '18px' }}>
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
                style={{
                  padding: '15px',
                  borderRadius: '50%',
                  backgroundColor: '#f1f8e9',
                  color: '#388e3c',
                  border: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                }}
              >
                ▶
              </button>
            )}

            {generatedAudio && (
              <button
                onClick={handlePlayGeneratedAudio}
                style={{
                  padding: '15px',
                  borderRadius: '50%',
                  backgroundColor: '#00ff00',
                  color: '#388e3c',
                  border: 'none',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                }}
              >
                Phát Âm Thanh Mẫu
              </button>
            )} 
          </div> */}
        </div>

        <div className="chat-input">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Nhập câu để phát âm..."
          />
          <button
            onClick={handleConfirm}
            style={{ padding: '10px 15px', fontSize: '16px' }}
          >
            Xác Nhận
          </button>
        </div>

        <audio ref={audioPlayerRef} style={{ display: 'none' }} />
      </div>
    </div>
  );
}

export default PronunciationApp;
