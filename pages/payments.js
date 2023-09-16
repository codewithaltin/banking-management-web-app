import React from "react";
import Link from "next/link";

import AuthNavbar from "components/Navbars/AuthNavbar.js";
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import UserNavbar from "components/Navbars/UserNavbar.js";
import Footer from "components/Footers/Footer.js";
import { getSession } from "next-auth/react";
import LightAuth from "layouts/LightAuth.js";
import TokenCheck from "components/TokenCheck";
export default function payments() {
  return (
    <>
      <TokenCheck />

      <section className="mt-48 md:mt-40 pb-40 relative ">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        ></div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white 33w-full mb-6 shadow-lg rounded-lg">
                <img
                  alt="..."
                  src="/img/banking-services.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  ></svg>
                  <h4 className="text-xl font-bold text-blueGray-900">
                    Your Payments
                  </h4>
                  <p className="text-md font-light mt-2 text-blueGray-900 mb-4">
                    Manage all your payments effortlessly with our e-banking web
                    app. From electricity bills to insurance premiums, pre-paid
                    services to mobile top-ups, our platform offers a seamless
                    experience.
                  </p>
                  <p className="text-md font-light mt-2 text-blueGray-900 mb-4">
                    Stay connected, insured, and powered up without any hassle.
                    Simplify your financial transactions with just a few clicks.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full mb-8 md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-wallet"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold  text-blueGray-900">
                        Institution payments
                      </h6>
                      <p className="mb-4 text-blueGray-600">
                        Phone, Water, Electricity, Insurance...
                      </p>
                      <a
                        href="/paymentTypes/InstitutionPayments"
                        target="_blank"
                        className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                      >
                        Pay{" "}
                        <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                      </a>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-building"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold text-blueGray-900">
                        Collector payments
                      </h6>
                      <p className="mb-4 text-blueGray-600">
                        Ministry, Municipality, Education, Public and Private
                        Organizations
                      </p>
                      <a
                        href="/paymentTypes/CollectorPayments"
                        target="_blank"
                        className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                      >
                        Pay{" "}
                        <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-globe"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold text-blueGray-900">
                        Pre-Paid Services
                      </h6>
                      <p className="mb-4 text-blueGray-600">
                        Pay monthly bills like: TV, Internet easily
                      </p>
                      <a
                        href="/paymentTypes/PrePaidServices"
                        target="_blank"
                        className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                      >
                        Pay{" "}
                        <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                      </a>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-phone"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold  text-blueGray-900">
                        Mobile Top-Up
                      </h6>
                      <p className="mb-4 text-blueGray-600">
                        All mobile operators in one place: Ipko, Vala, Z Mobile
                      </p>
                      <a
                        href="/paymentTypes/MobilePayments"
                        target="_blank"
                        className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                      >
                        Pay{" "}
                        <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

payments.layout = LightAuth;
