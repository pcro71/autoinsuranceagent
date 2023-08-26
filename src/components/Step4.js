import React, { useState, useEffect } from 'react';

function Step4({ onNext, onBack, step }) {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    // Fetch email from localStorage
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) {
      setEmail(savedEmail);
    }

    // Fetch phone from localStorage
    const savedPhone = localStorage.getItem('phone');
    if (savedPhone) {
      setPhone(savedPhone);
    }
  }, []);

  const handleNext = () => {
    // Save the values to localStorage when moving to the next step
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    
    onNext({ email: email, phone: phone }, step + 1);
  };

  return (
    <div>
      <h1>Step 4: Enter Email Address and Phone Number</h1>
      <div className="button-container">
        <button onClick={onBack}>Last Page</button>
      </div>
      <div className="input-container">
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required 
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step4;