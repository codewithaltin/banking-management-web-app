import React from "react";
import PaymentsTable from "components/Cards/PaymentsTable.js";
import Admin from "layouts/Admin.js";

import User from "layouts/User";
import Footer from "components/Footers/Footer";
import FooterAdmin from "components/Footers/FooterAdmin";


const paymentslist = () => {
  return (
    <>
      <PaymentsTable />
      <FooterAdmin />
    </>
  );
};
paymentslist.layout = User;

export default paymentslist;