import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import Swal from "sweetalert2";
import TableAuth from "layouts/TableAuth";

export default function banka() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [banka, setBanka] = useState({
    name: "",
  });

  const successfulAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Succesfully added Director!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const saveBanka = async (e) => {
    //e.preventDefault();
    const response = await fetch("http://localhost:8080/api/v1/auth/banka", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(banka),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _banka = await response.json();
    successfulAlert();
    window.location.reload();
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setBanka({ ...banka, [event.target.name]: value });
  };

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-800 text-lg font-bold">Director</h6>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit(saveBanka)}>
                  {" "}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Name
                    </label>
                    <input
                      {...register("name")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300
                    text-blueGray-900 bg-white rounded text-sm shadow
                    focus:outline-none focus:ring w-full ease-linear
                    transition-all duration-150"
                      placeholder="First name"
                      value={banka.name}
                      required
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
                      BirthYear
                    </label>
                    <input
                      {...register("birthYear")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300
                    text-blueGray-900 bg-white rounded text-sm shadow
                    focus:outline-none focus:ring w-full ease-linear
                    transition-all duration-150"
                      placeholder="BirthYear"
                      value={banka.birthYear}
                      required
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.name?.message}
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

banka.layout = TableAuth;
