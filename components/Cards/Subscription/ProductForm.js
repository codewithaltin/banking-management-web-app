import React, { useState, useContext } from "react";
import Auth from "layouts/Auth.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { multiStepContext } from "pages/step_context";

const schema = yup
  .object()
  .shape({
    name: yup.string().required("Products name is required."),
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

  const PRODUCT_API_BASE_URL = "http://localhost:8080/api/v1/product";

  const [isOpen, setIsOpen] = useState(false);

  const [product, setProduct] = useState({
    name: "",
    decs: "",
    type: "",
    imageUrl: "",
  });
  const [responseProduct, setResponseProduct] = useState({
    name: "",
    decs: "",
    type: "",
    imageUrl: "",
  });
  const saveProduct = async (e) => {
    //e.preventDefault();
    const response = await fetch(PRODUCT_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _product = await response.json();
    setResponseProduct(_product);
    setStep(2);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setProduct({ ...product, [event.target.name]: value });
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
              <form onSubmit={handleSubmit(saveProduct)}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Product Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    name="name"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter productsName"
                    value={product.name}
                    onChange={(e) => handleChange(e)}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors.name?.message}
                  </small>
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
                    name="desc"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter the product description   "
                    value={product.desc}
                    onChange={(e) => handleChange(e)}
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
                    name="type"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter the product type"
                    value={product.type}
                    onChange={(e) => handleChange(e)}
                  />

                  <div className="text-center mt-6">
                    <input
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      value="Create Product"
                    />
                    <a
                      className=" text-blueGray-800 cursor-pointer mt-10"
                      onClick={() => setStep(2)}
                    >
                      {" "}
                      Skip{" "}
                    </a>
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
