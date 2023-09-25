import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import Admin from "layouts/Admin";
import { useEffect } from "react";
import jwt_decode from "jwt-decode";
const phoneReg =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object()
  .shape({
    firstName: yup
      .string()
      .required("First Name is required.")
      .min(2, "First name must be longer than 2 characters")
      .max(50, "First name must be shorter than 30 characters."),
    lastName: yup
      .string()
      .required("Last Name is required.")
      .min(2, "Last name must be longer than 2 characters")
      .max(50, "Last name must be shorter than 50 characters."),
    email: yup
      .string()
      .email("Please enter a valid e-mail")
      .required("Email is required."),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(phoneReg, "Phone Number is not valid."),
    password: yup
      .string()
      .required("Password is required.")
      .min(5, "Password must be 5 characters long")
      .max(35, "Password must be shorter than 35 characters"),
    city: yup.string().required("City is required."),
    role: yup.string().required("Role is required."),
  })
  .required();
const roles = () => {
  const [cities, setCities] = useState([]);
  const [roles, setRoles] = useState([]);
  const [decoded, setDecoded] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
  }, []);

  useEffect(() => {
    if (decoded) {
      if (decoded.authorities != "ROLE_ADMIN") {
        Swal.fire({
          title: "Unauthorized page!",
          showConfirmButton: false,
          timer: 2000,
        });
        router.push("/");
      }
    }
  }, [decoded]);

  const [user, setUser] = useState({
    firstName: "",
    accountNumber: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    city: "",
    role: "",
  });

  const USER_API_BASE_URL = "http://localhost:8080/api/v1/auth/register";

  const successfulAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Succesfully registered!",
      showConfirmButton: false,
      timer: 800,
    });
  };
  const saveUser = async (e) => {
    const response = await fetch(USER_API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const _user = await response.json();
    setUser(_user);
    successfulAlert();
    window.location.reload();
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setUser({ ...user, [event.target.name]: value });
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

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/auth/roles",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const arrOfRoles = await response.json();
        setRoles(arrOfRoles);
      } catch (error) {
        throw new Error("Oops, fetching went wrong!");
      }
    };

    fetchRoles();
  }, []);

  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-full px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Add user with specific role
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-5 pt-0">
                <form onSubmit={handleSubmit(saveUser)}>
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Full Name
                  </label>
                  <div className="flex w-full  mb-3">
                    <input
                      {...register("firstName")}
                      className="border-0 px-3 py-3 mr-3 placeholder-blueGray-300
              text-blueGray-900 bg-white rounded text-sm shadow
              focus:outline-none focus:ring w-1/2 ease-linear
              transition-all duration-150"
                      placeholder="First Name"
                      name="firstName"
                      value={user.firstName}
                      onChange={(e) => handleChange(e)}
                    />
                    <input
                      {...register("lastName")}
                      name="lastName"
                      className="border-0 px-3 py-3 mx-5 placeholder-blueGray-300
              text-blueGray-900 bg-white rounded text-sm shadow
              focus:outline-none focus:ring w-1/2  ease-linear
              transition-all duration-150"
                      placeholder="Last Name"
                      value={user.lastName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <small role="alert" className="text-red-500 mb-2 mr-20 ">
                    {errors.firstName?.message}
                  </small>
                  <small role="alert" className="  text-red-500 mb-2 ">
                    {errors.lastName?.message}
                  </small>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      name="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s example@gmail.com"
                      value={user.email}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.email?.message}
                    </small>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Phone number
                    </label>
                    <input
                      {...register("phoneNumber")}
                      type="tel"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s 049-588-814"
                      value={user.phoneNumber}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.phoneNumber?.message}
                    </small>
                  </div>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      {...register("password")}
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                      value={user.password}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.password?.message}
                    </small>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      City
                    </label>

                    <select
                      {...register("city")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={user.city}
                      onChange={(e) => handleChange(e)}
                      name="city"
                    >
                      <option value="" disabled className="">
                        City
                      </option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    <small role="alert" className="text-red-500 ">
                      {errors.city?.message}
                    </small>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Role
                    </label>

                    <select
                      {...register("role")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      value={user.role}
                      onChange={(e) => handleChange(e)}
                      name="role"
                    >
                      <option value="" disabled className="">
                        Role
                      </option>
                      {roles
                        ?.filter((item) => {
                          return item === "USER" ? "" : item;
                        })
                        .map((role, index) => (
                          <option key={index} value={role}>
                            {role}
                          </option>
                        ))}
                    </select>
                    <small role="alert" className="text-red-500 ">
                      {errors.role?.message}
                    </small>
                  </div>
                  <div className="text-center mt-6">
                    <input
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      value="Add"
                      onClick={handleChange}
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
};
roles.layout = Admin;
export default roles;
