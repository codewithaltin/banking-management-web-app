import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Payments from "./InstitutionPayments";
import AddGoal from "./AddGoal";
import TableDropdown from "components/Dropdowns/TableDropdown.js";
import CardTable from "./CardTable";
import CollectorPayments from "./CollectorPayments";
import Swal from "sweetalert2";

export default function CollectorPaymentTable({ collectorPayment, color }) {

  const COLLECTORPAYMENT_API_BASE_URL = "http://localhost:8080/api/v1/auth/collectorPayment";

  const [collectorPayments, setCollectorPayment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [collectorPaymentId, setCollectorPaymentId] = useState(null);
  const [responseCollectorPayment, setResponseCollectorPayment] = useState(null);
 
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
        const response = await fetch(COLLECTORPAYMENT_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const collectorPayments = await response.json();
        setCollectorPayment(collectorPayments);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [collectorPayment, responseCollectorPayment]);

  let dialogValue = false;

  const ConfirmDialogAlert = (e, id) => {
    if (dialogValue) return true;
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
        deleteCollectorPayment(e, id);
        Swal.fire("Deleted!", "Deleted Succesfully!", "success");
      }
    });
    return dialogValue;
  };


  const deleteCollectorPayment = (e, id) => {
    e.preventDefault();
    fetch(COLLECTORPAYMENT_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (collectorPayment) {
        setCollectorPayment((prevElement) => {
          return prevElement.filter((collectorPayment) => collectorPayment.id !== id);
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
                Collector Payments
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
                  Collector
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Serial Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  UNIREF
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
                {collectorPayments?.map((collectorPayment) => (
                  <CollectorPayments
                  ConfirmDialogAlert={ConfirmDialogAlert}  
                  collectorPayment={collectorPayment}
                    key={collectorPayment.id}
                    deleteCollectorPayment={deleteCollectorPayment}
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
  















