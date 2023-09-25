import React from "react";
import ContactTable from "components/Contact/ContactTable.js";
import Auth from "layouts/Auth";

const contactlist = () => {
  return (
    <>
      <ContactTable />
    </>
  );
};
contactlist.layout = Auth;

export default contactlist;
