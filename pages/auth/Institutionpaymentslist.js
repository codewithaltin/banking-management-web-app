import React from "react";

import User from "layouts/User";
import FooterAdmin from "components/Footers/FooterAdmin";
import PaymentsNavbar from "components/Navbars/PaymentsNavbar";
import InstitutionPaymentsTable from "components/Payment/InstitutionPaymentsTable";
import Auth from "layouts/Auth";

const Institutionpaymentslist = () => {
  return (
    <>
      <PaymentsNavbar />
      <InstitutionPaymentsTable />
    </>
  );
};
Institutionpaymentslist.layout = Auth;

export default Institutionpaymentslist;
