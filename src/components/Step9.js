import React, { useState, useEffect } from 'react';

function Step9({ onNext, onBack, step }) {
  const [insuranceCompany, setInsuranceCompany] = useState('');
  const [customInsuranceCompany, setCustomInsuranceCompany] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleInsuranceCompanySelection = (selectedOption) => {
    setInsuranceCompany(selectedOption);
        localStorage.setItem('insuranceCompany', selectedOption);
    if (selectedOption === 'Other') {
      setShowCustomInput(true);
    } else {
      setShowCustomInput(false);
    }
  };

  const handleCustomInsuranceCompanyChange = (e) => {
    setCustomInsuranceCompany(e.target.value);
  };

  const handleNext = () => {
    onNext({ insuranceCompany: showCustomInput ? customInsuranceCompany : insuranceCompany }, step + 1);
  };

  return (
    <div>
      <h1>Step 9: Who is your current insurance company?</h1>
      <div className="input-container">
        <label>Choose one:</label>
        <div className="answer-dropdown">
          <select
            value={insuranceCompany}
            onChange={(e) => handleInsuranceCompanySelection(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="AAA">AAA</option>
            <option value="Allstate">Allstate</option>
            <option value="Farmers">Farmers</option>
            <option value="Geico">Geico</option>
            <option value="Liberty Mutual">Liberty Mutual</option>
            <option value="State Farm">State Farm</option>
            <option value="Other">Other</option>
          </select>
          {showCustomInput && (
            <input
              type="text"
              placeholder="Please type in your insurance company"
              value={customInsuranceCompany}
              onChange={handleCustomInsuranceCompanyChange}
            />
          )}
        </div>
      </div>
      <div className="button-container">
        <button onClick={onBack}>Last Page</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Step9;
