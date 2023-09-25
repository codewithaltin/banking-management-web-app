import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TokenCheck from "components/TokenCheck";
import { yupResolver } from "@hookform/resolvers/yup";
import Auth from "layouts/Auth.js";
import { Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import { useEffect } from "react";
import TableAuth from "layouts/TableAuth";

export default function AddSavingGoal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({});
  const [decoded, setDecoded] = useState(null);
  const [user, setUser] = useState(false);

  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
  }, []);

  const router = useRouter();

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

  const [isOpen, setIsOpen] = useState(false);
  const [savingGoal, setSavingGoals] = useState({
    id: "",
    savingReason: "",
    amount: "",
    date: "",
    goalName: "",
    goalDescription: "",
  });
  const [responseSavingGoal, setResponseSavingGoal] = useState({
    id: "",
    savingReason: "",
    amount: "",
    date: "",
    goalName: "",
    goalDescription: "",
  });
  // const navigate = useNavigate();
  // const navigateHome = () => {
  //   navigate("/");
  // };
  const successfulAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Succesfully registered Saving Goal!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const saveSavingGoals = async (e) => {
    //e.preventDefault();
    const response = await fetch(
      "http://localhost:8080/api/v1/auth/savingGoal/user/" + decoded.sub,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(savingGoal),
      }
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _savingGoal = await response.json();
    setResponseSavingGoal(_savingGoal);
    successfulAlert();
    window.location.reload();
  };

  const SavingOptions = [
    "Vacation",
    "Car",
    "Home",
    "Wedding",
    "Holidays",
    "Other",
  ];

  const onOptionChangeHandler = (event) => {
    console.log("User Selected Value - ", event.target.value);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setSavingGoals({ ...savingGoal, [event.target.name]: value });
  };

  return (
    <TokenCheck>
      <>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/img/R.jpg')",
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
                    Set your saving goal here!
                  </h1>
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
        </section>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-blueGray-800 text-lg font-bold">
                      Set a goal
                    </h6>
                  </div>

                  <hr className="mt-6 border-b-1 border-blueGray-300" />
                </div>
                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                  <form onSubmit={handleSubmit(saveSavingGoals)}>
                    {" "}
                    <div className="relative w-full mb-3">
                      <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                        What are you saving for?
                      </label>

                      <select
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        onChange={handleChange}
                        name="savingReason"
                        
                      >
                        <option >Select</option>
                        {SavingOptions.map((option, index) => {
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
                            Amount
                          </label>
                          <input
                            {...register("amount")}
                            type="text"
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            onChange={(e) => handleChange(e)}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4 ">
                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                          Date
                        </label>
                        <input
                          {...register("date")}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          id="dueDate"
                          name="dueDate"
                          type="date"
                          {...register("date")}
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
                        Goal name
                      </label>
                      <input
                        {...register("goalName")}
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="p.s VacayGoal"
                        onChange={(e) => handleChange(e)}
                        required
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="text"
                      >
                        Description
                      </label>
                      <textarea
                        {...register("goalDescription")}
                        id="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Write a short description about your saving goal"
                        rows="5"
                        cols="40"
                        onChange={(e) => handleChange(e)}
                        required
                      />
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