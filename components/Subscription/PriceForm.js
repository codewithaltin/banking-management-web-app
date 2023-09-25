import React, { useEffect, useState, useContext } from "react";
import Auth from "layouts/Auth.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { multiStepContext } from "pages/step_context";
import ProductList from "../Cards/ProductList";
import PlanList from "../Cards/PlanList";
import SubscribtionList from "./SubscribtionList";
const schema = yup
  .object()
  .shape({
    price: yup.string().required("Price is required."),
    name: yup.string().required("Name  is required."),
    productId: yup.string().required("Product ID  is required."),
    planId: yup.string().required("Plan ID  is required."),
  })
  .required();
export default function PriceForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { setStep, subscribtionData, setSubscribtionData, submitData } =
    useContext(multiStepContext);

  const SUBSCRIBTION_API_BASE_URL = "http://localhost:8080/api/v1/subscribtion";

  const [isOpen, setIsOpen] = useState(false);

  const [subscribtion, setSubscribtion] = useState({
    name: "",
    price: "",
    productId: "",
    planId: "",
  });
  const [responseSubscribtion, setResponseSubscribtion] = useState({
    name: "",
    price: "",
    productId: "",
    planId: "",
  });
  const saveSubscribtion = async (e) => {
    //e.preventDefault();
    const response = await fetch(SUBSCRIBTION_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscribtion),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _subscribtion = await response.json();
    setResponseSubscribtion(_subscribtion);
    window.location.reload();
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setSubscribtion({ ...subscribtion, [event.target.name]: value });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex content-center items-center justify-center h-full w-full">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">
                  Finish setting up your Subscribtion
                </h6>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit(saveSubscribtion)}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Subscribtion Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    name="name"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter the subscribtion's name"
                    value={subscribtion.name}
                    onChange={(e) => handleChange(e)}
                  />

                  <small role="alert" className="text-red-500 ">
                    {errors.name?.message}
                  </small>
                </div>

                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Price
                  </label>
                  <input
                    {...register("price")}
                    type="number"
                    name="price"
                    placeholder="Enter the price"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={subscribtion.price}
                    onChange={(e) => handleChange(e)}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors.price?.message}
                  </small>
                </div>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Fee
                  </label>
                  <input
                    type="number"
                    name="fee"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter the fee"
                    value={subscribtion.fee}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Products ID
                  </label>
                  <input
                    {...register("productId")}
                    type="number"
                    name="productId"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter the product ID"
                    value={subscribtion.productId}
                    onChange={(e) => handleChange(e)}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors.productId?.message}
                  </small>
                </div>
                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                    Plan's ID
                  </label>
                  <input
                    {...register("planId")}
                    type="number"
                    name="planId"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter the plan ID "
                    value={subscribtion.planId}
                    onChange={(e) => handleChange(e)}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors.planId?.message}
                  </small>
                </div>

                <div className="text-center mt-6 flex ">
                  <input
                    className=" bg-red-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    value="Back"
                    onClick={() => setStep(2)}
                  />
                  <input
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                    value="Finish"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className=" w-full">
        <ProductList />
        <PlanList />
        <SubscribtionList />
      </div>
    </div>
  );
}
PriceForm.layout = Auth;
