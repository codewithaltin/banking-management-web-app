import React from "react";
import Admin from "layouts/User.js";

import User from "layouts/Admin";
import FooterAdmin from "components/Footers/FooterAdmin";
import PaymentsNavbar from "components/Navbars/PaymentsNavbar";
import MobilePaymentTable from "components/Payment/MobilePaymentTable";
import Auth from "layouts/Auth";

const MobilePaymentList = () => {
  return (
    <>
      <PaymentsNavbar />
      <MobilePaymentTable />
      <FooterAdmin />
    </>
  );
};
MobilePaymentList.layout = Auth;

export default MobilePaymentList;
