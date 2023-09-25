import React, { useState } from "react";
import Link from "next/link";
import Navbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import TokenCheck from "components/TokenCheck";
import jwt_decode from "jwt-decode";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import * as yup from "yup";
import Auth from "layouts/Auth.js";
import TableAuth from "layouts/TableAuth";

  const schema = yup
  .object()
  .shape({
    fullName: yup
    .string()
    .required("Full Name is required.")
    .min(5, "Full name must be longer than 5 characters")
    .max(50, "Full name must be shorter than 50 characters."),
    // email: yup
    // .string()
    // .email("Please enter a valid e-mail")
    // .required("Email is required."),
    cardInformation: yup
      .string()
      .length(16, 'Card number must be exactly 16 digits')
      .matches(/^\d+$/, 'Card number can only contain digits')
      .required('Card number is required')
  })
  .required();

    export default function FuturPlus() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({resolver: yupResolver(schema)});

      const [decoded, setDecoded] = useState(null);

      let FUTURPLUS_API_BASE_URL;

      const [isOpen, setIsOpen] = useState(false);
      const [futurPlus, setFuturPlus] = useState({
        id: "",
        fullName: "",
        email:"",
        cardInformation:"",
      });
      const [responseFuturPlus, setResponseFuturPlus] = useState({
        id: "",
        fullName: "",
        email:"",
        cardInformation:"",
      });

      const successfulAlert = () => {
        Swal.fire({
          icon: "success",
          title: "Succesfully applied!",
          showConfirmButton: false,
          timer: 1500,
        });
      };

      useEffect(() => {
        const token = localStorage.getItem("token");
        const decodedToken = jwt_decode(token);
        setDecoded(decodedToken);
      }, []);

      useEffect(() => {
    
        if (decoded) {
          console.log(decoded)
          futurPlus.email = decoded.sub;
        } else console.log("decoding failed.");
      }, [decoded]);


      const saveFuturPlus = async (e) => {
        const response = await fetch("http://localhost:8080/api/v1/auth/futurPlus/user/" + decoded.sub, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(futurPlus),
        });
        if (!response.ok) {
          throw new Error("Something went wrong");
        }
        const _FuturPlus = await response.json();
        setResponseFuturPlus(_FuturPlus);
        successfulAlert();
        window.location.reload();
      };
    
          // const handleChange = (event) => {
          //   const value = event.target.value;
          //   setFuturPlus1({ ...futur_plus, [event.target.name]: value });
          // };

      const handleChange = (event) => {
      const value = event.target.value;
      setFuturPlus({ ...futurPlus, [event.target.name]: value });
};


    return <>
      <Navbar transparent />
      <main>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              "url('/img/plus.jpg')",
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
                    Upgrade to Premium Futur Banking!
                </h1>
                <p className="mt-4 text-lg text-blueGray-200">
                    Explore and Experience the Unmatched Features of our Premium E-Banking Services
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
                Want to apply now?
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
                    Complete this form and we will get back to you.
                  </p>

                  <form onSubmit={handleSubmit(saveFuturPlus)}>

                  <div className="relative w-full mb-3 mt-8">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="field"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register("fullName")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s Ilir Gjika"
                      value={futurPlus.fullName}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.fullName?.message}
                    </small>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="text"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s example@gmail.com"
                      value={futurPlus.email}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.email?.message}
                    </small>
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="message"
                    >
                      Credit Card info
                    </label>
                    <input
                      type="number"
                      {...register("cardInformation")}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="p.s 1214160204060810"
                      value={futurPlus.cardInformation}
                      onChange={(e) => handleChange(e)}
                    />
                    <small role="alert" className="text-red-500 ">
                      {errors.cardInfo?.message}
                    </small>
                  </div>
                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      value="Submit"
                    >
                      Apply Now
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
  </>;
}

FuturPlus.layout = Auth;