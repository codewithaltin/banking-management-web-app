import React, { useState, useContext } from "react";
import Auth from "layouts/Auth.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { multiStepContext } from "pages/step_context";

const schema = yup
  .object()
  .shape({
    requestedEmail: yup
      .string()
      .email("Please enter a valid e-mail")
      .required("Email is required."),
    payeeEmail: yup
      .string()
      .email("Please enter a valid e-mail")
      .required("Email is required."),
    amount: yup.string().required("Some text is required."),
  })
  .required();
export default function ProductForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { setStep, subscribtionData, setSubscribtionData } =
    useContext(multiStepContext);

  const REQUEST_API_BASE_URL = "http://localhost:8080/api/v1/requestmoney";

  const [isOpen, setIsOpen] = useState(false);

  const [request, setRequest] = useState({
    requestedEmail: "",
    payeeEmail: "",
    amount: "",
  });
  const [responseRequest, setResponseRequest] = useState({
    requestedEmail: "",
    payeeEmail: "",
    amount: "",
  });
  const saveRequest = async (e) => {
    //e.preventDefault();
    const response = await fetch(REQUEST_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _reqeuest = await response.json();
    setResponseRequest(_reqeuest);
    window.location.reload();
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setRequest({ ...request, [event.target.name]: value });
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex content-center items-center justify-center h-full">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">
                  Create a product
                </h6>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit(saveRequest)}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Product Name
                  </label>
                  <input
                    type="email"
                    name="productName"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setSubscribtionData({
                        ...subscribtionData,
                        productName: e.target.value,
                      })
                    }
                    defaultValue={subscribtionData["productName"]}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Product Descrption
                  </label>
                  <input
                    type="text"
                    name="productDesc"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter the email you are requesting money from"
                    onChange={(e) =>
                      setSubscribtionData({
                        ...subscribtionData,
                        productDesc: e.target.value,
                      })
                    }
                    defaultValue={subscribtionData["productDesc"]}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Product Type
                  </label>
                  <input
                    type="text"
                    name="productType"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter the amount"
                    onChange={(e) =>
                      setSubscribtionData({
                        ...subscribtionData,
                        productType: e.target.value,
                      })
                    }
                    defaultValue={subscribtionData["productType"]}
                  />
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Product Image Url
                    </label>
                    <input
                      {...register("payeeEmail")}
                      type="text"
                      name="productImgUrl"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Enter the email you are requesting money from"
                      onChange={(e) =>
                        setSubscribtionData({
                          ...subscribtionData,
                          productImgUrl: e.target.value,
                        })
                      }
                      defaultValue={subscribtionData["productImgUrl"]}
                    />
                  </div>
                  <div className="text-center mt-6">
                    <input
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                      value="Create Product"
                      onClick={() => setStep(2)}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
ProductForm.layout = Auth;
