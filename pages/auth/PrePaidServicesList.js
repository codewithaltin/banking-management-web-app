import React from "react";
import Admin from "layouts/User.js";

import User from "layouts/Admin";
import FooterAdmin from "components/Footers/FooterAdmin";
import PaymentsNavbar from "components/Navbars/PaymentsNavbar";
import InstitutionPaymentsTable from "components/Payment/InstitutionPaymentsTable";
import PrePaidServicesTable from "components/Payment/PrePaidServicesTable";
import Auth from "layouts/Auth";

const PrePaidServicesList = () => {
  return (
    <>
      <PaymentsNavbar />
      <PrePaidServicesTable />
      <FooterAdmin />
    </>
  );
};
PrePaidServicesList.layout = Auth;

export default PrePaidServicesList;
