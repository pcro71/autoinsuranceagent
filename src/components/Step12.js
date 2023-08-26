import React, { useState, useEffect } from 'react';

function Step6({ onNext, onBack, step }) {
  const [atFaultAccidents, setAtFaultAccidents] = useState('');
  const [movingViolations, setMovingViolations] = useState('');
  const [hasDUI, setHasDUI] = useState('');

  useEffect(() => {
    const savedatFaultAccidents = localStorage.getItem('atFaultAccidents');
    if(savedatFaultAccidents) {
        setAtFaultAccidents(savedatFaultAccidents);
    }
    
    const savedmovingViolations = localStorage.getItem('movingViolations');
    if(savedmovingViolations) {
        setMovingViolations(savedmovingViolations);
    }
    
    const savedhasDUI = localStorage.getItem('hasDUI');
    if(savedhasDUI) {
        setHasDUI(savedhasDUI);
    }
  }, []);  

  const handleAtFaultAccidentsSelection = (selectedOption) => {
    setAtFaultAccidents(selectedOption);
    localStorage.setItem('atFaultAccidents', selectedOption);  // Use selectedOption directly
};

const handleMovingViolationsSelection = (selectedOption) => {
    setMovingViolations(selectedOption);
    localStorage.setItem('movingViolations', selectedOption);  // Use selectedOption directly
};

const handleHasDUISelection = (selectedOption) => {
    setHasDUI(selectedOption);
    localStorage.setItem('hasDUI', selectedOption);  // Use selectedOption directly
};

  const handleNext = () => {
    onNext(
      { atFaultAccidents: atFaultAccidents, movingViolations: movingViolations, hasDUI: hasDUI},
      step + 1
    );
  };


  return (
    <div>
      <h1>Step 12: Insurance History</h1>

      <div className="input-container">
        <label>How many at fault accidents have you had in the last three years?</label>
        <div className="answer-buttons">
          <button
            className={`selection-button ${atFaultAccidents === '0' ? 'selected' : ''}`}
            onClick={() => handleAtFaultAccidentsSelection('0')}
          >
            0
          </button>
          <button
            className={`selection-button ${atFaultAccidents === '1' ? 'selected' : ''}`}
            onClick={() => handleAtFaultAccidentsSelection('1')}
          >
            1
          </button>
          <button
            className={`selection-button ${atFaultAccidents === '2' ? 'selected' : ''}`}
            onClick={() => handleAtFaultAccidentsSelection('2')}
          >
            2
          </button>
          <button
            className={`selection-button ${atFaultAccidents === '3+' ? 'selected' : ''}`}
            onClick={() => handleAtFaultAccidentsSelection('3+')}
          >
            3 or more
          </button>
        </div>
      </div>

      <div className="input-container">
        <label>How many moving violations have you had in the last three years?</label>
        <div className="answer-buttons">
          <button
            className={`selection-button ${movingViolations === '0' ? 'selected' : ''}`}
            onClick={() => handleMovingViolationsSelection('0')}
          >
            0
          </button>
          <button
            className={`selection-button ${movingViolations === '1' ? 'selected' : ''}`}
            onClick={() => handleMovingViolationsSelection('1')}
          >
            1
          </button>
          <button
            className={`selection-button ${movingViolations === '2' ? 'selected' : ''}`}
            onClick={() => handleMovingViolationsSelection('2')}
          >
            2
          </button>
          <button
            className={`selection-button ${movingViolations === '3+' ? 'selected' : ''}`}
            onClick={() => handleMovingViolationsSelection('3+')}
          >
            3 or more
          </button>
        </div>
      </div>

      <div className="input-container">
        <label>Have you had a DUI in the last three years?</label>
        <div className="answer-buttons">
          <button
            className={`selection-button ${hasDUI === 'yes' ? 'selected' : ''}`}
            onClick={() => handleHasDUISelection('yes')}
          >
            Yes
          </button>
          <button
            className={`selection-button ${hasDUI === 'no' ? 'selected' : ''}`}
            onClick={() => handleHasDUISelection('no')}
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

export default Step6;
