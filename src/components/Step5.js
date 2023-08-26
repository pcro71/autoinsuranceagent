import React, { useState, useEffect } from 'react';

function Step5({ onNext, onBack, step }) {
  const [selectedOwnership, setSelectedOwnership] = useState('');

  useEffect(() => {
    // Fetch selectedOwnership from localStorage
    const savedSelectedOwnership = localStorage.getItem('selectedOwnership');
    if (savedSelectedOwnership) {
      setSelectedOwnership(savedSelectedOwnership);
    }
  }, []);

  const handleCarOwnershipSelection = (selectedOption) => {
    setSelectedOwnership(selectedOption);
    localStorage.setItem('selectedOwnership', selectedOption);
    onNext({ carOwnership: selectedOption }, step + 1);
  };

  return (
    <div>
      <h1>Step 5: Car Ownership</h1>
      <div className="input-container">
        <label>Choose one:</label>
        <div className="answer-buttons">
          <button
            className={`selection-button ${selectedOwnership === 'own' ? 'selected' : ''}`}
            onClick={() => handleCarOwnershipSelection('own')}
          >
            Own
          </button>
          <button
            className={`selection-button ${selectedOwnership === 'finance' ? 'selected' : ''}`}
            onClick={() => handleCarOwnershipSelection('finance')}
          >
            Finance
          </button>
          <button
            className={`selection-button ${selectedOwnership === 'lease' ? 'selected' : ''}`}
            onClick={() => handleCarOwnershipSelection('lease')}
          >
            Lease
          </button>
        </div>
      </div>
      <div className="button-container">
        <button onClick={onBack}>Last Page</button>
      </div>
    </div>
  );
}

export default Step5;
