import React from "react";
import AddTransfer from "components/Transfer/AddTransfer";
import TokenCheck from "components/TokenCheck";
import TableAuth from "layouts/TableAuth";

const transfer = () => {
  return (
    <TokenCheck>
      <AddTransfer />
    </TokenCheck>
  );
};

export default transfer;
transfer.layout = TableAuth;
