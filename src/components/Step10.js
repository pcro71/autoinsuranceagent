import React, { useState, useEffect } from 'react';

function Step10({ onNext, onBack, step }) {
  const [continuousCoverage, setContinuousCoverage] = useState('');

  useEffect(() => {
    // Fetch continuousCoverage from localStorage
    const savedContinuousCoverage = localStorage.getItem('continuousCoverage');
    if (savedContinuousCoverage) {
      setContinuousCoverage(savedContinuousCoverage);
    }
  }, []);

  const handleContinuousCoverageSelection = (selectedOption) => {
    setContinuousCoverage(selectedOption);
    localStorage.setItem('continuousCoverage', selectedOption);
    onNext({ continuousCoverage: selectedOption }, step + 1);
  };

  return (
    <div>
      <h1>Step 10: How long have you continuously had auto insurance?</h1>
      <div className="input-container">
        <label>Choose one:</label>
        <div className="answer-buttons">
          <button
            className={`selection-button ${continuousCoverage === 'less than 1 yr' ? 'selected' : ''}`}
            onClick={() => handleContinuousCoverageSelection('less than 1 yr')}
          >
            &lt;1 yr
          </button>
          <button
            className={`selection-button ${continuousCoverage === '1 to 2 years' ? 'selected' : ''}`}
            onClick={() => handleContinuousCoverageSelection('1 to 2 years')}
          >
            1-2 years
          </button>
          <button
            className={`selection-button ${continuousCoverage === '2 to 3 years' ? 'selected' : ''}`}
            onClick={() => handleContinuousCoverageSelection('2 to 3 years')}
          >
            2-3 years
          </button>
          <button
            className={`selection-button ${continuousCoverage === '3 to 4 years' ? 'selected' : ''}`}
            onClick={() => handleContinuousCoverageSelection('3 to 4 years')}
          >
            3-4 years
          </button>
          <button
            className={`selection-button ${continuousCoverage === '4 to 5 years' ? 'selected' : ''}`}
            onClick={() => handleContinuousCoverageSelection('4 to 5 years')}
          >
            4-5 years
          </button>
          <button
            className={`selection-button ${continuousCoverage === '5 or more years' ? 'selected' : ''}`}
            onClick={() => handleContinuousCoverageSelection('5 or more years')}
          >
            5+ years
          </button>
        </div>
      </div>
      <div className="button-container">
        <button onClick={onBack}>Last Page</button>
      </div>
    </div>
  );
}

export default Step10;
