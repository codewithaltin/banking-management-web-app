import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import Swal from "sweetalert2";

import TableAuth from "layouts/TableAuth";

const schema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required("Full Name is required.")
      .min(5, "Full name must be longer than 5 characters")
      .max(50, "Full name must be shorter than 50 characters."),
    email: yup
      .string()
      .email("Please enter a valid e-mail")
      .required("Email is required."),
    text: yup
      .string()
      .required("Some text is required.")
      .min(5, "Text must be longer than 5 characters"),
  })
  .required();
export default function Contact() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [isOpen, setIsOpen] = useState(false);
  const [contact, setContacts] = useState({
    id: "",
    fullName: "",
    email: "",
    text: "",
  });
  const [responseContact, setResponseContact] = useState({
    id: "",
    fullName: "",
    email: "",
    text: "",
  });
  // const navigate = useNavigate();
  // const navigateHome = () => {
  //   navigate("/");
  // };ss

  const successfulAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Succesfully registered your Contact!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const saveContact = async (e) => {
    //e.preventDefault();
    const response = await fetch(
      "http://localhost:8080/api/v1/auth/contact",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      body: JSON.stringify(contact),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _contact = await response.json();
    setResponseContact(_contact);
    successfulAlert();
    window.location.reload();
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setContacts({ ...contact, [event.target.name]: value });
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
                    Contact Us
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit(saveContact)}>
                  {" "}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Full Name
                    </label>
                    <input
                      {...register("fullName")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300
                    text-blueGray-900 bg-white rounded text-sm shadow
                    focus:outline-none focus:ring w-full ease-linear
                    transition-all duration-150"
                      placeholder="Full name"
                      value={contact.fullName}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.fullName?.message}
                    </small>
                  </div>
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
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s example@gmail.com"
                      value={contact.email}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.email?.message}
                    </small>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="text"
                    >
                      Text
                    </label>
                    <textarea
                      {...register("text")}
                      id="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Type your message right here"
                      rows="5"
                      cols="40"
                      value={contact.text}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors["text"]?.message}
                    </small>
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

Contact.layout = TableAuth;
