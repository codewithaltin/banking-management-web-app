import React from "react";
import RequestMoney from "components/Cards/RequestMoney";
import User from "layouts/Admin";
import RequestMoneyTable from "components/Cards/RequestMoneyTable";

const requestedMoney = () => {
  return (
    <>
      <RequestMoneyTable />
    </>
  );
};
requestedMoney.layout = User;

export default requestedMoney;
