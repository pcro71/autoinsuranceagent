import React, { useState, useEffect  } from 'react';

function Step2({ onNext, onBack, step }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');


  useEffect(() => {
    // Fetch firstName from localStorage
    const savedFirstName = localStorage.getItem('firstName');
    if (savedFirstName) {
      setFirstName(savedFirstName);
    }

    // Fetch lastName from localStorage
    const savedLastName = localStorage.getItem('lastName');
    if (savedLastName) {
      setLastName(savedLastName);
    }
  }, []);

  const handleNext = () => {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    onNext({ firstName: firstName, lastName: lastName }, step + 1);
  };

  return (
    <div>
      <h1>Step 2: Enter Your First and Last Name</h1>
      <div className="button-container">
        <button onClick={onBack}>Last Page</button>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required 
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required 
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}

export default Step2;
