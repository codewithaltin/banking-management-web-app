import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const UserProfile = () => {
  const router = useRouter();
  return (
    <>
      <ul>
        <li>
          <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
            HOMEPAGE
          </h6>
          <Link href="/" className={"text-xs uppercase py-3 font-bold block "}>
            <i
              className={
                "fas fa-home mr-2 text-sm " +
                (router.pathname.indexOf("/") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            MAIN PAGE
          </Link>
        </li>
        <li>
          <Link
            href="/auth/dashboard"
            className={
              "text-xs uppercase py-3 font-bold block " +
              (router.pathname.indexOf("/admin/dashboard") !== -1
                ? "text-lightBlue-500 hover:text-lightBlue-600"
                : "text-blueGray-700 hover:text-blueGray-500")
            }
          >
            {" "}
            <i
              className={
                "fas fa-comment-dollar	 mr-2 text-sm " +
                (router.pathname.indexOf("/admin/dashboard") !== -1
                  ? "opacity-75"
                  : "text-blueGray-300")
              }
            ></i>{" "}
            cash flow
          </Link>
        </li>
        <li>
          <Link
            href="/auth/profile"
            className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
          >
            <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
            Profile Page
          </Link>
        </li>
      </ul>
    </>
  );
};

export default UserProfile;
