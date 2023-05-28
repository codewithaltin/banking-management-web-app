import React from "react";
import EmployeeList from "components/Cards/EmployeeList.js";
import Admin from "layouts/Admin.js";

const employeeList = () => {
  return <EmployeeList />;
};
employeeList.layout = Admin;

export default employeeList;
