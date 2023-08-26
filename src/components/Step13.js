import React, { useState, useEffect } from 'react';

function Step13({ onNext, onBack, step }) {
  const [creditScore, setCreditScore] = useState('');
  const [ownHome, setOwnHome] = useState('');

  useEffect(() => {
    const savedcreditScore = localStorage.getItem('creditScore');
    if(savedcreditScore) {
        setCreditScore(savedcreditScore);
    }

    const savedownHome = localStorage.getItem('ownHome');
    if(savedownHome) {
        setOwnHome(savedownHome);
    }
  }, []);

  const handleCreditScoreSelection = (selectedOption) => {
    setCreditScore(selectedOption);
  };

  const handleOwnHomeSelection = (selectedOption) => {
    setOwnHome(selectedOption);
  };

  const handleNext = () => {
    localStorage.setItem('creditScore', creditScore);
    localStorage.setItem('ownHome', ownHome);
    onNext(
      { creditScore: creditScore, ownHome: ownHome },
      step + 1
    );
  };

  return (
    <div>
      <h1>Step 13: Additional Information</h1>
      <div className="input-container">
        <label>What is your credit score?</label>
        <div className="answer-buttons">
          <button
            className={`selection-button ${creditScore === 'have issues' ? 'selected' : ''}`}
            onClick={() => handleCreditScoreSelection('have issues')}
          >
            Have Issues
          </button>
          <button
            className={`selection-button ${creditScore === 'good' ? 'selected' : ''}`}
            onClick={() => handleCreditScoreSelection('good')}
          >
            Good
          </button>
          <button
            className={`selection-button ${creditScore === 'very good' ? 'selected' : ''}`}
            onClick={() => handleCreditScoreSelection('very good')}
          >
            Very Good
          </button>
          <button
            className={`selection-button ${creditScore === 'excellent' ? 'selected' : ''}`}
            onClick={() => handleCreditScoreSelection('excellent')}
          >
            Excellent
          </button>
        </div>
      </div>
      <div className="input-container">
        <label>Do you own your own home?</label>
        <div className="answer-buttons">
          <button
            className={`selection-button ${ownHome === 'yes' ? 'selected' : ''}`}
            onClick={() => handleOwnHomeSelection('yes')}
          >
            Yes
          </button>
          <button
            className={`selection-button ${ownHome === 'no' ? 'selected' : ''}`}
            onClick={() => handleOwnHomeSelection('no')}
          >
            No
          </button>
        </div>
      </div>
      <div className="button-container">
        <button onClick={onBack}>Last Page</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Step13;
