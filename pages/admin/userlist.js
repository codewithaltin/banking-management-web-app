import React from "react";
import UserTable from "components/Cards/UserTable.js";
import User from "layouts/User.js";

const userlist = () => {
  return (
    <>
      <UserTable />;
    </>
  );
};
userlist.layout = User;

export default userlist;
