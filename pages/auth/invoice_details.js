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
                                            <div className="mb-4">
                                                <h4 className="text-4xl font-semibold text-center">
                                                    Invoice
                                                </h4>
                                            </div>
                                            <div className="py-2">
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                    htmlFor="sender"
                                                >
                                                    Your email address
                                                </label>
                                                <input
                                                    className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="sender"
                                                    name="sender"
                                                    type="email"
                                                    required
                                                    placeholder="Who is this invoice from? (required)"
                                                />
                                                <label
                                                    className="block text-gray-700 text-sm font-bold my-3"
                                                >
                                                    Bill To
                                                </label>
                                                <textarea
                                                    className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="billTo"
                                                    name="billTo"
                                                    type="email"
                                                    required
                                                    placeholder="Who is this invoice to? (required)"
                                                />
                                            </div>
                                            <div className="mb-6">
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2"
                                                >
                                                    Ship To
                                                </label>
                                                <input
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="shipTo"
                                                    name="shipTo"
                                                    type="email"
                                                    required
                                                    placeholder="Client's email"
                                                />
                                            </div>

                                            <div
                                                className="flex justify-center items-center space-x-4"
                                            >
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2 w-full mr-5"
                                                >
                                                    Invoice Item
                                                    <input
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                        name="itemDescription"
                                                        type="text"
                                                    />
                                                </label>
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2 w-full mr-5"
                                                >
                                                    Quantity
                                                    <input
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                        name="qty"
                                                        type="number"
                                                    />
                                                </label>
                                                <label
                                                    className="block text-gray-700 text-sm font-bold mb-2 w-full  mr-5"
                                                >
                                                    Unit Price
                                                    <input
                                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                        name="price"
                                                        type="tel"
                                                    />
                                                </label>

                                                <button
                                                    className="bg-red-500 active:bg-blueGray-500 h-8 px-3 py-3 flex items-center justify-center text-white font-bold rounded focus:outline-none focus:shadow-outline"
                                                    type="button"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                            <button
                                                className="bg-blueGray-700 active:bg-blueGray-500 h-8 px-3 py-3 flex items-center justify-center text-white font-bold rounded focus:outline-none focus:shadow-outline"
                                                type="button"
                                            >
                                                Add Item
                                            </button>
                                            <div className="my-6 flex flex-col">
                                                <label
                                                    htmlFor="note"
                                                    className="block text-gray-700 text-sm font-bold mb-2 w-full"
                                                >
                                                    Invoice Notes
                                                </label>
                                                <textarea
                                                    id="note"
                                                    name="note"
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                />
                                            </div>
                                            <div className="mb-6 flex justify-between font-bold text-xl">
                                                <p>Total:</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <button
                                                    className="bg-blueGray-700 active:bg-blueGray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    type="button"
                                                >
                                                    Send Invoice
                                                </button>
                                                <button
                                                    className="bg-blueGray-700 active:bg-blueGray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    type="button"
                                                >
                                                    Download Invoice
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
