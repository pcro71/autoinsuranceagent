import React, { useEffect } from 'react';

function Step14({ leadData, onBack, step }) {

  useEffect(() => {
    console.log(leadData);
    
    const postLeadData = async () => {
      // Fetch data from local storage
      let storedLeadData = {};
      for (let key in localStorage) {
        if (localStorage.hasOwnProperty(key)) {
          storedLeadData[key] = localStorage[key];
        }
      }

      // Send data to server asynchronously
      try {
        const response = await fetch('/saveToFirestore', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(storedLeadData)
        });
        
        const data = await response.json();
        if (data.message) {
          console.log(data.message);
        }

      } catch (error) {
        console.error('There was an error!', error);
      }
    };

    postLeadData();

  }, [leadData]);

  const { lastName } = leadData;

  return (
    <div>
      <h1>Thank You for Your Time, Mr. {lastName}</h1>
      <p>We'll be calling you shortly.</p>
      <div className="button-container">
        <button onClick={onBack}>Last Page</button>
      </div>
    </div>
  );
}

export default Step14;
