import React from "react";
import SavingTable from "components/Cards/SavingTable.js";
import Admin from "layouts/User.js";

import User from "layouts/Admin";

const savinglist = () => {
  return (
    <>
      <SavingTable />
    </>
  );
};

savinglist.layout = Admin;

export default savinglist;
