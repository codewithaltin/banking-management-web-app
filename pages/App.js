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
                    className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-600 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  >
                  GET LOAN
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
              <i className="fas fa-money-check-alt text-xl"></i>
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

        <div className="flex flex-wrap items-center pt-32">
          <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
            <div className="justify-center flex flex-wrap relative">
              <div className="my-4 w-full lg:w-6/12 px-4">
                <a href="#" target="_blank">
                  <div className="flex flex-wrap justify-center">
                  <div className="w-8/16 sm:w-4/12 px-4">
                    <img src="/img/cards/aexpres.png" alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
                  </div>
                  </div>
                </a>

                <a href="#" target="_blank">
                  <div className="flex flex-wrap justify-center rounded-full">
                  <div className="w-8/16 mt-8 sm:w-4/12 px-4 ">
                    <img src="/img/cards/diners.png" alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
                  </div>
                  </div>
                </a>

                <a href="#" target="_blank">
                  <div className="flex flex-wrap justify-center rounded-full">
                  <div className="w-8/16 mt-8 sm:w-4/12 px-4 ">
                    <img src="/img/cards/elo.png" alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
                  </div>
                  </div>
                </a>  
              </div>
              <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">

                <a href="#" target="_blank">
                  <div className="flex flex-wrap justify-center rounded-full">
                  <div className="w-8/16 mt-8 sm:w-4/12 px-4 ">
                    <img src="/img/cards/visa.png" alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
                  </div>
                  </div>
                </a>  
                <a href="#" target="_blank">
                  <div className="flex flex-wrap justify-center rounded-full">
                  <div className="w-8/16 mt-8 sm:w-4/12 px-4 ">
                    <img src="/img/cards/hiper.png" alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
                  </div>
                  </div>
                </a>  
                <a href="#" target="_blank">
                  <div className="flex flex-wrap justify-center rounded-full">
                  <div className="w-8/16 mt-8 sm:w-4/12 px-4 ">
                    <img src="/img/cards/unionpay.png" alt="..." className="shadow rounded max-w-full h-auto align-middle border-none" />
                  </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <i className="fas fa-money-check-alt text-xl"></i>
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

        <section className="pb-20 bg-blueGray-200 -mt-30">
        <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-piggy-bank text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Elevate Your Savings Game
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Set your sights on your financial goals with FuturBank. Define
                your targets, track your progress, and watch your savings grow.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                Take control of your future today and make your dreams a
                reality. Start saving with us now.
              </p>
              <a
                href="/SavingGoal"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                Set a Saving Goal{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words mt-20 bg-white w-full mb-6 shadow-lg rounded-lg bg-blueGray-600">
                <img
                  alt="..."
                  src="/img/piggy-savings.jpg"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-blueGray-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    FuturBank is your best ally!
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    Your trusted financial partner, is dedicated to helping you reach your goals. 
                    We aren't just a bank; FuturBank is your strongest supporter.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
          </div>
        </section>

        <section className="relative py-20">
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
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="/img/atm.jpg"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                  <i className="far fa-credit-card text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">Apply for a Card</h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    Discover the smart choice for obtaining your card right here. We're your top destination for card solutions that meet your needs.
                    Unlock a world of possibilities. 
                </p>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    Ready to take advantage from the benefits of credit cards? Applying is simple, range of options to suit your needs.
                </p>
                <a
                    href="/auth/cards"
                    className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-600 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                  >
                  APPLY NOW
                  </a>
              </div>
            </div>
          </div>
        </div>
      </section>     

        

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Explore Our Services</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              Experience easy, secure, and accessible online banking at your fingertips!
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
                    Settle your Invoice  
                  </h5>
                  <Link href="/invoice_details" legacyBehavior>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/invoice-pc.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Request Money
                  </h5>
                  <Link href="/requestMoney" legacyBehavior>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/tablet-request.png"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Execute a Transfer
                  </h5>
                  <Link href="/transfer" legacyBehavior>
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="/img/transfer-phone-simple.png"
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
                <i className="fas fa-hand-holding-heart text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Raise Your Giving
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-300">
                  At “FuturBanking”, we believe in making a positive impact on
                  the world. By using our online banking platform, you can
                  easily donate to a variety of charitable organizations that
                  we've partnered with. Join us in giving back to your community
                  and make a difference today!
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-300">
              Your generosity fuels our mission and allows us to continue our important work. Together, 
              we can make a meaningful difference in the lives of those in need.
              </p>
              <a
                href="/online-donation"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Donate Online
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fas fa-dove fa-flip-horizontal text-blueGray-700 absolute text-55 -top-150-px -right-200 left-auto opacity-80"></i>
            </div>
          </div>
        </div>
      </section>
      <Footer /> ;
    </div>
  );
}

export default App;
