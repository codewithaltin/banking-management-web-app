import React from "react";
import Admin from "layouts/User.js";

import User from "layouts/Admin";
import FooterAdmin from "components/Footers/FooterAdmin";
import PaymentsNavbar from "components/Navbars/PaymentsNavbar";
import InstitutionPaymentsTable from "components/Cards/InstitutionPaymentsTable";
import PrePaidServicesTable from "components/Cards/PrePaidServicesTable";
import CollectorPaymentTable from "components/Cards/CollectorPaymentTable";

const CollectorPaymentList = () => {
  return (
    <>
      <PaymentsNavbar />
      <CollectorPaymentTable />
      <FooterAdmin />
    </>
  );
};
CollectorPaymentList.layout = User;

export default CollectorPaymentList;
