import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Payments from "./InstitutionPayments";
import InstitutionPayments from "./InstitutionPayments";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";

export default function InstitutionPaymentsTable({
  institutionPayment,
  color,
}) {
  let INSTITUTIONPAYMENTS_API_BASE_URL;

  const [institutionPayments, setInstitutionPayments] = useState(null);
  const [loading, setLoading] = useState(true);
  const [institutionPaymentsId, setInstitutionPaymentsId] = useState(null);
  const [responseInstitutionPayments, setResponseInstitutionPayments] =
    useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [decoded, setDecoded] = useState(null);
  const [isAuditor, setIsAuditor] = useState(false);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
  }, []);

  useEffect(() => {
    if (decoded) {
      chooseEndPoint();
      fetchData();
      setIsAuditor(checkAuditor());
    }
  }, [decoded]);

  useEffect(() => {
    if (decoded) {
      chooseEndPoint();
      fetchData();
      setIsUser(checkUser());
    }
  }, [decoded]);

  function checkAuditor() {
    return decoded.authorities === "ROLE_AUDITOR";
  }

  function checkUser() {
    return decoded.authorities === "ROLE_USER";
  }

  function chooseEndPoint() {
    let res = decoded.authorities === "ROLE_USER";
    if (res) {
      INSTITUTIONPAYMENTS_API_BASE_URL =
        "http://localhost:8080/api/v1/auth/institutionPayments/user/" +
        decoded.sub;
    } else {
      INSTITUTIONPAYMENTS_API_BASE_URL =
        "http://localhost:8080/api/v1/auth/institutionPayments";
    }
  }
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(INSTITUTIONPAYMENTS_API_BASE_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const institutionPaymentData = await response.json();
        setInstitutionPayments(institutionPaymentData);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const ConfirmDialogAlert = (e, id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteInstitutionPayment(e, id);
        Swal.fire("Deleted!", "Deleted Succesfully!", "success");
      }
    });
  };

  const deleteInstitutionPayment = (e, id) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/auth/institutionPayments/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (institutionPayments) {
        setInstitutionPayments((prevElement) => {
          return prevElement.filter(
            (institutionPayment) => institutionPayment.id !== id
          );
        });
      }
    });
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <div className="flex items-center">
                <form>
                  <div class="relative">
                    <div class="absolute inset-b-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa fa-search text-blue-50 mt-3"></i>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full p-2 pl-10 text-sm text-blue-50 border border-gray-300 rounded-lg bg-blueGray-600 "
                      placeholder="Search I.P by company..."
                      onChange={(e) => setSearch(e.target.value)}
                      required
                    ></input>
                    <button
                      type="submit"
                      class="text-white absolute right-2.5 bottom-2.5 bg-blue-50 "
                    ></button>
                  </div>
                </form>
                {isUser && (
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <a
                      className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      href="/paymentTypes/InstitutionPayments"
                    >
                      Add Institution Payments
                    </a>
                  </div>
                )}{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Institution
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Company
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Reference Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Amount
                </th>
                {!isAuditor && (
                  <th
                    className={
                      "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  >
                    Actions
                  </th>
                )}
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                ></th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {institutionPayments
                  ?.filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.company.toLowerCase().includes(search);
                  })
                  .map((institutionPayment) => (
                    <InstitutionPayments
                      institutionPayment={institutionPayment}
                      ConfirmDialogAlert={ConfirmDialogAlert}
                      key={institutionPayment.id}
                      deleteInstitutionPayment={deleteInstitutionPayment}
                    />
                  ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}
