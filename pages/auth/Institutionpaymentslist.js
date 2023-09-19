import React from "react";

import User from "layouts/User";
import FooterAdmin from "components/Footers/FooterAdmin";
import PaymentsNavbar from "components/Navbars/PaymentsNavbar";
import InstitutionPaymentsTable from "components/Cards/InstitutionPaymentsTable";

const Institutionpaymentslist = () => {
  return (
    <>
      <PaymentsNavbar />
      <InstitutionPaymentsTable />
    </>
  );
};
Institutionpaymentslist.layout = User;

export default Institutionpaymentslist;
