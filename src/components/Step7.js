import React, { useState, useEffect } from 'react';

function Step7({ onNext, onBack, step }) {
  const [mileage, setMileage] = useState('');

  useEffect(() => {
    // Fetch mileage from localStorage
    const savedMileage = localStorage.getItem('mileage');
    if (savedMileage) {
      setMileage(savedMileage);
    }
  }, []);

  const handleMileageSelection = (selectedOption) => {
    setMileage(selectedOption);
    localStorage.setItem('mileage', selectedOption);
    onNext({ mileage: selectedOption }, step + 1);
  };
  
  return (
    <div>
      <h1>Step 7: What is the annual mileage on your car?</h1>
      <div className="input-container">
        <label>Choose one:</label>
        <div className="answer-buttons">
          <button
            className={`selection-button ${mileage === '<5k' ? 'selected' : ''}`}
            onClick={() => handleMileageSelection('<5k')}
          >
            &lt;5k
          </button>
          <button
            className={`selection-button ${mileage === '5-10k' ? 'selected' : ''}`}
            onClick={() => handleMileageSelection('5-10k')}
          >
            5-10k
          </button>
          <button
            className={`selection-button ${mileage === '10-15k' ? 'selected' : ''}`}
            onClick={() => handleMileageSelection('10-15k')}
          >
            10-15k
          </button>
          <button
            className={`selection-button ${mileage === '15-20k' ? 'selected' : ''}`}
            onClick={() => handleMileageSelection('15-20k')}
          >
            15-20k
          </button>
          <button
            className={`selection-button ${mileage === '20k+' ? 'selected' : ''}`}
            onClick={() => handleMileageSelection('20k+')}
          >
            20k+
          </button>
        </div>
      </div>
      <div className="button-container">
        <button onClick={onBack}>Last Page</button>
      </div>
    </div>
  );
}

export default Step7;
