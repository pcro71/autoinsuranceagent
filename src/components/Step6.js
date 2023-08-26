import React, { useState, useEffect } from 'react';

function Step6({ onNext, onBack, step }) {
  const [primaryUse, setPrimaryUse] = useState('');

  useEffect(() => {
    // Fetch primaryUse from localStorage
    const savedPrimaryUse = localStorage.getItem('primaryUse');
    if (savedPrimaryUse) {
      setPrimaryUse(savedPrimaryUse);
    }
  }, []);

  const handlePrimaryUseSelection = (selectedOption) => {
    setPrimaryUse(selectedOption);
    localStorage.setItem('primaryUse', selectedOption);
    onNext({ primaryUse: selectedOption }, step + 1);
  };

  return (
    <div>
      <h1>Step 6: Primary use of your vehicle:</h1>
      <div className="input-container">
        <label>Choose one:</label>
        <div className="answer-buttons">
          <button
            className={`selection-button ${primaryUse === 'commute' ? 'selected' : ''}`}
            onClick={() => handlePrimaryUseSelection('commute')}
          >
            Commute
          </button>
          <button
            className={`selection-button ${primaryUse === 'pleasure' ? 'selected' : ''}`}
            onClick={() => handlePrimaryUseSelection('pleasure')}
          >
            Pleasure
          </button>
          <button
            className={`selection-button ${primaryUse === 'business' ? 'selected' : ''}`}
            onClick={() => handlePrimaryUseSelection('business')}
          >
            Business
          </button>
        </div>
      </div>
      <div className="button-container">
        <button onClick={onBack}>Last Page</button>
      </div>
    </div>
  );
}

export default Step6;
