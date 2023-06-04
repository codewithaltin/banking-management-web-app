import React from 'react';
import DonationTable from "components/Cards/DonationTable";
import Admin from "layouts/Admin.js";

const DonationList = () => {
  return (
    <>
      <DonationTable />
    </>
  );
};
DonationList.layout = Admin;

export default DonationList;
