import React from "react";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";

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
    router.push("auth/login");
  }
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-end flex items-center py-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3"></form>
          {/* User */}

          <a
            className="text-white text-s font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap capitalize cursor-pointer "
            onClick={logout}
          >
            Log Out
          </a>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
