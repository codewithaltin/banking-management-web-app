import { Dialog, Transition } from "@headlessui/react";
import { React, useState, useEffect, Fragment } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import * as yup from "yup";

// components

const phoneReg =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .required("First Name is required.")
      .min(2, "First name must be longer than 5 characters")
      .max(50, "First name must be shorter than 30 characters."),
    lastName: yup
      .string()
      .required("Last Name is required.")
      .min(2, "Last name must be longer than 5 characters")
      .max(50, "Last name must be shorter than 50 characters."),
    emailId: yup
      .string()
      .email("Please enter a valid e-mail")
      .required("Email is required."),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(phoneReg, "Phone Number is not valid."),
  })
  .required();
export default function CardSettings({ userId, setResponseUser }) {
  const USER_API_BASE_URL = "http://localhost:8080/api/v1/auth/user/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [cities, setCities] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    accountNumber: "",
    phoneNumber: "",
    balance: 0,
    city: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(USER_API_BASE_URL + userId, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const _user = await response.json();
        setUser(_user);
        setIsOpen(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (userId) {
      fetchData();
    }
  }, [userId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/auth/cities",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const arrOfCities = await response.json();
        setCities(arrOfCities); // Update the cities array using the useState hook
      } catch (error) {
        throw new Error("Oops, fetching went wrong!");
      }
    };

    fetchData();
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    setUser({ ...user, [event.target.name]: value });
  };

  const reset = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    const updatedUserData = {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      accountNumber: user.accountNumber,
      phoneNumber: user.phoneNumber,
      balance: user.balance,
      city: user.city,
    };
    console.log(user.city);
    const response = await fetch(USER_API_BASE_URL + userId, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUserData),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _user = await response.json();
    setResponseUser(_user);
    reset(e);
    Swal.fire("Updated!", "Updated Succesfully!", "success");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/auth/cities",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const arrOfCities = await response.json();
        setCities(arrOfCities);
      } catch (error) {
        throw new Error("Oops, fetching went wrong!");
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">
              Your Information
            </h6>
            <button
              className="bg-emerald-400 active:bg-blueGray-400 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
              onClick={updateUser}
            >
              Update Information
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              full name{" "}
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={user.firstName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={user.lastName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              contact & address
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={user.email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    phone number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={user.phoneNumber}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    city
                  </label>
                  <select
                    className=" px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow border rounder-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    name="city"
                    defaultValue={user.city}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="" disabled>
                      {user.city}
                    </option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              card information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Account number
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    value={user.accountNumber}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4"></div>
            </div>
            {/* <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    About me
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    defaultValue="A beautiful UI Kit and Admin for NextJS & Tailwind CSS. It is Free
                    and Open Source."
                  ></textarea>
                </div>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}
