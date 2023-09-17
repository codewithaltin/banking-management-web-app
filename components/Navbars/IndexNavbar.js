import React from "react";
import Link from "next/link";
import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-black bg-opacity-40 shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              href="/"
              className="text-blueGray-100 text-xl font-heavy leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            >
              Futur
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
