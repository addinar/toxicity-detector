import './App.css';
import React, { useState } from 'react';
import InputCard from './cards/InputCard.js';
import ResultCard from './cards/ResultCard.js';

function App() {
  const [result, setResult] = useState(null);

  const handleNewInput = () => {
    setResult(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="semibold heading">Toxicity Detector</h1>
      </header>

      <main className="main-container">
        {(result) ? (
            <ResultCard result={result} onNewInput={handleNewInput}/>
          ) : (
            <InputCard onResult={setResult}/>
          )
        }
      </main>

      <footer>
        <p className="semibold footer-text">
          Detections are experimental. Use with disrection. | Made with Transformers + Torch + React + Flask |
          <a
    href="https://github.com/addinar/toxicity-detector"
    target="_blank"
    rel="noopener noreferrer"
    style={{ color: '#78CDD7', marginLeft: '5px' }}
  >
    GitHub
  </a> 
        </p>
      </footer>
    </div>
  );
}

export default App;
