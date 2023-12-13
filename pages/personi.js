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

  const USER_API_BASE_URL = "http://localhost:8080/api/v1/auth/banka";
  const [users, setUsers] = useState(null);
  const [personi, setPersoni] = useState({
    id: "",
    firstName: "",
    lastName: "",
    bankaId: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(USER_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const users = await response.json();

        setUsers(users);
        console.log(users); // Move it here to log the updated state
      } catch (error) {
        console.log(error);
      }
    };
    console.log(users);
    fetchData();
  }, []);
  const [responseContact, setResponseContact] = useState({
    firstName: "",
    lastName: "",
    bankaId: "",
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
    const selectedBankaId = personi.bankaId;

    if (!selectedBankaId) {
      console.error("Please select a Banka");
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

    const _contact = await response.json();
    setResponseContact(_contact);
    successfulAlert();
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
                    Personi
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
                      First Name
                    </label>
                    <input
                      {...register("firstName")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300
                    text-blueGray-900 bg-white rounded text-sm shadow
                    focus:outline-none focus:ring w-full ease-linear
                    transition-all duration-150"
                      placeholder="First name"
                      value={personi.firstName}
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
                      Last Name
                    </label>
                    <input
                      {...register("lastName")}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s example@gmail.com"
                      value={personi.lastName}
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
                      Banka
                    </label>
                    <select
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={(e) => handleChange(e)}
                      value={personi.bankaId.id}
                      name="bankaId"
                    >
                      <option value="">Select a Bank</option>
                      {users &&
                        users.map((user) => (
                          <option key={user.id} value={user.id}>
                            {user.name}
                          </option>
                        ))}
                    </select>
                    <small role="alert" className="text-red-500 ">
                      {errors.city?.message}
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
