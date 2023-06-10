import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Payments from "./Payments";
import AddGoal from "./AddGoal";
import TableDropdown from "components/Dropdowns/TableDropdown.js";
import CardTable from "./CardTable";

export default function MobilePaymentTable({ color }) {


  const MOBILEPAYMENT_API_BASE_URL = "http://localhost:8080/api/v1/mobilePayment";

  const [mobilePayment, setMobilePayment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mobilePaymentId, setMonbilePaymentId] = useState(null);
  const [responseMobilePayment, setResponseMobilePayment] = useState(null);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(MOBILEPAYMENT_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const mobilePayment = await response.json();
        setInstitutionPayments(mobilePayment);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [mobilePayment, responseMobilePayment]);

  const deleteMobilePayment = (e, id) => {
    let confirmed = confirm("Are you sure you wanna delete this payment ?");
    if (!confirmed) return;
    e.preventDefault();
    fetch(MOBILEPAYMENT_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (mobilePayment) {
        setMobilePayment((prevElement) => {
          return prevElement.filter((mobilePayment) => mobilePayment.id !== id);
        });
      }
    });
  };

  return(
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
              <h3
                className={
                  "font-semibold text-lg " +
                  (color === "light" ? "text-blueGray-700" : "text-white")
                }>
                Mobile Payments
              </h3>
              
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
                  Service Provider
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Number Code
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Phone Number
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
                {mobilePayment?.map((mobilePayment) => (
                  <MobilePaymentTable
                  mobilePayment={mobilePayment}
                    key={mobilePayment.id}
                    deleteMobilePayment={deleteMobilePayment}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  )
};
