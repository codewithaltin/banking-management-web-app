import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TokenCheck from "components/TokenCheck";
import * as yup from "yup";
import Swal from "sweetalert2";
import User from "layouts/Admin.js";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useRouter } from "next/router";

const schema = yup
  .object()
  .shape({
    payeeEmail: yup
      .string()
      .email("Please enter a valid e-mail")
      .required("Email is required."),
    amount: yup
      .number()
      .typeError("You must enter only numbers")
      .required("Please enter an amount.")
      .min(5, "5 EUR is the minmimun you can request."),
  })
  .required();
export default function AddRequestMoney() {
  const router = useRouter();
  const [decoded, setDecoded] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [requestMoney, setRequestMoney] = useState({
    requestedEmail: "",
    payeeEmail: "",
    amount: 0,
    description: "",
  });

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

  useEffect(() => {
    if (decoded) {
      requestMoney.requestedEmail = decoded.sub;
      console.log(requestMoney.requestedEmail);
    } else console.log("decoding failed.");
  }, [decoded]);
  const successfulAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Succesfully registered!",
      showConfirmButton: false,
      timer: 800,
    });
  };
  const saveRequestMoney = async (e) => {
    const response = await fetch(
      "http://localhost:8080/api/v1/auth/requestmoney/userRequest/" +
        decoded.sub,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestMoney),
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _requestMoney = await response.json();
    setRequestMoney(_requestMoney);
    successfulAlert();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setRequestMoney({ ...requestMoney, [event.target.name]: value });
  };
  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">
                  Request Money
                </h6>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit(saveRequestMoney)}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Payee Email
                  </label>
                  <input
                    {...register("payeeEmail")}
                    type="email"
                    name="payeeEmail"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter the email you are requesting money from"
                    onChange={(e) => handleChange(e)}
                    value={requestMoney.payeeEmail}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors.payeeEmail?.message}
                  </small>
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Amount
                  </label>
                  <input
                    {...register("amount")}
                    type="number"
                    name="amount"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => handleChange(e)}
                    placeholder="Enter the amount"
                    value={requestMoney.amount}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors["amount"]?.message}
                  </small>
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Descrciption
                  </label>
                  <input
                    type="text"
                    name="description"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={(e) => handleChange(e)}
                    placeholder="Write a short description about the request."
                  />
                </div>
                <div className="text-center mt-6">
                  <input
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                    value="Request Money"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
