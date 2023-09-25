import React, { useState } from "react";
import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import TokenCheck from "components/TokenCheck";
import { useForm } from "react-hook-form";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useEffect } from "react";

import * as Yup from "yup";

export default Invoice;

function Invoice() {
  const validationSchema = Yup.object().shape({
    address: Yup.string()
      .required("Address is required")
      .min(5, "Address must be longer than 5 characters"),

    name: Yup.string()
      .required("Name is required")
      .min(5, "Name must be longer than 5 characters")
      .max(50, "Name must be shorter than 50 characters."),

    country: Yup.string()
      .required("Country is required")
      .min(4, "Country Name must be longer than 4 characters")
      .max(50, "Country Name must be shorter than 50 characters."),

    postCode: Yup.string().required("Post Code is required"),

    sender: Yup.string()
      .required("Email is required.")
      .email("Please enter a valid e-mail"),

    billTo: Yup.string()
      .required("Email is required.")
      .email("Please enter a valid e-mail"),

    dueDate: Yup.string().required("Date is required."),

    itemDescription: Yup.string().required("Add an Item"),

    price: Yup.string().required("Price is required"),

    qty: Yup.string()
      .required("Quantity is required")
      .min(1, "Add at least one quantity"),

    note: Yup.string()
      .required("Note is required")
      .min(10, "Note must be longer than 50 characters")
      .max(150, "note must be shorter than 150 characters."),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    reset({
      address: "",
      name: "",
      country: "",
      postCode: "",
      sender: "",
      billTo: "",
      dueDate: "",
      itemDescription: "",
      price: "",
      qty: "",
      note: "",
    });
    alert("SUCCESS!! :-)\n\n");
    return false;
  }

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

  return (
    <TokenCheck>
      <>
        <Navbar transparent />
        <main>
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
          </section>
          <section className="relative block py-24 lg:pt-0  bg-blueGray-800">
            <div className="container mx-auto px-0">
              <div className="flex flex-wrap justify-center lg:-mt-0 -mt-0">
                <div className="w-full lg:w-6/12 px-0">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                    <div className="flex-auto p-10 lg:p-10">
                      <div className="rounded-t mb-o px-4 py-2">
                        <form onSubmit={handleSubmit(onSubmit)}>
                          <div className="mb-4">
                            <h4 className="text-4xl font-semibold text-center">
                              Invoice
                            </h4>
                          </div>
                          <div className="pt-6 text-sm font-bold">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                              Street Address
                            </label>
                            <input
                              className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="address"
                              name="address"
                              type="text"
                              placeholder="Write your address? (required)"
                              {...register("address")}
                            />
                            <small
                              role="alert"
                              className=" font-medium text-red-500 "
                            >
                              {errors.address?.message}
                            </small>
                          </div>
                          <div className="flex justify-center items-center space-x-4 pt-2">
                            <label className="block text-gray-700 text-sm font-bold mb-2 w-full mr-5">
                              Full Name
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                name="name"
                                type="text"
                                placeholder="Name"
                                {...register("name")}
                              />
                              <small
                                role="alert"
                                className=" font-medium text-red-500 "
                              >
                                {errors.name?.message}
                              </small>
                            </label>
                            <label className="block text-gray-700 text-sm font-bold mb-2 w-full mr-5">
                              Country
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2  leading-tight focus:outline-none focus:shadow-outline"
                                name="country"
                                type="text"
                                {...register("country")}
                              />
                              <small
                                role="alert"
                                className=" font-medium text-red-500 "
                              >
                                {errors.country?.message}
                              </small>
                            </label>
                            <label className="block text-gray-700 text-sm font-bold mb-2 w-full  mr-5">
                              Post Code
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2  leading-tight focus:outline-none focus:shadow-outline"
                                name="postCode"
                                type="number"
                                {...register("postCode")}
                              />
                              <small
                                role="alert"
                                className=" font-medium text-red-500 "
                              >
                                {errors.postCode?.message}
                              </small>
                            </label>
                          </div>
                          <div className="pb-2 text-sm font-bold">
                            <label
                              className="block text-gray-700 text-sm font-bold mb-2"
                              htmlFor="sender"
                            >
                              Your email address
                            </label>
                            <input
                              className="mb-2 xshadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="sender"
                              name="sender"
                              type="email"
                              placeholder="Who is this invoice from? (required)"
                              {...register("sender")}
                            />
                            <small
                              role="alert"
                              className="font-medium text-red-500 "
                            >
                              {errors.sender?.message}
                            </small>
                            <label className="block text-gray-700 text-sm font-bold my-3">
                              Bill To
                            </label>
                            <textarea
                              className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="billTo"
                              name="billTo"
                              type="email"
                              placeholder="Who is this invoice to? (required)"
                              {...register("billTo")}
                            />
                            <small
                              role="alert"
                              className=" font-medium text-red-500 "
                            >
                              {errors.billTo?.message}
                            </small>
                          </div>
                          <div className="mb-6 text-sm font-bold">
                            <label className="block text-gray-700  text-sm font-bold mb-2">
                              Due Date
                            </label>
                            <input
                              className="shadow mb-2  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="dueDate"
                              name="dueDate"
                              type="date"
                              {...register("dueDate")}
                            />
                            <small
                              role="alert"
                              className=" font-medium text-red-500 "
                            >
                              {errors.dueDate?.message}
                            </small>
                          </div>

                          <div className="flex justify-center items-center  space-x-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2 w-full mr-5">
                              Invoice Item
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                                name="itemDescription"
                                type="text"
                                {...register("itemDescription")}
                              />
                              <small
                                role="alert"
                                className=" font-medium text-red-500 "
                              >
                                {errors.itemDescription?.message}
                              </small>
                            </label>
                            <label className="block text-gray-700 text-sm font-bold mb-2 w-full  mr-5">
                              Unit Price
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                                name="price"
                                type="number"
                                {...register("price")}
                              />
                              <small
                                role="alert"
                                className=" font-medium text-red-500 "
                              >
                                {errors.price?.message}
                              </small>
                            </label>
                            <label className="block text-gray-700 text-sm font-bold mb-2 w-full mr-5">
                              Quantity
                              <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                                name="qty"
                                type="number"
                                {...register("qty")}
                              />
                              <small
                                role="alert"
                                className=" font-medium text-red-500 "
                              >
                                {errors.qty?.message}
                              </small>
                            </label>
                            {/* <button
                                                        className="bg-red-700 active:bg-blueGray-500 h-8 px-3 py-3 flex items-center justify-center text-white font-bold rounded focus:outline-none focus:shadow-outline"
                                                        type="button"
                                                    >
                                                        Remove
                                                    </button> */}
                          </div>
                          {/* <button
                                                    className="bg-blueGray-700 active:bg-blueGray-500 h-8 px-3 py-3 flex items-center justify-center text-white font-bold rounded focus:outline-none focus:shadow-outline"
                                                    type="button"
                                                >
                                                    Add Item
                                                </button> */}
                          <div className="my-6 flex flex-col text-sm font-bold">
                            <label className="block text-gray-700 text-sm font-bold mb-2 w-full">
                              Invoice Notes
                            </label>
                            <textarea
                              id="note"
                              name="note"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
                              {...register("note")}
                            />
                            <small
                              role="alert"
                              className=" font-medium text-red-500 "
                            >
                              {errors.note?.message}
                            </small>
                          </div>
                          {/* <div className="mb-6 flex items-center justify-between font-bold text-xl">

                                                    <div className="">
                                                        <p>Total:</p>
                                                    </div>

                                                    <input
                                                        className="shadow appearance-none border rounded py-2 px-3 mx- text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                        name="total"
                                                        type="number"
                                                    />
                                                </div> */}
                          <div className="flex items-center justify-between">
                            <button
                              className="btn btn-secondary bg-red-700 active:bg-blueGray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              type="button"
                              onClick={() => reset()}
                            >
                              Cancel Invoice
                            </button>
                            <button
                              className="btn btn-primary mr-1 bg-blueGray-700 active:bg-blueGray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                              type="submit"
                            >
                              Send Invoice
                            </button>
                          </div>
                        </form>
                      </div>
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
