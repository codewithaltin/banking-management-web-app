import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import IndexNavbar_light from "components/Navbars/IndexNavbar_light.js";
import FooterSmall from "components/Footers/FooterSmall.js";
import Sidebar from "components/Sidebar/Sidebar.js";

export default function LightAuth({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <div className="px-4 md:px-10 mx-auto w-full -m-24">{children}</div>
      </div>
    </>
  );
}

