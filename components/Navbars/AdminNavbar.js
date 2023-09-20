import React from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown";
import UserDropdown from "components/Dropdowns/UserDropdown";
export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-end flex items-center py-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"></form>
          {/* User */}
          <a>Log Out</a>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
