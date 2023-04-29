import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { getSession } from "next-auth/react";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import IndexDropdown from "components/Dropdowns/IndexDropdown";

export default function Navbar(session) {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          <IndexDropdown />
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <li>
              <UserDropdown />
            </li>
            <li>
              <button
                onClick={signOut}
                className="text-blueGray-100 p-5 hover:text-blueGray-200 text-xs font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              >
                Sign Out{" "}
              </button>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { session },
  };
}
