import React from "react";
import AddDonation from "components/Donation/AddDonation";
import TokenCheck from "components/TokenCheck";
import TableAuth from "layouts/TableAuth";

const donation = () => {
  return (
    <TokenCheck>
      <AddDonation/>
    </TokenCheck>
  );
};

export default donation;
donation.layout = TableAuth;