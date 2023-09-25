import React, { useContext, useState } from "react";
import ProductForm from "components/Subscription/ProductForm";
import PriceForm from "components/Subscription/PriceForm";
import PlanForm from "components/Subscription/PlanForm";
import { Stepper, StepLabel, Step } from "@material-ui/core";
import { multiStepContext } from "./step_context";

const subscribtion = () => {
  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <ProductForm />;
      case 2:
        return <PlanForm />;
      case 3:
        return <PriceForm />;
    }
  }
  return (
    <div className=" flex justify-center" style={{ width: "100%" }}>
      <div style={{ width: "70%" }}>
        <div className="center-stepper">
          <Stepper activeStep={currentStep - 1} orientation="horizontal">
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
            <Step>
              <StepLabel></StepLabel>
            </Step>
          </Stepper>{" "}
        </div>

        {showStep(currentStep)}
      </div>
    </div>
  );
};

export default subscribtion;
