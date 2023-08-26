import React, { useState, useEffect } from 'react';

function Step3({ onNext, onBack, step }) {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  useEffect(() => {
    // Fetch address from localStorage
    const savedAddress = localStorage.getItem('address');
    if (savedAddress) {
      setAddress(savedAddress);
    }

    // Fetch city from localStorage
    const savedCity = localStorage.getItem('city');
    if (savedCity) {
      setCity(savedCity);
    }

    // Fetch state from localStorage
    const savedState = localStorage.getItem('state');
    if (savedState) {
      setState(savedState);
    }
  }, []);

  const handleNext = () => {
    // Save the values to localStorage when moving to the next step
    localStorage.setItem('address', address);
    localStorage.setItem('city', city);
    localStorage.setItem('state', state);
    onNext({ address: address, city: city, state: state }, step + 1);
  };  

  return (
    <div>
      <h1>Step 3: Enter Address, City and State</h1>
      <div className="button-container">
        <button onClick={onBack}>Last Page</button>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required 
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required 
        />
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required 
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step3;
