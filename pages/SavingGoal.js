import React from "react";
import TokenCheck from "components/TokenCheck";
import SavingGoal from "components/SavingGoal/AddSavingGoal";
import AddSavingGoal from "components/SavingGoal/AddSavingGoal";
import TableAuth from "layouts/TableAuth";
const savingGoal = () => {
  return (
    <TokenCheck>
      <AddSavingGoal />
    </TokenCheck>
  );
};

export default savingGoal;

savingGoal.layout = TableAuth;
