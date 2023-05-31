import React from "react";
import SavingTable from "components/Cards/SavingTable.js";
import Admin from "layouts/Admin.js";

const savinglist = () => {
  return (
    <>
      <SavingTable />;
    </>
  );
};
savinglist.layout = Admin;

export default savinglist;