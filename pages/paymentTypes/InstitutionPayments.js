import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import TokenCheck from "components/TokenCheck";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

import Auth from "layouts/Auth.js";

export default function InstitutionPayments() {

    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({ });
    const [decoded, setDecoded] = useState(null);
    const router = useRouter();
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      const decodedToken = jwt_decode(token);
      setDecoded(decodedToken);
    }, []);

    useEffect(() => {
      if (decoded) {
        if (decoded.authorities != "ROLE_USER") {
          Swal.fire({
            title: "Unauthorized page!",
            showConfirmButton: false,
            timer: 1500,
          });
          router.push("/");
        }
      } else console.log("decoding failed.");
    }, [decoded]);
    
  
  let INSTITUTIONPAYMENTS_API_BASE_URL;

  const [isOpen, setIsOpen] = useState(false);
  const [institutionPayments, setInstitutionPayments] = useState({
    id: "",
    institution: "",
    company: "",
    referenceNumber: "",
    amount: "",
  });
  const [responseInstitutionPayments, setResponseInstitutionPayments] = useState({
    id: "",
    institution: "",
    company: "",
    referenceNumber: "",
    amount: "",
  });
  // const navigate = useNavigate();
  // const navigateHome = () => {
  //   navigate("/");
  // };ss

  const successfulAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Succesfully registered Institution Payment!",
      showConfirmButton: false,
      timer: 2500,
    });
  };

  const saveInstitutionPayments = async (e) => {
    //e.preventDefault();
    const response = await fetch(
      "http://localhost:8080/api/v1/auth/institutionPayments/user/" + decoded.sub,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(institutionPayments),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _institutionPayments = await response.json();
    setResponseInstitutionPayments(_institutionPayments);
    successfulAlert();
    window.location.reload();
  };


  const InstitutionOption = [
    "Electricity",
    "Water",
    "Insurance",
    "Education Fee",
    "Heating",
    "Other",
  ];
  
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInstitutionPayments({ ...institutionPayments, [event.target.name]: value });
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
                    Institution Payments
                  </h6>
                  
                   <p className="text-blueGray-500 text-lg font-bold">
                    Effortless banking. Skip the lines, save time.
                   </p>
                  
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                
                <form onSubmit={handleSubmit(saveInstitutionPayments)}>
                  {" "}
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Institution
                    </label>
                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      name="institution"
                    >
                      <option></option>
                      {InstitutionOption.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Company
                    </label>
                    <input
                      {... register("company")}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => handleChange(e)}
                      required
                    />
                    
                  </div>
                  <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Reference Number
                  </label>
                  <input
                    {... register("referenceNumber")}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => handleChange(e)}
                    required
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
                    type="number"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  
                </div>
              </div>
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

InstitutionPayments.layout = Auth;
