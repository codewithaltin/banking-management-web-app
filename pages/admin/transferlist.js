import React from "react";
import TransferTable from "components/Cards/TransferTable.js";
import Auth from "layouts/Auth";
import Admin from "layouts/Admin";

const transferlist = () => {
  return (
    <>
      <TransferTable />;
    </>
  );
};
transferlist.layout = Auth;

export default transferlist;