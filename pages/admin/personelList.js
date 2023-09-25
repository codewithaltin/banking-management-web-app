import React from "react";
import Auth from "layouts/Auth";
import PersonnelTable from "components/Personnel/PersonnelTable.js";

const personelList = () => {
  return (
    <>
      <PersonnelTable />
    </>
  );
};
personelList.layout = Auth;

export default personelList;
