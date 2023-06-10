import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Payments from "./Payments";
import AddGoal from "./AddGoal";
import TableDropdown from "components/Dropdowns/TableDropdown.js";
import CardTable from "./CardTable";

export default function PrePaidServicesTable({ color }) {


  const PREPAIDSERVICES_API_BASE_URL = "http://localhost:8080/api/v1/prePaidPayment";

  const [prePaidServives, setPrePaidServives] = useState(null);
  const [loading, setLoading] = useState(true);
  const [prePaidServivesId, setPrePaidServivesId] = useState(null);
  const [responsePrePaidServives, setResponsePrePaidServives] = useState(null);


useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(PREPAIDSERVICES_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const prePaidServives = await response.json();
        setPrePaidServives(prePaidServives);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [prePaidServives, responsePrePaidServives]);

const deletePrePaidServices = (e, id) => {
    let confirmed = confirm("Are you sure you wanna delete this payment ?");
    if (!confirmed) return;
    e.preventDefault();
    fetch(PREPAIDSERVICES_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (prePaidServives) {
        setPrePaidServives((prevElement) => {
          return prevElement.filter((prePaidServives) => prePaidServives.id !== id);
        });
      }
    });
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
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
                Pre Paid Payments
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
                  Operator
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Product
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
                {prePaidServives?.map((prePaidServives) => (
                  <PrePaidServicesTable
                  prePaidServives={prePaidServives}
                    key={prePaidServives.id}
                    deletePrePaidServices={deletePrePaidServices}
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