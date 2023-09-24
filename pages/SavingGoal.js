import React from "react";
import TokenCheck from "components/TokenCheck";
import SavingGoal from "components/SavingGoal/AddSavingGoal";
const savingGoal = () => {
  return (
    <TokenCheck>
      <SavingGoal />
    </TokenCheck>
  );
};

export default savingGoal;
