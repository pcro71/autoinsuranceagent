import React, { useState, useEffect } from 'react';

function Step8({ onNext, onBack, step }) {
  const [currentlyInsured, setCurrentlyInsured] = useState('');


  useEffect(() => {
    // Fetch currentlyInsured from localStorage
    const savedCurrentlyInsured = localStorage.getItem('currentlyInsured');
    if (savedCurrentlyInsured) {
      setCurrentlyInsured(savedCurrentlyInsured);
    }
  }, []);

  const handleCurrentlyInsuredSelection = (selectedOption) => {
    if (selectedOption === 'no') {
      setCurrentlyInsured(selectedOption); // Update the state with the selected option
      localStorage.setItem('currentlyInsured', selectedOption);
      onNext({ currentlyInsured: selectedOption }, step + 2); // Skip next step, go to following
    } else {
      setCurrentlyInsured(selectedOption); // Update the state with the selected option
      localStorage.setItem('currentlyInsured', selectedOption);
      onNext({ currentlyInsured: selectedOption }, step + 1); // Proceed to the next step
    }
  };  

  return (
    <div>
      <h1>Step 8: Have you had auto insurance in the past 30 days?</h1>
      <div className="input-container">
        <label>Choose one:</label>
        <div className="answer-buttons">
          <button
            className={`selection-button ${currentlyInsured === 'yes' ? 'selected' : ''}`}
            onClick={() => handleCurrentlyInsuredSelection('yes')}
          >
            Yes
          </button>
          <button
            className={`selection-button ${currentlyInsured === 'no' ? 'selected' : ''}`}
            onClick={() => handleCurrentlyInsuredSelection('no')}
          >
            No
          </button>
        </div>
      </div>
      <div className="button-container">
        <button onClick={onBack}>Last Page</button>
      </div>
    </div>
  );
}

export default Step8;
