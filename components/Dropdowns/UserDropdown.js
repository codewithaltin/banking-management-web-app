import React from "react";
import { createPopper } from "@popperjs/core";
import Link from "next/link";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
const UserDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();

  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "auto",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

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
      <a
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        {" "}
        <i className="fas fa-user-circle text-2xl text-s pr-4"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48 "
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          {" "}
          <i className=" text-s fas fa-user-cog pr-4	"></i>
          <Link href="/auth/profile">View Profile</Link>
        </a>

        <div className="h-0 my-2 border border-solid border-blueGray-100" />
        <a
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          onClick={(e) => e.preventDefault()}
        >
          <button onClick={successfulAlert}>
            <i className="fas fa-power-off text-s pr-4"></i>
            Log Out
          </button>
        </a>
      </div>
    </>
  );
};

export default UserDropdown;
