import React from "react";
import UserTable from "components/Cards/ContactTable.js";
import Admin from "layouts/Admin.js";

const contactlist = () => {
  return (
    <>
      <ContactTable />;
    </>
  );
};
contactlist.layout = Admin;

export default contactlist;