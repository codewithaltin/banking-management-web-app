import React from "react";
import LoanTable from "components/Loan/LoanTable.js";
import User from "layouts/User.js";
import Auth from "layouts/Auth";

const loanlist = () => {
  return (
    <>
      <LoanTable />
    </>
  );
};
loanlist.layout = Auth;

export default loanlist;
