import React from "react";
import ContactTable from "components/Cards/ContactTable.js";
import User from "layouts/Admin";

const contactlist = () => {
  return (
    <>
      <ContactTable />
    </>
  );
};
contactlist.layout = User;

export default contactlist;
