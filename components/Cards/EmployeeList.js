import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import EditEmployee from "./EditEmployee";
import Employee from "./Employee";
import Swal from "sweetalert2";

export default function EmployeeList({ employee, color }) {
  const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/auth/employee";
  const [employees, setemployees] = useState(null);
  const [loading, setLoading] = useState(true);
  const [employeeId, setemployeeId] = useState(null);
  const [responseEmployee, setResponseEmployee] = useState(null);
  const [search, setSearch] = useState("");
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

  const confirmDelete = (e, id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmployee(e, id);
        Swal.fire("Deleted!", "Deleted Succesfully!", "success");
      }
    });
  };

  const deleteEmployee = (e, id) => {
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
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <div className="flex items-center">
                <form>
                <div class="relative">
                    <div class="absolute inset-b-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa fa-search text-blue-50 mt-3"></i>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full p-2 pl-10 text-sm text-blue-50 border border-gray-300 rounded-lg bg-blueGray-600 "
                      placeholder="Search employee by e-mail..."
                      onChange={(e) => setSearch(e.target.value)}
                      required
                    ></input>
                    <button
                      type="submit"
                      class="text-white absolute right-2.5 bottom-2.5 bg-blue-50 "
                    ></button>
                  </div>
                </form>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <a
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    href="addemployee"
                  >
                    Add Employee
                  </a>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  First Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Last Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Email
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Phone Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Departament
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Job Title
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  End Agreement Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                ></th>
                <th
                  colSpan={2}
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Actions
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {employees
                ?.filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.email.toLowerCase().includes(search);
                }).map((employee) => (
                  <Employee
                    employee={employee}
                    key={employee.id}
                    confirmDelete={confirmDelete}
                    editEmployee={editEmployee}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
        <EditEmployee
          employeeId={employeeId}
          setResponseEmployee={setResponseEmployee}
          setIsOpen={true}
        />
      </div>
    </>
  );
}
