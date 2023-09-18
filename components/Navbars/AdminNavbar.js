import React from "react";
import { getSession } from "next-auth/react";
import UserDropdown from "components/Dropdowns/UserDropdown.js";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import NotificationDropdown from "components/Dropdowns/NotificationDropdown";
export default function Navbar() {
  const router = useRouter();

  const successfulAlert = () => {
    Swal.fire({
      icon: "success",
      title: "Succesfully logged out!",
      showConfirmButton: false,
      timer: 800,
    });
    logout();
    router.push("/auth/login");
  };
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  }
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          {/* Brand */}
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"></form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <li>
              <UserDropdown />
            </li>
            <li>
              \{" "}
              <button
                onClick={successfulAlert}
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
