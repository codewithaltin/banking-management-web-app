import React from "react";
import EmployeeList from "components/Cards/EmployeeList.js";
import User from "layouts/Admin.js";

const employeeList = () => {
  return <EmployeeList />;
};
employeeList.layout = User;

export default employeeList;
