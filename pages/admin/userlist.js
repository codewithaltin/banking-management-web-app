import React from "react";
import UserTable from "components/Cards/UserTable.js";
import Admin from "layouts/Admin.js";
import TableAuth from "layouts/TableAuth";
import Auth from "layouts/Auth";

const userlist = () => {
  return (
    <>
      <UserTable />
    </>
  );
};
userlist.layout = Auth;

export default userlist;
