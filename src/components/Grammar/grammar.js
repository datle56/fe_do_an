import React, { useState } from 'react';
import { Button } from 'antd';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grammar() {
  const [input, setInput] = useState('');
  const [explanation, setExplanation] = useState(null);
  const [correctedSentence, setCorrectedSentence] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('No authentication token found');
        return;
      }
      
      const response = await fetch('http://localhost:8000/grammar/correct', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Add the token to the Authorization header

        },
        body: JSON.stringify({ text: input }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      // Assuming the backend returns both explanation and corrected_sentence
      setExplanation(data.explanation || 'No explanation provided');
      setCorrectedSentence(data.corrected_sentence || 'No corrected sentence available');
    } catch (error) {
      setExplanation(`Error: ${error.message}`);
      setCorrectedSentence(null); // Reset corrected sentence in case of error
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '100%', height: '700px', display: 'flex' }}>
      <div
        style={{
          width: '50%',
          margin: 5,
          overflow: 'auto',
          borderRight: '1px solid black',
          padding: 20,
          overflow: 'hidden',
        }}
      >
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write something here"
          style={{
            width: '100%',
            minHeight: '90%',
            border: '0px',
            resize: 'none',
          }}
        />
        <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
          <Button onClick={sendMessage} type="primary" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </div>
      <div style={{ width: '50%', margin: 5, overflow: 'auto', padding: 10 }}>
        {explanation ? (
          <>
            <div>{explanation}</div>
            {correctedSentence && (
              <div style={{ marginTop: '20px', fontWeight: 'bold' }}>
                Corrected Sentence:
                <div style={{ marginTop: '10px', fontStyle: 'italic' }}>
                  {correctedSentence}
                </div>
              </div>
            )}
          </>
        ) : (
          <div style={{ color: 'gray' }}>Response will appear here</div>
        )}
      </div>
    </div>
  );
}

export default Grammar;
