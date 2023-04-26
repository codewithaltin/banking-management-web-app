import React from "react";
import CardTable from "components/Cards/CardTable.js";
import Admin from "layouts/Admin.js";

const UserList = () => {
  return (
    <div>
      <CardTable color="dark" />
    </div>
  );
};
UserList.layout = Admin;

export default UserList;
