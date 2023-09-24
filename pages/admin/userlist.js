import React from "react";
import UserTable from "components/User/UserTable.js";
import Admin from "layouts/Admin.js";

const userlist = () => {
  return (
    <>
      <UserTable />
    </>
  );
};
userlist.layout = Admin;

export default userlist;
