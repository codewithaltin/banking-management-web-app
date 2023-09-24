import React from "react";
import AddRequestMoney from "components/RequestMoney/AddRequestMoney";
import TokenCheck from "components/TokenCheck";
import Auth from "layouts/Auth";

const requestMoney = () => {
  return (
    <TokenCheck>
      <AddRequestMoney />
    </TokenCheck>
  );
};
requestMoney.layout = Auth;

export default requestMoney;
