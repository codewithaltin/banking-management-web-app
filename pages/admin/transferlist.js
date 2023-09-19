import React from "react";
import TransferTable from "components/Cards/TransferTable.js";
import Auth from "layouts/Auth";
import User from "layouts/User";

const transferlist = () => {
  return (
    <>
      <TransferTable />
    </>
  );
};
transferlist.layout = User;

export default transferlist;
