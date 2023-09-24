import React from "react";
import RequestMoney from "components/Cards/RequestMoney";
import User from "layouts/Admin";
import RequestMoneyTable from "components/Cards/RequestMoneyTable";
import Auth from "layouts/Auth";

const requestedMoney = () => {
  return (
    <>
      <RequestMoneyTable />
    </>
  );
};
requestedMoney.layout = Auth;

export default requestedMoney;
