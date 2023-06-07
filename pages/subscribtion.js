import React from "react";
import ProductForm from "components/Cards/Subscription/ProductForm";
import PriceForm from "components/Cards/Subscription/PriceForm";
import PlanForm from "components/Cards/Subscription/PlanForm";
import { Stepper, StepLabel, Step } from "@material-ui/core";
const subscribtion = () => {
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
      <div style={{ width: "50%" }}>
        <div className="center-stepper">
          <Stepper activeStep="1" orientation="horizontal">
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

        {showStep(1)}
      </div>
    </div>
  );
};

export default subscribtion;
