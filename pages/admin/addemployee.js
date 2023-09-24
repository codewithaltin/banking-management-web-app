import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
const phoneReg =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

import Auth from "layouts/Auth.js";

const schema = yup.object().shape({}).required();
export default function addemployee() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const departamentOptions = ["IT", "Sales", "Operations", "Marketing"];
  const jobTitleOptions = [
    "Banking Operations Manager",
    "Banking Customer Service Representative",
    "Banking Sales Representative",
    "Banking Marketing Manager",
    "Banking IT Manager",
  ];

  const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/auth/employee";

  const [isOpen, setIsOpen] = useState(false);
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    departament: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    salary: 0,
  });
  const [responseEmployee, setResponseEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    departament: "",
    jobTitle: "",
    startDate: "",
    endDate: "",
    salary: 0,
  });
  const successfulAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Succesfully registered!",
      showConfirmButton: false,
      timer: 800,
    });
  };
  const saveEmployee = async (e) => {
    const response = await fetch(EMPLOYEE_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    successfulAlert();
    const _employee = await response.json();
    setResponseEmployee(_employee);
    window.location.reload();
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setEmployee({ ...employee, [event.target.name]: value });
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Add Employee
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit(saveEmployee)}>
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Full Name
                  </label>
                  <div className="flex w-full  mb-3">
                    <input
                      {...register("firstName")}
                      className="border-0 px-3 py-3 mr-3 placeholder-blueGray-300
                    text-blueGray-900 bg-white rounded text-sm shadow
                    focus:outline-none focus:ring w-1/2 ease-linear
                    transition-all duration-150"
                      placeholder="First Name"
                      name="firstName"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <input
                      {...register("lastName")}
                      name="lastName"
                      className="border-0 px-3 py-3 mx-5 placeholder-blueGray-300
                    text-blueGray-900 bg-white rounded text-sm shadow
                    focus:outline-none focus:ring w-1/2  ease-linear
                    transition-all duration-150"
                      placeholder="Last Name"
                      onChange={(e) => handleChange(e)}
                      value={employee.lastName}
                      required
                    />
                  </div>
                  <small role="alert" className="text-red-500 mb-2 mr-20 ">
                    {errors.firstName?.message}
                  </small>
                  <small role="alert" className="  text-red-500 mb-2 ">
                    {errors.lastName?.message}
                  </small>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      name="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s example@gmail.com"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.emailId?.message}
                    </small>
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Phone number
                    </label>
                    <input
                      {...register("phoneNumber")}
                      type="tel"
                      name="phoneNumber"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s 049-588-814"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.phoneNumber?.message}
                    </small>
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s Idriz Gjilani Street Entry 07"
                      name="address"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.phoneNumber?.message}
                    </small>
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Department
                    </label>
                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => handleChange(e)}
                      name="departament"
                    >
                      <option value="">Select Departament</option>
                      {departamentOptions.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Job title
                    </label>

                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      name="jobTitle"
                      onChange={(e) => handleChange(e)}
                    >
                      {jobTitleOptions.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Salary
                    </label>
                    <input
                      {...register("salary")}
                      type="number"
                      name="salary"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="500"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.emailId?.message}
                    </small>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Start Agreement Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="500"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.emailId?.message}
                    </small>
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      End Agreement Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="500"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.emailId?.message}
                    </small>
                  </div>

                  <div className="text-center mt-6">
                    <input
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      value="Submit"
                      onChange={saveEmployee}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

addemployee.layout = Auth;
