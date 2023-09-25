import React from "react";
import DonationTable from "components/Donation/DonationTable";
import User from "layouts/User.js";
import Auth from "layouts/Auth";

const DonationList = () => {
  return (
    <>
      <DonationTable />
    </>
  );
};
DonationList.layout = Auth;

export default DonationList;
