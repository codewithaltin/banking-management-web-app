import React from "react";
import RequestedTable from "components/RequestMoney/RequestMoneyTable";
import Admin from "layouts/User.js";

import User from "layouts/Admin";
import Auth from "layouts/Auth";

const requestedMoneyList = () => {
  return (
    <>
      <RequestedTable />
    </>
  );
};

requestedMoneyList.layout = Auth;

export default requestedMoneyList;
