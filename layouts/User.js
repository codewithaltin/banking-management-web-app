import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import UserSideBar from "components/Sidebar/UserSideBar.js";
import UserHeaderStats from "components/Headers/UserHeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import Sidebar from "components/Sidebar/UserSideBar.js";

export default function User({ children }) {
  return (
    <>
      <UserSideBar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <UserHeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
