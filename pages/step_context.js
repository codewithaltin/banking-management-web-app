import React, { useState } from "react";
import Subscribtion from "./subscribtion";
export const multiStepContext = React.createContext();
const step_context = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}
      >
        <Subscribtion />
      </multiStepContext.Provider>
    </div>
  );
};

export default step_context;
