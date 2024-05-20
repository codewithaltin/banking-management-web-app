import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import Swal from "sweetalert2";

import TableAuth from "layouts/TableAuth";

export default function personi() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const BANK_API_BASE_URL = "http://localhost:8080/api/v1/auth/banka";
  const [banks, setBanks] = useState(null);
  const [personi, setPersoni] = useState({
    firstName: "",
    lastName: "",
    bankaId: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(BANK_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const banks = await response.json();

        setBanks(banks);
        console.log(banks);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(banks);
    fetchData();
  }, []);

  const successfulAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Succesfully registered Movie!",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const savePersoni = async (e) => {
    const selectedBankaId = personi.bankaId;

    if (!selectedBankaId) {
      console.error("Please select a Director");
      return;
    }
    const url = `http://localhost:8080/api/v1/auth/personi/banka/${selectedBankaId}`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(personi),
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    const _personi = await response.json();
    successfulAlert();
    window.location.reload();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setPersoni({ ...personi, [event.target.name]: value });
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
                  Movie
                  </h6>
                </div>

                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form onSubmit={handleSubmit(savePersoni)}>
                  {" "}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Title
                    </label>
                    <input
                      {...register("title")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300
                    text-blueGray-900 bg-white rounded text-sm shadow
                    focus:outline-none focus:ring w-full ease-linear
                    transition-all duration-150"
                      required
                      placeholder="Title"
                      value={personi.title}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.firstName?.message}
                    </small>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Release Year
                    </label>
                    <input
                      {...register("releaseYear")}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="releaseYear"
                      value={personi.releaseYear}
                      required
                      onChange={(e) => handleChange(e)}
                    />

                    <small role="alert" className="text-red-500 ">
                      {errors.lastName?.message}
                    </small>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Director
                    </label>
                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => handleChange(e)}
                      required
                      value={personi.bankaId.id}
                      name="bankaId"
                    >
                      <option value="">Selekto Directorin </option>
                      {banks &&
                        banks.map((bank) => (
                          <option key={bank.id} value={bank.id}>
                            {bank.name}
                          </option>
                        ))}
                    </select>
                    <small role="alert" className="text-red-500">
                      {errors.banka?.message}
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

personi.layout = TableAuth;
