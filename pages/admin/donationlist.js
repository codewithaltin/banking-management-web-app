import React from "react";
import DonationTable from "components/Cards/DonationTable";
import User from "layouts/User.js";

const DonationList = () => {
  return (
    <>
      <DonationTable />
    </>
  );
};
DonationList.layout = User;

export default DonationList;
