import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Routes, Route, useNavigate } from "react-router-dom";
import Auth from "layouts/Auth.js";
import Login from "pages/auth/login.js";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
const phoneReg =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .required("First Name is required.")
      .min(5, "First name must be longer than 5 characters")
      .max(50, "First name must be shorter than 30 characters."),
    lastName: yup
      .string()
      .required("Last Name is required.")
      .min(5, "Last name must be longer than 5 characters")
      .max(50, "Last name must be shorter than 50 characters."),
    emailId: yup
      .string()
      .email("Please enter a valid e-mail")
      .required("Email is required."),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(phoneReg, "Phone Number is not valid."),
    password: yup
      .string()
      .required("Password is required.")
      .min(5, "Password must be 5 characters long")
      .max(35, "Password must be shorter than 35 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match.")
      .required("Confirm Password field is required."),
  })
  .required();
export default function addemploye() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const departamentOptions = [
    "Costumer Service",
    "IT",
    "Sales",
    "Operations",
    "Marketing",
  ];
  const jobTitleOptions = [
    "Banking Operations Manager",
    "Banking Customer Service Representative",
    "Banking Sales Representative",
    "Banking Marketing Manager",
    "Banking IT Manager",
  ];
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };

  const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";

  const [isOpen, setIsOpen] = useState(false);

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
                <form>
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
                    />
                    <input
                      {...register("lastName")}
                      name="lastName"
                      className="border-0 px-3 py-3 mx-5 placeholder-blueGray-300
                    text-blueGray-900 bg-white rounded text-sm shadow
                    focus:outline-none focus:ring w-1/2  ease-linear
                    transition-all duration-150"
                      placeholder="Last Name"
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
                      {...register("emailId")}
                      type="email"
                      name="emailId"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s example@gmail.com"
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
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s 049-588-814"
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
                      onChange={onOptionChangeHandler}
                    >
                      <option>Select</option>
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
                      onChange={onOptionChangeHandler}
                    >
                      <option>Select</option>
                      {jobTitleOptions.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        {...register("category")}
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <small role="alert" className="text-red-500 ">
                        {errors.category?.message}
                      </small>
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          href="#pablo"
                          className="text-lightBlue-500"
                          onClick={(e) => e.preventDefault()}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                  <div className="text-center mt-6">
                    <input
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      value="Submit"
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
