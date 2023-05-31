import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import Footer from "components/Footers/Footer";
import FooterSmall from "components/Footers/FooterSmall";

export default function User({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
            
            </div>
          </div>
        </div>
      </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterSmall/>
        </div>
      </div>
    </>
  );
}