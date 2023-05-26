import React from 'react'
import LoanTable from "components/Cards/LoanTable";
import Admin from "layouts/Admin.js";

const loanlist = () => {
  return (
    <>
        <LoanTable />;
    </>
  );
};
loanlist.layout = Admin;

export default loanlist;