import React from "react";
import AddLoan from "components/Loan/AddLoan";
import TokenCheck from "components/TokenCheck";
import TableAuth from "layouts/TableAuth";

const loan = () => {
  return (
    <TokenCheck>
      <AddLoan/>
    </TokenCheck>
  );
};

export default loan;
loan.layout = TableAuth;