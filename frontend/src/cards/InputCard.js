import React, { useState } from 'react';
import './Cards.css'
import Container from '../components/Container/Container.js';
import UploadButton from '../components/UploadButton/UploadButton.js';
import TextArea from '../components/TextArea/TextArea.js'
import AnalyzeButton from '../components/AnalyzeButton/AnalyzeButton.js'
import BarLoader from '../components/BarLoader/BarLoader.js';

export default function InputCard( {onResult} ) {
    const [comment, setComment] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!comment.trim()) {
            setError("Comment can't be empty.");
            return;
        } else {
            setError("");
        }

        setLoading(true);
        
        try {
            const [response, wait] = await Promise.all([fetch("http://localhost:5050/predict", {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ comment })
                }),
                new Promise((resolve) => setTimeout(resolve, 500))
            ]);

            const data = await response.json();
            onResult(data); // communicate with App.js
            console.log(comment);
        } catch(err) {
            setError("Something went wrong. Try again.");
            console.log(err);
            console.log(comment);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div id="input-card">
            <Container>
                <form onSubmit={handleSubmit}>
                    <p className="medium">Upload a screenshot...</p>
                    <UploadButton onUploadError={setError} onFileUpload={setComment}/>
                    <p className="medium">...or paste the text below.</p>
                    <TextArea value={comment} onChange={(event) => setComment(event.target.value)}/>
                    {error && <p className="medium" style={{ color: 'red' }}>{error}</p>}

                    {loading ? (
                        <div className="spinner-div">
                            <BarLoader />
                            <p className="medium" style={{ color: '#78CDD7' }}>Analyzing...</p>
                        </div>
                        ) : 
                        (<AnalyzeButton />)}

                </form>
            </Container>
        </div>
    )
};