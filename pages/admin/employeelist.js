import React from "react";
import EmployeeList from "components/Cards/EmployeeList.js";
import User from "layouts/Admin.js";
import Auth from "layouts/Auth";

const employeeList = () => {
  return <EmployeeList />;
};
employeeList.layout = Auth;

export default employeeList;
