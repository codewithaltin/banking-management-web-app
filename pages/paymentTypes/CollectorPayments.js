import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import Auth from "layouts/Auth.js";

export default function CollectorPayments() {

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({ });
    
  
  const COLLECTORPAYMENTS_API_BASE_URL = "http://localhost:8080/api/v1/collectorPayment";

  const [isOpen, setIsOpen] = useState(false);
  const [collectorPayments, setCollectorPayments] = useState({
    id: "",
    collector: "",
    serialNo: "",
    uniref: "",
    amount: "",
    description:"",
  });
  const [responseCollectorPayments, setResponseCollectorPayments] = useState({
    id: "",
    collector: "",
    serialNo: "",
    uniref: "",
    amount: "",
    description:""
  });
  // const navigate = useNavigate();
  // const navigateHome = () => {
  //   navigate("/");
  // };

  const saveCollectorPayments = async (e) => {
    //e.preventDefault();
    const response = await fetch(COLLECTORPAYMENTS_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(collectorPayments),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _collectorPayments = await response.json();
    setResponseCollectorPayments(_collectorPayments);
    window.location.reload();
  };

  
  const CollectorOption = [
    "Public Organizations",
    "Private Organizations",
    "Municipalities",
    "Education",
    "Ministries",
    "Prisons",
    "Authorities",
    "Other",
  ];
  
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setCollectorPayments({ ...collectorPayments, [event.target.name]: value });
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-800 text-lg font-bold">
                    Collector Payments
                  </h6>
                  
                   <p className="text-blueGray-500 text-lg font-bold">
                   Your branch on demand. Queue-free banking.
                   </p>
                  
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                
                <form onSubmit={handleSubmit(saveCollectorPayments)}>
                  {" "}
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Collector
                    </label>
                 
                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      name="collector"
                    >
                      <option></option>
                      {CollectorOption.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Serial NO
                    </label>
                    <input
                      {... register("serialNo")}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => handleChange(e)}
                    />
                    
                  </div>
                  <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    UNIREF
                  </label>
                  <input
                    {... register("uniref")}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => handleChange(e)}
                  />
                  
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Amount
                  </label>
                  <input
                    {... register("amount")}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => handleChange(e)}
                  />
                  
                </div>
              </div>
            </div>
            <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Description
                    </label>
                    <input
                      {... register("description")}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => handleChange(e)}
                    />
                    
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

CollectorPayments.layout = Auth;
