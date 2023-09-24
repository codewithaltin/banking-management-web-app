import React from "react";
import TransferTable from "components/Cards/FuturPlusTable.js";
import Auth from "layouts/Auth";
import Admin from "layouts/Admin";

const futurpluslist = () => {
  return (
    <>
      <FuturPlusTable />;
    </>
  );
};
futurpluslist.layout = Admin;

export default futurpluslist;