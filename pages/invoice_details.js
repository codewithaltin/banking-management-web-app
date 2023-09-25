import React from "react";
import AddInvoice from "components/Invoice/AddInvoice";
import TokenCheck from "components/TokenCheck";
import TableAuth from "layouts/TableAuth";
const invoice_details = () => {
  return (
    <>
      <TokenCheck>
        <AddInvoice />
      </TokenCheck>
    </>
  );
};

invoice_details.layout = TableAuth;

export default invoice_details;
