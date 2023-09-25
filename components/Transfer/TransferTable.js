import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Transfer from "./Transfer";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

export default function TransferTable({ transfer,color }) {
  let TRANSFER_API_BASE_URL;
  const [transfers, setTransfers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [transferId, setTransferId] = useState(null);
  const [responseTransfer, setResponseTransfer] = useState(null);
  const [decoded, setDecoded] = useState(null);
  const [search, setSearch] = useState("");
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
      TRANSFER_API_BASE_URL =
        "http://localhost:8080/api/v1/auth/transfer/user/" + decoded.sub;
    } else {
      TRANSFER_API_BASE_URL = "http://localhost:8080/api/v1/auth/transfer";
    }
  }
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(TRANSFER_API_BASE_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const transferData = await response.json();
        setTransfers(transferData);
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
        deleteTransfer(e, id);
        Swal.fire("Deleted!", "Deleted Succesfully!", "success");
      }
    });
  };


  const deleteTransfer = (e, id) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/auth/transfer/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (transfers) {
        setTransfers((prevElement) => {
          return prevElement.filter((transfer) => transfer.id !== id);
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
                      placeholder="Search transfer by account number..."
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
                    href="/transfer"
                  >
                    Add Transfer
                  </a>
                </div>)}{" "}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full overflow-x-auto flex justify-center  ">
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
                  Account Number
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Amount
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Date
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Reciver Account Number
                </th>
                {!isAuditor && (
                <th
                  colSpan={2}
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Actions
                </th>
                )}
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {transfers
                ?.filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.accountNumber.toLowerCase().includes(search);
                })
                .map((transfer) => (
                  <Transfer
                  transfer={transfer}
                  ConfirmDialogAlert={ConfirmDialogAlert}
                    key={transfer.id}
                    deleteTransfer={deleteTransfer}
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
