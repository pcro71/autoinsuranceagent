import React, { useState, useEffect } from 'react';

function Step11({ onNext, onBack, step }) {
  const [birthYear, setBirthYear] = useState('2008');
  const [birthMonth, setBirthMonth] = useState('January');
  const [birthDay, setBirthDay] = useState('1');

  useEffect(() => {
    const savedBirthYear = localStorage.getItem('birthYear');
    if(savedBirthYear) {
        setBirthYear(savedBirthYear);
    }

    const savedBirthMonth = localStorage.getItem('birthMonth');
    if(savedBirthMonth) {
        setBirthMonth(savedBirthMonth);
    }

    const savedBirthDay = localStorage.getItem('birthDay');
    if(savedBirthDay) {
        setBirthDay(savedBirthDay);
    }
  }, []);

  const handleNext = () => {
    localStorage.setItem('birthYear', birthYear);
    localStorage.setItem('birthMonth', birthMonth);
    localStorage.setItem('birthDay', birthDay);

    onNext(
      { birthYear: birthYear, birthMonth: birthMonth, birthDay: birthDay },
      step + 1
    );
  };

  return (
    <div>
      <h1>Step 11: What is your date of birth?</h1>
      <div className="input-container-dateofbirth">
        <label>Year:</label>
        <select value={birthYear} onChange={(e) => setBirthYear(e.target.value)}>
          {/* Options for birth years */}
          {Array.from({ length: 79 }, (_, index) => 2008 - index).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <label>Month:</label>
        <select value={birthMonth} onChange={(e) => setBirthMonth(e.target.value)}>
          {/* Options for birth months */}
          {Array.from({ length: 12 }, (_, index) => new Date(0, index).toLocaleString('default', { month: 'long' })).map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

        <label>Day:</label>
        <select value={birthDay} onChange={(e) => setBirthDay(e.target.value)}>
          {/* Options for birth days */}
          {Array.from({ length: 31 }, (_, index) => index + 1).map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}
        </select>
      </div>
      <div className="button-container">
        <button onClick={onBack}>Last Page</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Step11;
