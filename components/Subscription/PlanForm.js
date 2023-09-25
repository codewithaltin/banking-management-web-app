import React, { useState, useContext } from "react";
import Auth from "layouts/Auth.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { multiStepContext } from "pages/step_context";

const schema = yup
  .object()
  .shape({
    planName: yup.string().required("Plan name is required."),
  })
  .required();
export default function PlanForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { setStep, subscribtionData, setSubscribtionData } =
    useContext(multiStepContext);

  const PLAN_API_BASE_URL = "http://localhost:8080/api/v1/plan";

  const [isOpen, setIsOpen] = useState(false);

  const [plan, setPlan] = useState({
    planName: "",
    planDesc: "",
    monthQuanity: "",
  });
  const [responsePlan, setResponsePlan] = useState({
    planName: "",
    planDesc: "",
    monthQuanity: "",
  });
  const savePlan = async (e) => {
    //e.preventDefault();
    const response = await fetch(PLAN_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plan),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _plan = await response.json();
    setResponsePlan(_plan);
    setStep(3);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setPlan({ ...plan, [event.target.name]: value });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex content-center items-center justify-center h-full w-full">
        <div className="w-full lg:w-6/12 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
            <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">
                  Set a plan
                </h6>
              </div>

              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit(savePlan)}>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Plan Name
                  </label>
                  <input
                    {...register("planName")}
                    type="text"
                    name="planName"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter Plan Name"
                    value={plan.planName}
                    onChange={(e) => handleChange(e)}
                  />
                  <small role="alert" className="text-red-500 ">
                    {errors.planName?.message}
                  </small>
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Plan Descrption
                  </label>
                  <input
                    type="text"
                    name="planDesc"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter a description for the plan"
                    value={plan.planDesc}
                    onChange={(e) => handleChange(e)}
                    maxLength={45}
                  />
                </div>
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Quanity of Months
                  </label>
                  <input
                    {...register("amount")}
                    type="number"
                    name="monthQuanity"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Enter the amount"
                    value={plan.monthQuanity}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="text-center mt-6 flex">
                  <input
                    className="bg-red-500 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                    value="Back"
                    onClick={() => setStep(1)}
                  />
                  <input
                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="submit"
                    value="Create plan"
                  />
                </div>
                <div className="w-full flex justify-center">
                  <a
                    className=" text-blueGray-800 cursor-pointer w-full text-center"
                    onClick={() => setStep(3)}
                  >
                    {" "}
                    Skip{" "}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
PlanForm.layout = Auth;
