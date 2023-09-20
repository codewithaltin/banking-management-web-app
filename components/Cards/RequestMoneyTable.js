import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import jwt_decode from "jwt-decode";
import RequestMoney from "./RequestMoney";
import Swal from "sweetalert2";
export default function RequestMoneyTable({ requestMoney, color }) {
  const REQUEST_MONEY_BASE_URL =
    "http://localhost:8080/api/v1/auth/requestmoney";
  const [requestedMoney, setRequestedMoney] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requestedMoneyId, setRequestedMoneyId] = useState(null);
  const [responseRequestedMoney, setResponseRequestedMoney] = useState(null);
  const [decoded, setDecoded] = useState(null);
  const [isAuditor, setIsAuditor] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
  }, []);

  useEffect(() => {
    if (decoded) {
      //chooseEndPoint();
      //fetchData();
      setIsAuditor(checkAuditor());
    }
  }, [decoded]);

  function checkAuditor() {
    return decoded.authorities === "ROLE_AUDITOR";
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(REQUEST_MONEY_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const requestedMoneyData = await response.json();
        setRequestedMoney(requestedMoneyData);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [requestedMoney, responseRequestedMoney]);

  const confirmDelete = (e, id) => {
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
        deleteRequestedMoney(e, id);
        Swal.fire("Deleted!", "Deleted Succesfully!", "success");
      }
    });
  };

  const deleteRequestedMoney = (e, id) => {
    e.preventDefault();
    fetch("http://localhost:8080/api/v1/auth/requestmoney/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (requestedMoney) {
        setRequestedMoney((prevElement) => {
          return prevElement.filter(
            (requestedMoney) => requestedMoney.id !== id
          );
        });
      }
    });
  };

  const editRequestedMoney = (e, id) => {
    e.preventDefault();
    setRequestedMoneyId(id);
  };

  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3  border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className={"font-semibold text-lg "}>RequestedMoney</h3>
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
                  Payee Email
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
                {requestedMoney?.map((requestedMoney) => (
                  <RequestMoney
                    requestedMoney={requestedMoney}
                    key={requestedMoney.id}
                    confirmDelete={confirmDelete}
                    editRequestedMoney={editRequestedMoney}
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
