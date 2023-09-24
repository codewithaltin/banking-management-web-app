import React from "react";
import Link from "next/link";

import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import ServiceDropdown from "components/Dropdowns/ServiceDropdown";
import PaymentDropdown from "components/Dropdowns/PaymentDropdown";
import { useRouter } from "next/router";
export default function Navbar() {
    const router = useRouter();
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    router.push("/auth/login");
  }
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href=""
              className="text-costum-dark text-xl font-heavy leading-relaxed
              inline-block mr-4 py-2 whitespace-nowrap uppercase "
            >
              {" "}
              Futur
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-none lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none align-center mr-auto">
              <li className="mr-4"></li>
              <Link
                className="text-costum-dark text-xs font-heavy leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                href="/admin/dashboard"
              >
                Admin Dashboard
              </Link>
            </ul>

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li>
              <button
                onClick={logout}
                className="text-costum-dark text-xs font-heavy leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              >
                Sign Out{" "}
              </button>
              <i className="fas fa-power-off"></i>
            </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
