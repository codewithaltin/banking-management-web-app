import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// components


// layout for page

import Auth from "layouts/Auth.js";


const schema = yup
  .object()
  .shape({
    accountNumber: yup
      .string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .required("Account number is required.")
      .min(16, "Account number must be exactly 16 characters")
      .max(16, "Account number must be exactly 16 characters"),
    amount: yup
     .string().required("Amount of transfer is required"),
    date: yup
      .string().required("Date is required"),
    reciverAccountNumber: yup
      .string()
      .matches(/^[0-9]+$/, "Must be only digits")
      .required("Account number is required.")
      .min(16, "Account number must be exactly 16 characters")
      .max(16, "Account number must be exactly 16 characters"),
    city: yup
      .string()
      .required("City is required.")
      .min(2, "City must be longer than 2 characters")
      .max(50, "City must be shorter than 50 characters."),
    country: yup
      .string()
      .required("Country is required.")
      .min(2, "Country must be longer than 2 characters")
      .max(50, "Country must be shorter than 50 characters."),
    postCode: yup
      .string().required("Post Code is required"),
    "text": yup
      .string()
      .required("Some text is required.")
      .min(5, "Text must be longer than  5 characters")
  })
  .required();


export default function Transfer() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({ resolver: yupResolver(schema) });

      const TRANSFER_API_BASE_URL = "http://localhost:8080/api/v1/auth/transfer";

    
    const [transfer, setTransfers] = useState({
    id: "",
    accountNumber:"",
    amount: "",
    date:"",
    reciverAccountNumber:"",
    city:"",
    country:"",
    postCode:"",
    text: "",
  });
  const [responseTransfer, setResponseTransfer] = useState({
    id: "",
    accountNumber:"",
    amount: "",
    date:"",
    reciverAccountNumber:"",
    city:"",
    country:"",
    postCode:"",
    text: "",
  });

  const executeTransferMethod = async () => {
    try {
      const response = await fetch(TRANSFER_API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transfer), 
      });
  
      if (!response.ok) {
        // Handle any errors if needed
        console.error('Transfer failed');
      } else {
        console.log('Transfer executed successfully!');
        location.reload();
      }
    } catch (error) {
 
      console.error('An error occurred:', error);
    }
  };

  const saveTransfer = async (e) => {
    //e.preventDefault();
    const response = await fetch(TRANSFER_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transfer),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _transfer = await response.json();
    setResponseTransfer(_transfer);
    window.location.reload();
  };

      const handleChange = (event) => {
        const value = event.target.value;
        setTransfers({ ...transfer, [event.target.name]: value });
      };

  return (
    <>
      <div className="flex flex-wrap justify-center ">
        <div className="w-full  lg:w-8/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">Account Transfer Form</h6>
            
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form onSubmit={handleSubmit(executeTransferMethod)}>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Your Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                
              </div>
              <div className="w-full lg:w-6/12 px-4">
                
              </div>
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Account Number
                  </label>
                  <input
                  {... register("accountNumber")}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={transfer.accountNumber}
                    onChange={(e) => handleChange(e)}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors.accountNumber?.message}
                  </small>
                </div>
              </div>
            </div>

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Transfer Information
            </h6>
            <div className="flex flex-wrap">
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
                    value={transfer.amount}
                    onChange={(e) => handleChange(e)}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors.amount?.message}
                  </small>
                </div>
              </div>
              <div className="mb-4 ">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Date 
                  </label>
                    <input
                    {... register("date")}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    id="dueDate"
                    name="dueDate"
                    type="date"
                    {... register("date")}
                    value={transfer.date}
                    onChange={(e) => handleChange(e)}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors.date?.message}
                  </small>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Receiver Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Account Number
                  </label>
                  <input
                  {... register("reciverAccountNumber")}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={transfer.reciverAccountNumber}
                    onChange={(e) => handleChange(e)}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors.reciverAccountNumber?.message}
                  </small>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                  {... register("city")}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={transfer.city}
                    onChange={(e) => handleChange(e)}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors.city?.message}
                  </small>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Country
                  </label>
                  <input
                  {... register("country")}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={transfer.country}
                    onChange={(e) => handleChange(e)}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors.country?.message}
                  </small>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Postal Code
                  </label>
                  <input
                  {... register("postCode")}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={transfer.postCode}
                    onChange={(e) => handleChange(e)}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors.postCode?.message}
                  </small>
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Transfer
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Description
                  </label>
                  <textarea
                    {...register("text")}
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="5"
                    cols="40"
                    value={transfer.text}
                    onChange={(e) => handleChange(e)}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors["text"]?.message}
                  </small>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
                    <input
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      value="Sent"
                    />
                  </div>
          </form>
        </div>
      </div>
        </div>
      </div>
    </>
  );
}

Transfer.layout = Auth;