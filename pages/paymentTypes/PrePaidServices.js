import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TokenCheck from "components/TokenCheck";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

import Auth from "layouts/Auth.js";

export default function PrePaidServices() {

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({ });
    const [decoded, setDecoded] = useState(null);
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      const decodedToken = jwt_decode(token);
      setDecoded(decodedToken);
    }, []);
    
  
  let PREPAIDSERVICES_API_BASE_URL;

  const [isOpen, setIsOpen] = useState(false);
  const [prePaidService, setPrePaidServices] = useState({
    id: "",
    operator: "",
    product: "",
    amount: "",
  });
  const [responsePrePaidServices, setResponsePrePaidServices] = useState({
    id: "",
    operator: "",
    product: "",
    amount: "",
  });
  // const navigate = useNavigate();
  // const navigateHome = () => {
  //   navigate("/");
  // };ss

  const successfulAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Succesfully registered Pre Paid!",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const savePrePaidServices = async (e) => {
    //e.preventDefault();
    const response = await fetch(
      "http://localhost:8080/api/v1/auth/prePaidPayment/user/" + decoded.sub,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(prePaidService),
    });
    if(!response.ok){
      throw new Error("Something went wrong");
    }
    const _prePaidServices = await response.json();
    setResponsePrePaidServices(_prePaidServices);
    successfulAlert();
    window.location.reload();
  };


  const OperatorOption = [
    "Ipko",
    "Kujtesa",
    "Telnet",
    "Other",
  ];

  const ProductOption = [
    "TV",
    "Internet",
    "DuoTv",
    "Other",
  ];
  
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setPrePaidServices({ ...prePaidService, [event.target.name]: value });
  };

  return (
    <TokenCheck>
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-800 text-lg font-bold">
                    Pre-Paid Services Payment
                  </h6>
                  
                   <p className="text-blueGray-500 text-lg font-bold">
                    Your virtual branch. Instant access, no waiting.
                   </p>
                  
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                
                <form onSubmit={handleSubmit(savePrePaidServices)}>
                  {" "}
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Operator
                    </label>
                    <select

                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      name="operator"
                    >
                      <option></option>
                      {OperatorOption.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Product
                    </label>
                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      name="product"
                      required
                    >
                      <option></option>
                      {ProductOption.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>
              
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
                      required
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
    </TokenCheck>
  );
}

PrePaidServices.layout = Auth;
