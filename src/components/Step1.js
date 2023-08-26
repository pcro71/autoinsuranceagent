import React, { useState, useEffect } from 'react';

function Step1({ onNext, step }) { 
  const [zipCode, setZipCode] = useState('');

  useEffect(() => {
    const savedZipCode = localStorage.getItem('zipCode');
    if (savedZipCode) {
      setZipCode(savedZipCode);
    }
  }, []);

  const handleNext = () => {
    localStorage.setItem('zipCode', zipCode);
    const nextStep = step + 1;
    onNext({ zipCode: zipCode }, nextStep);
  };

  return (
    <div>
      <h1>Step 1: Enter Your Zip Code</h1>
      <input
        type="text"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        required
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step1;



