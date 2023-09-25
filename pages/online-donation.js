import React, { useState } from "react";
import Link from "next/link";
import TokenCheck from "components/TokenCheck";
import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import Auth from "layouts/Auth.js";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const phoneReg = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup
  .object()
  .shape({
    fullName: yup
      .string()
      .required("Full Name is required.")
      .min(5, "Full name must be longer than 5 characters")
      .max(50, "Full name must be shorter than 50 characters."),
    // email: yup
    //   .string()
    //   .email("Please enter a valid e-mail")
    //   .required("Email is required."),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(phoneReg, "Phone Number is not valid."),
    address: yup
      .string()
      .required("Address is required")
      .min(7, "Address must be at least 7 characters"),
    donationAmount: yup
      .number()
      .typeError('Input must be a number')
      .required("Donation Amount is required")
      .min(10, "Donation amount must be greater than €10")
      .max(25000, "Donation amount must be lower than €25000"),
    cardInformation: yup
      .string()
      .length(16, 'Card number must be exactly 16 digits')
      .matches(/^\d+$/, 'Card number can only contain digits')
      .required('Card number is required'),
    comment: yup
      .string()
      .required("Comment is required")
      .min(10, "Purpouse must be at least 10 characters"),
    
  })
  .required();


export default function Donate() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const [decoded, setDecoded] = useState(null);
    const [user, setUser] = useState(false);

    const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
  }, []);

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

    //const DONATION_API_BASE_URL = "http://localhost:8080/api/v1/auth/donation";

    const [isOpen, setIsOpen] = useState(false);
    const [donation, setDonations] = useState({
      id: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      donationAmount: "",
      cardInformation: "",
      comment: "",
    });
    const [responseDonation, setResponseDonation] = useState({
      id: "",
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      donationAmount: "",
      cardInformation: "",
      comment: "",
    });

    const successfulAlert = () => {
      Swal.fire({
        icon: "success",
        title: "Succesfully registered donation!",
        showConfirmButton: false,
        timer: 1500,
      });
    };

    useEffect(() => {
    
      if (decoded) {
        console.log(decoded)
        donation.email = decoded.sub;
      } else console.log("decoding failed.");
    }, [decoded]);

    const executeDonationMethod = async (e) => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/auth/donation/user/"+ decoded.sub, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(donation),
        });
        
        if (!response.ok) {
          throw new Error("Failed to submit donation");
        }
    
        const _donation = await response.json();
        setResponseDonation(_donation);
        successfulAlert();
        window.location.reload();
      } catch (error) {
        console.error("Error:", error.message);
        // Handle the error, e.g., display an error message to the user
      }
    };
    
    const handleChange = (event) => {
      const value = event.target.value;
      setDonations({ ...donation, [event.target.name]: value });
    };

    return(
    <TokenCheck>
    <>
      <Navbar transparent />
      <main>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/img/donate.jpg')",
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
                    Join Us in Making a Difference!
                </h1>
                <p className="mt-4 text-lg text-blueGray-200">
                    Together, let's ignite hope, inspire change, and make a lasting impact on the lives of families in need.
                </p>
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
            xmlns="http://www.w3.org/2000/svg"
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
      <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">
                Join the cause!
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                <div className="flex-auto p-5 lg:p-10">
                  <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                    Please fill out the donation form below to complete your contribution.
                  </p>


                  <form onSubmit={handleSubmit(executeDonationMethod)}>
                  {" "}
                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="full-name"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s Ilir Gjika"
                      value={donation.fullName}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.fullName?.message}
                    </small>
                  </div>

                  {/* <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s example@gmail.com"
                      value={donation.email}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.email?.message}
                    </small>
                  </div> */}

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="phone-number"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      {...register("phoneNumber")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s 045-630-886"
                      value={donation.phoneNumber}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.phoneNumber?.message}
                    </small>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="address"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      {...register("address")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s Sheshi Skënderbej"
                      value={donation.address}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.address?.message}
                    </small>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="donation-amount"
                    >
                      Donation Amount (€)
                    </label>
                    <input
                      type="number"
                      {...register("donationAmount")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s 15000"
                      value={donation.donationAmount}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.donationAmount?.message}
                    </small>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="cardInformation"
                    >
                      Card Information
                    </label>
                    <input
                      type="number"
                      {...register("cardInformation")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s 1214160204060810"
                      value={donation.cardInformation}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.cardInformation?.message}
                    </small>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Comment
                    </label>
                    <textarea
                      rows="4"
                      cols="80"
                      {...register("comment")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                      placeholder="Type a message..."
                      value={donation.comment}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.comment?.message}
                    </small>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      value="Submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </main>
    <Footer />
  </>
  </TokenCheck>
  );
}