import { Dialog, Transition } from "@headlessui/react";
import { React, useState, useEffect, Fragment } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import * as yup from "yup";

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
const EditUser = ({ userId, setResponseUser }) => {
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
    role: "",
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

  const reset = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setUser({ ...user, [event.target.name]: value });
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
        setCities(arrOfCities); // Update the cities array using the useState hook
      } catch (error) {
        throw new Error("Oops, fetching went wrong!");
      }
    };

    fetchData();
  }, []);
  return (
    <div className="min-h-screen absolute top-1/2 right-1/4">
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" m onClose={closeModal}>
          <div className="flex justify-center self-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="p-8 m-8 absolute top-0  transition-all transform bg-white shadow-xl rounded-lg">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Update User
                </Dialog.Title>
                <div className="flex max-w-md max-auto">
                  <div className="py-2">
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={user.firstName}
                        onChange={(e) => handleChange(e)}
                        className="h-10  border mt-2 p-4 w-full rounded-md"
                        required
                      ></input>
                    </div>
                    {/* <small role="alert" className="text-red-500">
                      {errors.firstName?.message}
                    </small> */}
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={user.lastName}
                        onChange={(e) => handleChange(e)}
                        className="h-10 border mt-2 px-2 p-4 w-full rounded-md"
                        required
                      ></input>
                    </div>
                    {/* <small role="alert" className="  text-red-500">
                      {errors.lastName?.message}
                    </small> */}
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        City
                      </label>
                      <select
                        className=" px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow border rounder-md focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        name="city"
                        value={user.city}
                        onChange={(e) => handleChange(e)}
                        required
                      >
                        {cities.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="h-14 mt-4">
                      <label className="block text-gray-600 text-sm font-semibold">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={user.email}
                        onChange={(e) => handleChange(e)}
                        className="h-10 border mt-2 p-4 w-full rounded-md"
                        required
                      ></input>
                    </div>
                    {/* <small role="alert" className="  text-red-500 ">
                      {errors.email?.message}
                    </small> */}
                    <div className="h-14 my-4">
                      <label className="block text-gray-600 text-sm font-semibold rounded-md">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        value={user.phoneNumber}
                        onChange={(e) => handleChange(e)}
                        className="h-10  outline-none mt-2 p-4 w-full"
                        required
                      ></input>
                    </div>

                    <div className="h-14 my-4 space-x-4 flex justify-center">
                      <button
                        onClick={updateUser}
                        className=" bg-emerald-400 hover:bg-emerald-600 rounded text-white font-semibold w-full py-2  px-6"
                      >
                        Update
                      </button>
                      <button
                        onClick={reset}
                        className="rounded text-white font-semibold bg-red-400 w-full hover:bg-red-700 py-2 px-6"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};
export default EditUser;
