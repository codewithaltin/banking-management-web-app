import React from "react";
import LoanTable from "components/Cards/LoanTable.js";
import User from "layouts/User.js";

const loanlist = () => {
  return (
    <>
      <LoanTable />
    </>
  );
};
loanlist.layout = User;

export default loanlist;
