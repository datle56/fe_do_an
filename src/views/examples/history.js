import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function History() {
    const [history, setHistory] = useState([]); // Store all history data
    const [filteredHistory, setFilteredHistory] = useState([]); // Store filtered history
    const [selectedFeature, setSelectedFeature] = useState(''); // Store selected feature

    // Fetch the user's history data
    const fetchHistory = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get('http://localhost:8000/history', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setHistory(response.data); // Update all history data
            setFilteredHistory(response.data); // Initially show all data
        } catch (error) {
            console.error("Error fetching history", error);
        }
    };

    // Filter history based on selected feature
    const handleFeatureClick = (feature) => {
        setSelectedFeature(feature); // Set the selected feature

        // Filter the history based on the feature clicked
        const filtered = history.filter(item => item.feature === feature);
        setFilteredHistory(filtered); // Update filtered history
    };

    useEffect(() => {
        fetchHistory(); // Fetch history data when the component is mounted
    }, []);

    return (
        <div>
            <h2>History</h2>

            {/* Feature Buttons */}
            <div className="mb-3">
                <Button 
                    variant="primary" 
                    onClick={() => handleFeatureClick('Pronunciation')}
                    active={selectedFeature === 'Pronunciation'}
                >
                    Pronunciation
                </Button>
                <Button 
                    variant="secondary" 
                    onClick={() => handleFeatureClick('Grammar')}
                    active={selectedFeature === 'Grammar'}
                    className="ml-2"
                >
                    Grammar
                </Button>
                <Button 
                    variant="success" 
                    onClick={() => handleFeatureClick('Talk')}
                    active={selectedFeature === 'Talk'}
                    className="ml-2"
                >
                    Talk
                </Button>
            </div>

            {/* History Table */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Feature</th>
                        <th>Input Data</th>
                        <th>Output Data</th>
                        <th>Time</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredHistory.map((historyItem, index) => (
                        <tr key={index}>
                            <td>{historyItem.id}</td>
                            <td>{historyItem.feature}</td>
                            <td>{historyItem.input_data}</td>
                            <td>{historyItem.output_data}</td>
                            <td>{new Date(historyItem.created_at).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default History;
