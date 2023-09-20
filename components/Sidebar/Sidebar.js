import React from "react";
import { useRouter } from "next/router";
import AdminSideBar from "./AdminSideBar";
import UserSideBar from "./UserSideBar";
import UserProfile from "./UserProfile";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
export default function Sidebar() {
  const [decoded, setDecoded] = useState(null);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
  }, []);

  useEffect(() => {
    if (decoded) {
      setIsUser(checkUser());
    }
  }, [decoded]);

  function checkUser() {
    return decoded.authorities === "ROLE_USER";
  }
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center  w-full mx-auto">
          {isUser ? <UserProfile /> : <AdminSideBar />}
          <UserSideBar />
        </div>
      </nav>
    </>
  );
}
