import React, { useState } from 'react';
import Step1 from './components/Step1.js';
import Step2 from './components/Step2.js';
import Step3 from './components/Step3.js';
import Step4 from './components/Step4.js';
import Step5 from './components/Step5.js';
import Step6 from './components/Step6.js';
import Step7 from './components/Step7.js';
import Step8 from './components/Step8.js';
import Step9 from './components/Step9.js';
import Step10 from './components/Step10.js'; 
import Step11 from './components/Step11.js'; 
import Step12 from './components/Step12.js'; 
import Step13 from './components/Step13.js';
import Step14 from './components/Step14.js';
import './styles/style.css';

function App() {
  const [step, setStep] = useState(1); 
  const [leadData, setLeadData] = useState({});

  const handleStepNext = (data, nextStep) => {
    setLeadData({ ...leadData, ...data });
    setStep(nextStep);
  };

  const handleBack = () => {
    if (step === 10 && leadData.currentlyInsured === 'no') {
      setStep(8); // Go back to Step 8 if not currently insured
    } else {
      setStep(step - 1); // Go back to the previous step normally
    }
  };

  const handleStepDone = (data) => {
    setLeadData({ ...leadData, ...data });
    console.log('Lead Data:', leadData);
    // Perform any further actions (e.g., sending data to server)
  };

  return (
    <div className="app">
      {step === 1 && <Step1 onNext={(data, nextStep) => handleStepNext(data, nextStep)} step={step} />}
      {step === 2 && <Step2 onNext={(data, nextStep) => handleStepNext(data, nextStep)} onBack={handleBack} step={step} />}
      {step === 3 && <Step3 onNext={(data, nextStep) => handleStepNext(data, nextStep)} onBack={handleBack} step={step} />}
      {step === 4 && <Step4 onNext={(data, nextStep) => handleStepNext(data, nextStep)} onBack={handleBack} step={step} />}
      {step === 5 && <Step5 onNext={(data, nextStep) => handleStepNext(data, nextStep)} onBack={handleBack} step={step} />}
      {step === 6 && <Step6 onNext={(data, nextStep) => handleStepNext(data, nextStep)} onBack={handleBack} step={step} />}
      {step === 7 && <Step7 onNext={(data, nextStep) => handleStepNext(data, nextStep)} onBack={handleBack} step={step} />}
      {step === 8 && <Step8 onNext={(data, nextStep) => handleStepNext(data, nextStep)} onBack={handleBack} step={step} />}
      {step === 9 && <Step9 onNext={(data, nextStep) => handleStepNext(data, nextStep)} onBack={handleBack} step={step} />}
      {step === 10 && <Step10 onNext={(data, nextStep) => handleStepNext(data, nextStep)} onBack={handleBack} step={step} />}
      {step === 11 && <Step11 onNext={(data, nextStep) => handleStepNext(data, nextStep)} onBack={handleBack} step={step} />}
      {step === 12 && <Step12 onNext={(data, nextStep) => handleStepNext(data, nextStep)} onBack={handleBack} step={step} />}
      {step === 13 && <Step13 onNext={(data, nextStep) => handleStepNext(data, nextStep)} onBack={handleBack} step={step} />}
      {step === 14 && <Step14 leadData={leadData} onBack={handleBack} />}
    </div>
  );
}

export default App;
