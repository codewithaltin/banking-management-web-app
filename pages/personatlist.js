import React from "react";
import UserTable from "components/User/UserTable.js";
import Admin from "layouts/Admin.js";
import TableAuth from "layouts/TableAuth";
import Auth from "layouts/Auth";
import BankaTable from "components/Banka/BankaTable";
import PersoniTable from "components/Personi/PersoniTable";

const personatlist = () => {
  return (
    <>
      <PersoniTable />
    </>
  );
};
personatlist.layout = Auth;

export default personatlist;