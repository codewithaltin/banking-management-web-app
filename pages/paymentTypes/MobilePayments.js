import React, { useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import TokenCheck from "components/TokenCheck";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
import Auth from "layouts/Auth.js";
import { useRouter } from "next/router";
import { number } from "joi";
import LazyResult from "postcss/lib/lazy-result";

export default function MobilePayments() {

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
    
  
  let MOBILEPAYMENTS_API_BASE_URL;

  const [isOpen, setIsOpen] = useState(false);
  const [mobilePayments, setMobilePayments] = useState({
    id: "",
    serviceProvider: "",
    numberCode: "",
    phoneNumber: "",
    amount: "",
  });
  const [responseMobilePayments, setResponseMobilePayments] = useState({
    id: "",
    serviceProvider: "",
    numberCode: "",
    phoneNumber: "",
    amount: "",
  });
  // const navigate = useNavigate();
  // const navigateHome = () => {
  //   navigate("/");
  // };

  const successfulAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Succesfully registered Mobile Payment!",
      showConfirmButton: false,
      timer: 5000,
    });
  };

  const saveMobilePayments = async (e) => {
    //e.preventDefault();
    const response = await fetch(
      "http://localhost:8080/api/v1/auth/mobilePayment/user/" + decoded.sub,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(mobilePayments),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _mobilePayments = await response.json();
    setResponseMobilePayments(_mobilePayments);
    successfulAlert();
    window.location.reload();
  };

  const serviceProviderOption = [
    "Ipko",
    "Vala",
  ];

  const codeOption = [
    "48",
    "43",
    "44",
    "45",
    "49",
  ];
  
  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setMobilePayments({ ...mobilePayments, [event.target.name]: value });
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
                    Mobile Payments
                  </h6>
                  
                   <p className="text-blueGray-500 text-lg font-bold">
                    Seamless banking. No lines, just convenience.
                   </p>
                  
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
                
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                
                <form onSubmit={handleSubmit(saveMobilePayments)}>
                  {" "}
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Service Provider
                    </label>
                 
                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      name="serviceProvider"
                    >
                      <option></option>
                      {serviceProviderOption.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                  </div>
                  
                  <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Number Code
                  </label>
                  <select
                   {...register("numberCode")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={handleChange}
                      name="numberCode"
                      required
                    >
                      <option></option>
                      {codeOption.map((option, index) => {
                        return <option key={index}>{option}</option>;
                      })}
                    </select>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Mobile Phone Number
                  </label>
                  <input
                    {... register("phoneNumber")}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  
                </div>
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

MobilePayments.layout = Auth;
