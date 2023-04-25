

import React from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Invoice() {
    return <>
        <Navbar transparent />
        <main>
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

            </section>
            <section className="relative block py-24 lg:pt-0  bg-blueGray-800" >
                <div className="container mx-auto px-0">
                    <div className="flex flex-wrap justify-center lg:-mt-0 -mt-0">
                        <div className="w-full lg:w-6/12 px-0">
                            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                                <div className="flex-auto p-10 lg:p-10">

                                    <div className="rounded-t mb-o px-4 py-2">
                                        <form>
                                            <h4 className="text-2xl font-semibold">
                                                Invoice Information
                                            </h4>
                                            <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                                                Bill form
                                            </p>
                                            <div className="flex mb-4">
                                                <div className="w-1/2 mr-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="full-name"
                                                    >
                                                        City
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="city"
                                                    />

                                                </div>

                                                <div className="w-1/2 ml-3 mr-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="post-code"
                                                    >
                                                        Post Code
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="post code"
                                                    />
                                                </div>

                                                <div className="w-1/2 ml-3">
                                                    <label
                                                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                        htmlFor="Country"
                                                    >
                                                        Country
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                                        placeholder="country"
                                                    />
                                                </div>
                                            </div>


                                            <div className="relative w-full mb-3">
                                                <label
                                                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                                    htmlFor="message"
                                                >
                                                    Message
                                                </label>
                                                <textarea
                                                    rows="4"
                                                    cols="80"
                                                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                                    placeholder="Type a message..."
                                                />
                                            </div>
                                            <div className="text-center mt-6">
                                                <button
                                                    className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                >
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                    </div>


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
