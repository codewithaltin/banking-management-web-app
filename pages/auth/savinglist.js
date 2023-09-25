import React from "react";
import SavingTable from "components/SavingGoal/SavingTable.js";
import Admin from "layouts/User.js";

import User from "layouts/Admin";
import Auth from "layouts/Auth";

const savinglist = () => {
  return (
    <>
      <SavingTable />
    </>
  );
};

savinglist.layout = Auth;

export default savinglist;
