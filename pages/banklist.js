import React from "react";
import UserTable from "components/User/UserTable.js";
import Admin from "layouts/Admin.js";
import TableAuth from "layouts/TableAuth";
import Auth from "layouts/Auth";
import BankaTable from "components/Banka/BankaTable";

const banklist = () => {
  return (
    <>
      <BankaTable />
    </>
  );
};
banklist.layout = Auth;

export default banklist;