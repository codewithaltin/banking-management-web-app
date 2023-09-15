import React from "react";
import Link from "next/link";
import IndexNavbarLight from "components/Navbars/IndexNavbar_light.js";
import Footer from "components/Footers/Footer.js";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

function App() {
  return (
    <div>
      <IndexNavbarLight />
      <section className="header relative pt-16 items-center flex h-screen max-h-1200-px bg-cover-blur">
        <div className="container mx-auto ">
          <div className="w-full  px-4">
            <div className="pt-32 sm:pt-0 w-full ">
              <h1 className="text-6xl font-heavy leading-normal  capitalize mt-0 mb-2 text-costum-dark">
                Digital Banking Service
              </h1>

              <p className="mt-2 text-xl leading-relaxed capitalize  text-costum-black">
                Banking that fits your lifestyle and supports your ambitions!
              </p>
              <div className="mt-12 ">
                <a
                  href="/auth/individual_register"
                  target="_blank"
                  className="get-started text-blueGray-100 font-heavy px-6 py-4 rounded-lg outline-none focus:outline-none mr-1 mb-1 bg-black hover:bg-blueGray-100  bg-opacity-20 capitalize text-m shadow-lg hover:shadow-lg ease-linear transition-all duration-"
                >
                  GET STARTED
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
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
                  src="https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
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
                    Get Individual/ Business Loan
                  </h4>
                  <p className="text-md font-light mt-2 text-blueGray-900 mb-4">
                    Whether you're an individual looking to make a big purchase
                    or a business owner in need of funding, our loan options can
                    help you get the funds you need. Apply now and take the
                    first step toward achieving your financial goals.
                  </p>
                  <a
                    href="/loan-application"
                    target="_blank"
                    className="font-bold  text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                  >
                    Get Loan{" "}
                    <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                  </a>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-balance-scale"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold  text-blueGray-900">
                        Control Balance
                      </h6>
                      <p className="mb-4 text-blueGray-600">
                        Track your finances and stay in control with the
                        balance.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-calculator"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold text-blueGray-900">
                        Crunch the Numbers
                      </h6>
                      <p className="mb-4 text-blueGray-600">
                        Use our financial calculator to make sense of your
                        finances.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-wallet"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold text-blueGray-900">
                        Digital Wallet
                      </h6>
                      <p className="mb-4 text-blueGray-600">
                        Carry your bank in your pocket with our secure digital
                        wallet.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-700 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white ">
                        <i className="fas fa-landmark"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold  text-blueGray-900">
                        "Landmark Banking"
                      </h6>
                      <p className="mb-4 text-blueGray-600">
                        We are the reliable partner in achieving your financial
                        goals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <img
                  src="/img/invoice-logo.png"
                  alt="..."
                  className="fas fa-comments-dollar text-xl"
                />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-blueGray-900">
                Your Financial Invoice
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                We are pleased to provide you with an invoice for the banking
                services that we provide to you. As a trusted financial
                institution, we pride ourselves on offering a wide range of
                services that cater to your individual banking needs and we are
                committed to providing exceptional service to our clients.
              </p>

              <a
                href="/invoice_details"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Settle your Invoice{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
              <a
                href="/transfer"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Do a transfer{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>

              <a
                href="/requestMoney"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Request Money{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
     
            <a
                href="/auth/cards"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Apply for a Card{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
              </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-0 mt-48 md:mt-4">
                <img
                  alt="..."
                  src="/img/f-banking.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                />
                <img
                  alt="..."
                  src="/img/strong-finance1.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="/img/invoice1.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="/img/simplify-finance.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-210-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/invoice2.jpg"
                  className="w-full align-middle rounded absolute shadow-xl max-w-210-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white"></div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-blueGray-900">
                Empower Your Savings Journey with FuturBank
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Set your sights on your financial goals with FuturBank. Define
                your targets, track your progress, and watch your savings grow.
                Take control of your future today and make your dreams a
                reality. Start saving with us now.
              </p>

              <a
                href="/SavingGoal"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Set a saving goal{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-8/12 px-8 mr-px ml-px mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-0 mt-48 md:mt-4">
                <div className="relative flex flex-col min-w-0 w-full mb-0 mt-48 md:mt-4">
                  <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
                    <img
                      alt="..."
                      className="max-w-full rounded-lg shadow-xl"
                      style={{
                        transform:
                          "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                      }}
                      src="/img/savings-banking-investments-piggy-bank-credit.jpg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center pt-32">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-6/12 px-4">
                <a href="#" target="_blank">
                  <div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="/img/retirement.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Retirement Planning
                    </p>
                  </div>
                </a>
                <a href="#" target="_blank">
                  <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="/img/property.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Mortgage
                    </p>
                  </div>
                </a>
                <a href="#" target="_blank">
                  <div className="bg-blueGray-900 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="/img/piggy-b.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Saving Accounts
                    </p>
                  </div>
                </a>
              </div>
              <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <a href="#" target="_blank">
                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="/img/money.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Grow Wealth
                    </p>
                  </div>
                </a>
                <a href="#" target="_blank">
                  <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="/img/risk-m.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Risk Management
                    </p>
                  </div>
                </a>
                <a href="#" target="_blank">
                  <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src="/img/euro.png"
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Smart Money Moves
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="far fa-credit-card text-xl"></i>
            </div>
            <h3 className="text-3xl mb-2 font-semibold leading-normal text-blueGray-900">
              Payments
            </h3>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-800">
              You can perform utility payments such as Electricity, Insurance,
              Pre-paid Service and Mobile Top-Up.
            </p>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-800">
              Simplify your life and stay connected, insured, and powered up
              with us.
            </p>
            <a
              href="/payments"
              target="_blank"
              className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
            >
              Pay effortlessly{" "}
              <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </a>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <img
                  src="/img/beneficiary-logo.jpg"
                  alt="..."
                  className="fas fa-comments-dollar text-xl"
                />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-blueGray-900">
                Do Your Beneficiary
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Are you looking to transfer funds to a friend or relative? With
                the convenience of online banking facilities provided by our
                bank, it's now easier than ever. Using our banking, you can
                effortlessly transfer funds to individuals holding accounts
                within your bank or even accounts held in other banks. To
                initiate a transfer, simply add the bank account details of the
                recipient, ensuring they can receive the funds securely.
              </p>

              <a
                href="/beneficiary"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Name your Beneficiary{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-0 mt-48 md:mt-4">
                <img
                  alt="..."
                  src="/img/1beneficiary.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="/img/4beneficiary.jpg"
                  className="mt-12 w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="/img/3beneficiary.jpg"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-210-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/2beneficiary.jpg"
                  className="w-full align-middle rounded absolute shadow-xl max-w-210-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-hand-holding-heart text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold text-blueGray-900">
                  Elevate Your Giving
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-700">
                  At “FuturBanking”, we believe in making a positive impact on
                  the world. By using our online banking platform, you can
                  easily donate to a variety of charitable organizations that
                  we've partnered with. Join us in giving back to your community
                  and make a difference today!
                </p>

                <a
                  href="/online-donation"
                  target="_blank"
                  className="font-bold  text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                >
                  Donate Online{" "}
                  <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
                </a>

                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-donate"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-600">
                          Be a Part of Positive Change
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-dove"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-600">
                          Spread Your Wings of Generosity
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-heart"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-600">
                          From Your Heart to Others
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src="/img/charity.jpg"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Explore Our Site</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              We invite you to explore all that we have to offer. Click on one
              of the three images below to access different sections of our
              site. Thank you for choosing us as your destination for all
              banking things. Happy exploring!
            </p>
          </div>
        </div>
      </section>
      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  <Link href="/auth/individual_register" legacyBehavior>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/login.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  <Link href="/profile" legacyBehavior>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/profile.jpg"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <Link href="/landing" legacyBehavior>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/landing.jpg"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-globe text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Global Banking Services
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-300">
                Our global banking services are designed to meet your financial
                needs, no matter where you are in the world. Whether you are
                traveling abroad or managing your finances from afar, we offer a
                range of services to help you stay connected to your money.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-300">
                So, whether you're exploring new horizons or simply looking to
                expand your financial reach, our global banking services are
                here to help you achieve your goals.
              </p>
              <a
                href="./auth/cards.js"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Register Now
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fas fa-globe text-blueGray-700 absolute text-55 -top-150-px -right-100 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="pb-16 bg-blueGray-200 relative pt-32">
      <div
        className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
          <div className="w-full text-center lg:w-8/12">
            <p className="text-4xl text-center">
              <span role="img" aria-label="love">
                😍
              </span>
            </p>
            <h3 className="font-semibold text-3xl">
              Do you love this Starter Kit?
            </h3>
            <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Cause if you do, it can be yours now. Hit the buttons below to
              navigate to get the Free version for your next project. Build a
              new web app or give an old project a new look!
            </p>
            <div className="sm:block flex flex-col mt-10">
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-index"
                target="_blank"
                className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-blueGray-400 active:bg-blueGray-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Get started
              </a>
              <a
                href="https://github.com/creativetimofficial/notus-nextjs?ref=nnjs-index"
                target="_blank"
                className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                <i className="fab fa-github text-lg mr-1"></i>
                <span>Help With a Star</span>
              </a>
            </div>
            <div className="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </section> */}
      <Footer /> ;
    </div>
  );
}

export default App;
