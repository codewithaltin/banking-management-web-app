import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import { useState } from "react";
import { useEffect } from "react";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
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



  const router = useRouter();
  return (
    <>
      <ul className="md:flex-col md:min-w-full flex flex-col list-none">
        {/* Heading */}
        <hr className="my-4 md:min-w-full" />

        <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
          Data Summary
        </h6>
        {/* Navigation */}
        <li className="items-center">
          <Link
            href="/admin/transferlist"
            className={
              "text-xs uppercase py-3 font-bold block " +
              (router.pathname.indexOf("/admin/transferlist") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
          >
            <i
              className={
                "fas fa-comments-dollar mr-2 text-sm " +
                (router.pathname.indexOf("/admin/transferlist") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            Transfers List
          </Link>
        </li>
        <li className="items-center">
          <Link
            href="/admin/loanlist"
            className={
              "text-xs uppercase py-3 font-bold block " +
              (router.pathname.indexOf("/admin/loanlist") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
          >
            <i
              className={
                "fas fa-landmark mr-2 text-sm " +
                (router.pathname.indexOf("/admin/loanlist") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            Loan List
          </Link>
        </li>
        <li className="items-center">
          <Link
            href="/auth/Institutionpaymentslist"
            className={
              "text-xs uppercase py-3 font-bold block " +
              (router.pathname.indexOf("/auth/Institutionpaymentslist") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
          >
            <i className="fas fa-credit-card text-blueGray-400 mr-2 text-sm"></i>{" "}
            Payments List
          </Link>
        </li>
        <li className="items-center">
          <Link
            href="/admin/donationlist"
            className={
              "text-xs uppercase py-3 font-bold block " +
              (router.pathname.indexOf("/admin/donationlist") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
          >
            <i
              className={
                "fas fa-donate mr-2 text-sm " +
                (router.pathname.indexOf("/admin/donationlist") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            Donations List
          </Link>
        </li>
        {!isUser && (
        <li className="items-center">
          <Link
            href="/admin/contactlist"
            className={
              "text-xs uppercase py-3 font-bold block " +
              (router.pathname.indexOf("/admin/contactlist") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
          >
            <i
              className={
                "far fa-address-card mr-2 text-sm " +
                (router.pathname.indexOf("/admin/userlist") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            Contact Forms List
          </Link>
        </li> )}
        <li className="items-center">
          <Link
            href="/auth/requestedMoneyList"
            className={
              "text-xs uppercase py-3 font-bold block " +
              (router.pathname.indexOf("/auth/requestedMoneyList") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
          >
            <i
              className={
                "fas fa-dollar-sign mr-2 text-sm " +
                (router.pathname.indexOf("/auth/requestedMoneyList") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            Request Money
          </Link>
        </li>
        <li className="items-center">
          <Link
            href="/auth/savinglist"
            className={
              "text-xs uppercase py-3 font-bold block " +
              (router.pathname.indexOf("/auth/savinglist") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
          >
            <i
              className={
                "fas fa-piggy-bank mr-2 text-sm " +
                (router.pathname.indexOf("/auth/savinglist") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            Savings Goals
          </Link>
        </li>
      </ul>
      {/* Divider */}
      <hr className="my-4 md:min-w-full" />
      {/* Heading */}
    </>
  );
}
