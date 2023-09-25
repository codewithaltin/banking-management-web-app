import React, { useState } from "react";
import Link from "next/link";
import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import TokenCheck from "components/TokenCheck";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import * as yup from "yup";
import { useRouter } from "next/router";
import TableAuth from "layouts/TableAuth";
const phoneReg =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required("Full Name is required.")
      .min(2, "Full name must be longer than 2 characters")
      .max(50, "Full name must be shorter than 50 characters."),
    // email: yup
    //   .string()
    //   .email("Please enter a valid e-mail")
    //   .required("Email is required."),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(phoneReg, "Phone Number is not valid."),
    address: yup
      .string()
      .required("Address is required")
      .min(5, "Address must be at least 5 characters"),
    loanAmount: yup
      .number()
      .typeError("Input must be a number")
      .required("Loan Amount is required")
      .min(2000, "Loan amount must be greater than €2000")
      .max(50000, "Loan amount must be lower than €50000"),
    monthlyIncome: yup
      .number()
      .typeError("Input must be a number")
      .required("Monthly incomes are required")
      .min(500, "Monthly incomes must be greater than €500"),
      purpouse: yup
      .string()
      .required("Loan purpouse is required")
      .min(10, "Purpouse must be at least 20 characters"),
  })
  .required();

export default function Loan() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
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

  let LOAN_API_BASE_URL;

  const [isOpen, setIsOpen] = useState(false);
  const [loan, setLoans] = useState({
    id: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    loanAmount: "",
    monthlyIncome: "",
    purpouse: "",
  });
  const [responseLoan, setResponseLoan] = useState({
    id: "",
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
    loanAmount: "",
    monthlyIncome: "",
    purpouse: "",
  });

  const successfulAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Succesfully registered loan!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    
    if (decoded) {
      console.log(decoded)
      loan.email = decoded.sub;
    } else console.log("decoding failed.");
  }, [decoded]);

  

  const executeLoanMethod = async () => {
      const response = await fetch("http://localhost:8080/api/v1/auth/loan/user/" + decoded.sub, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loan), 
      });
  
      if (!response.ok) {
        // Handle any errors if needed
        console.error('Loan failed');
      }

    const _loan = await response.json();
    setResponseLoan(_loan);
    successfulAlert();
    window.location.reload();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setLoans({ ...loan, [event.target.name]: value });
  };

  return (
    <TokenCheck>
      <>
        <Navbar transparent />
        <main>
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('/img/loan-application.jpg')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-75 bg-black"
              ></span>
            </div>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                      Apply for a Loan with Ease!
                    </h1>
                    <p className="mt-4 text-lg text-blueGray-200">
                      With just a few clicks, you can fill out our online
                      application and get approved for the funds you need in no
                      time. Apply now and take the first step toward achieving
                      your financial goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </div>

          <section className="pb-20 relative block bg-blueGray-800">
            <div
              className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
              style={{ transform: "translateZ(0)" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-blueGray-800 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
            <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
              <div className="flex flex-wrap text-center justify-center">
                <div className="w-full lg:w-6/12 px-4">
                  <h4 className="text-3xl font-semibold text-white">
                    Want to apply now?
                  </h4>
                </div>
              </div>
            </div>
          </section>
          <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                <div className="w-full lg:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                    <div className="flex-auto p-5 lg:p-10">
                      <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                        Complete this form and we will review your details.
                      </p>

                      <form onSubmit={handleSubmit(executeLoanMethod)}>
                        {" "}
                        <div className="relative w-full mb-3 mt-8">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="full-name"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            {...register("fullName")}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="p.s Ilir Gjika"
                            value={loan.fullName}
                            onChange={(e) => handleChange(e)}
                          />
                          <small role="alert" className="text-red-500 ">
                            {errors.fullName?.message}
                          </small>
                        </div>
                        {/* <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="email"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            {...register("email")}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="p.s example@gmail.com"
                            value={loan.email}
                            onChange={(e) => handleChange(e)}
                          />
                          <small role="alert" className="text-red-500 ">
                            {errors.email?.message}
                          </small>
                        </div> */}
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="phone-number"
                          >
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            {...register("phoneNumber")}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="p.s 045-630-886"
                            value={loan.phoneNumber}
                            onChange={(e) => handleChange(e)}
                          />
                          <small role="alert" className="text-red-500 ">
                            {errors.phoneNumber?.message}
                          </small>
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="address"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            {...register("address")}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="p.s Sheshi Skënderbej"
                            value={loan.address}
                            onChange={(e) => handleChange(e)}
                          />
                          <small role="alert" className="text-red-500 ">
                            {errors.address?.message}
                          </small>
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="loan-amount"
                          >
                            Loan Amount (€)
                          </label>
                          <input
                            type="number"
                            {...register("loanAmount")}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="p.s 15000"
                            value={loan.loanAmount}
                            onChange={(e) => handleChange(e)}
                          />
                          <small role="alert" className="text-red-500 ">
                            {errors.loanAmount?.message}
                          </small>
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="monthly-income"
                          >
                            Monthly income (€)
                          </label>
                          <input
                            type="number"
                            {...register("monthlyIncome")}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            placeholder="p.s 800"
                            value={loan.monthlyIncome}
                            onChange={(e) => handleChange(e)}
                          />
                          <small role="alert" className="text-red-500 ">
                            {errors.monthlyIncome?.message}
                          </small>
                        </div>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                            htmlFor="message"
                          >
                            Purpouse of loan
                          </label>
                          <textarea
                            rows="4"
                            cols="80"
                            {...register("purpouse")}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            placeholder="Type a message..."
                            value={loan.purpouse}
                            onChange={(e) => handleChange(e)}
                          />
                          <small role="alert" className="text-red-500 ">
                            {errors.purpouse?.message}
                          </small>
                        </div>
                        <div className="text-center mt-6">
                          <button
                            className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                            value="Submit"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    </TokenCheck>
  );
}