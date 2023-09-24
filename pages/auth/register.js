import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Swal from "sweetalert2";
import { useEffect } from "react";
import TableAuth from "layouts/TableAuth";
import Link from "next/link";
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
    accountNumber: yup
      .number()
      .typeError("Input must be a number")
      .required("Account number is required")
      .typeError("Please enter only numbers"),
    password: yup
      .string()
      .required("Password is required.")
      .min(5, "Password must be 5 characters long")
      .max(35, "Password must be shorter than 35 characters"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords do not match.")
      .required("Confirm Password field is required."),
    city: yup.string().required("City is required."),
  })
  .required();
export default function Register() {
  const router = useRouter();
  const [emailError, setEmailError] = useState("");
  const [accountNumberError, setAccountNumberError] = useState("");
  const [cities, setCities] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const USER_API_BASE_URL = "http://localhost:8080/api/v1/auth/register";

  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState({
    firstName: "",
    accountNumber: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    city: "",
    role: "USER",
  });

  const successfulAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Succesfully registered!",
      showConfirmButton: false,
      timer: 800,
    });
  };
  const saveUser = async (e) => {
    setEmailError(""); // Reset error messages
    setAccountNumberError("");

    // Check email uniqueness
    const emailResponse = await fetch(
      `http://localhost:8080/api/v1/auth/user/checkEmail?email=${user.email}`
    );
    const isEmailUnique = await emailResponse.json();

    // Check account number uniqueness
    const accountNumberResponse = await fetch(
      `http://localhost:8080/api/v1/auth/user/checkAccountNumber?accountNumber=${user.accountNumber}`
    );
    const isAccountNumberUnique = await accountNumberResponse.json();

    if (!isAccountNumberUnique && !isEmailUnique) {
      setAccountNumberError("Account number is already in use");
      setEmailError("Email is already in use");
      return;
    }

    if (!isAccountNumberUnique) {
      setAccountNumberError("Account number is already in use");
      return;
    }
    if (!isEmailUnique) {
      setEmailError("Email is already in use");
      return;
    }
    const accountNumberStr = String(user.accountNumber);
    if (accountNumberStr.length < 2) {
      setAccountNumberError("Account number is too short");
      return;
    }

    const firstTwoDigits = parseInt(accountNumberStr.substr(0, 2));
    const validRanges = [
      34,
      35,
      36,
      37,
      38,
      ...Array.from({ length: 21 }, (_, i) => 40 + i),
      62,
      65,
    ];

    if (!validRanges.includes(firstTwoDigits)) {
      setAccountNumberError("Invalid first two digits of the account number");
      return;
    }
    //e.preventDefault();
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
    await router.push("login");
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "accountNumber" && value.length === 2) {
      // Generate the remaining 14 digits
      const remainingDigits = Array.from({ length: 14 }, () =>
        Math.floor(Math.random() * 10)
      ).join("");
      setUser({ ...user, [name]: value + remainingDigits });
    } else {
      setUser({ ...user, [name]: value });
    }
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
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Fill the data below to create an account
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
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
                  </small>{" "}
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Account Number
                    </label>
                    <input
                      {...register("accountNumber")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="XX-XXXXXXXXXXXXXXXX"
                      value={user.accountNumber}
                      name="accountNumber"
                      type="number"
                      onChange={(e) => handleChange(e)}
                      maxLength={16} // Set the maximum length to 16 characters
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.accountNumber?.message}
                      {accountNumberError && <div>{accountNumberError}</div>}
                    </small>
                  </div>
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
                      {emailError && <div>{emailError}</div>}
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
                      Confirm Password
                    </label>
                    <input
                      {...register("confirmPassword")}
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Comfirm Password"
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.confirmPassword?.message}
                    </small>
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        I agree with the{" "}
                        <a
                          className="text-lightBlue-500"
                          onClick={() => {
                            Swal.fire({
                              text: "You agree to grade us with a 10.",
                            });
                          }}
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                  <div className="text-center mt-6">
                    <input
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                      value="Submit"
                      onClick={handleChange}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap mt-6 relative">
        <div className="w-full text-center">
          {" "}
          <small className="text-blueGray-200">Have an account?</small>
          <Link href="/auth/login" className="text-blueGray-200 font-bold">
            <small> Log In</small>
          </Link>
        </div>
      </div>
    </>
  );
}

Register.layout = TableAuth;
/*
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  </React.StrictMode>
);
*/
