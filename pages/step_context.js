import React, { useState } from "react";
import Subscribtion from "./subscribtion";
export const multiStepContext = React.createContext();
const step_context = () => {
  const [currentStep, setStep] = useState(1);
  const [subscribtionData, setSubscribtionData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  function submitData() {
    setFinalData((finalData) => [...finalData, subscribtionData]);
    setSubscribtionData("");
    setStep(1);
  }
  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          subscribtionData,
          setSubscribtionData,
          finalData,
          setFinalData,
          submitData,
        }}
      >
        <Subscribtion />
      </multiStepContext.Provider>
    </div>
  );
};

export default step_context;
