import React from "react";
import TransferTable from "components/Transfer/TransferTable.js";
import Auth from "layouts/Auth";
import User from "layouts/User";
import LightAuth from "layouts/LightAuth";
import Admin from "layouts/Admin";

const transferlist = () => {
  return (
    <>
      <TransferTable />
    </>
  );
};
transferlist.layout = Auth;

export default transferlist;
