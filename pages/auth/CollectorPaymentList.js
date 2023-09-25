import React from "react";
import Admin from "layouts/User.js";

import User from "layouts/Admin";
import FooterAdmin from "components/Footers/FooterAdmin";
import PaymentsNavbar from "components/Navbars/PaymentsNavbar";
import CollectorPaymentTable from "components/Payment/CollectorPaymentTable";
import TableAuth from "layouts/TableAuth";
import Auth from "layouts/Auth";

const CollectorPaymentList = () => {
  return (
    <>
      <PaymentsNavbar />
      <CollectorPaymentTable />
      <FooterAdmin />
    </>
  );
};
CollectorPaymentList.layout = Auth;

export default CollectorPaymentList;
