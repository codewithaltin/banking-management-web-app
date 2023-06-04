import React from "react";
import SavingTable from "components/Cards/SavingTable.js";
import Admin from "layouts/Admin.js";

import User from "layouts/User";


const savinglist = () => {
  return (
    <>
            
      <SavingTable />

    </>
  );
};
savinglist.layout = User;

export default savinglist;