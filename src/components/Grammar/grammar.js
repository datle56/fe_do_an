import React, { useState } from 'react';
import { Button } from 'antd';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Grammar() {
    const [input, setInput] = useState('');
    const [explanation, setExplanation] = useState(null);
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:8000/grammar/correct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ text: input }),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            setExplanation(data.explanation || 'No explanation provided');
        } catch (error) {
            setExplanation(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ display: 'flex' }}>
            <div style={{ height: 500, width: '50%', margin: 5, overflow: 'auto', borderRight: "1px solid black" }}>
                <textarea
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder='Write something here'
                    style={{ width: "100%", height: "90%", border: "0px" }}
                ></textarea>
                <Row>
                    <Col md={12} style={{ display: "flex", justifyContent: "end" }}>
                        <Button onClick={sendMessage} type="primary" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </Button>
                    </Col>
                </Row>
            </div>
            <div style={{ height: 500, width: '50%', margin: 5, overflow: 'auto' }}>
                {explanation ? (
                    <div>{explanation}</div>
                ) : (
                    <div style={{ color: 'gray' }}>Response will appear here</div>
                )}
            </div>
        </div>
    );
}

export default Grammar;
