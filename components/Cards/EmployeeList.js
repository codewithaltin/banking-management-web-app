import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Editemployee from "./EditUser";
import Employee from "./Employee";

export default function EmployeeList({ employee }) {
  const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employee";
  const [employees, setemployees] = useState(null);
  const [loading, setLoading] = useState(true);
  const [employeeId, setemployeeId] = useState(null);
  const [responseEmployee, setresponseEmployee] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(EMPLOYEE_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const employees = await response.json();
        setemployees(employees);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [employee, responseEmployee]);

  const deleteEmployee = (e, id) => {
    let confirmed = confirm("Are you sure you wanna delete this employee?");
    if (!confirmed) return;
    e.preventDefault();
    fetch(EMPLOYEE_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (employees) {
        setemployees((prevElement) => {
          return prevElement.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  const editEmployee = (e, id) => {
    e.preventDefault();
    setemployeeId(id);
  };
  return (
    <>
      <div className=" w-28 h-28 mt-16">.</div>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 mt-16 shadow-lg rounded "
        }
      >
        <div className="rounded-t mb-0 px-4 py-3  border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex justify-between  flex-grow flex-1">
              <h3 className={"font-semibold text-lg py-5"}>Employees List</h3>
              <a
                className={"font-semibold text-sm py-5 text-blue-100 underline"}
                href="addemployee"
              >
                Add Employee
              </a>
            </div>
          </div>
        </div>
        <div className=" w-full overflow-x-auto flex justify-center  ">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle bg-blueGray-200 border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  First Name
                </th>
                <th
                  className={
                    "px-6 align-middle border bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Last name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Email
                </th>
                <th className="px-6 align-middle border  bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                  Phone number
                </th>
                <th className="px-6 align-middle border  bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                  Departament
                </th>
                <th className="px-6 align-middle border  bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                  Job Title
                </th>
                <th className="px-6 align-middle border  bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                  End-Agreement Date
                </th>
                <th
                  colSpan={2}
                  className={
                    " col-span-2 px-6  align-middle border min-w-full bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Actions
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {employees?.map((employee) => (
                  <Employee
                    employee={employee}
                    key={employee.id}
                    deleteEmployee={deleteEmployee}
                    editEmployee={editEmployee}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
        <Editemployee
          employeeId={employeeId}
          setresponseEmployee={setresponseEmployee}
        />
      </div>
    </>
  );
}
