import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Payments from "./InstitutionPayments";
import InstitutionPayments from "./InstitutionPayments";
import TableDropdown from "components/Dropdowns/TableDropdown.js";
import CardTable from "./CardTable";


export default function InstitutionPaymentsTable({ institutionPayment, color }) {

    const INSTITUTIONPAYMENTS_API_BASE_URL = "http://localhost:8080/api/v1/auth/institutionPayments";

    const [institutionPayments, setInstitutionPayments] = useState(null);
    const [loading, setLoading] = useState(true);
    const [institutionPaymentsId, setInstitutionPaymentsId] = useState(null);
    const [responseInstitutionPayments, setResponseInstitutionPayments] = useState(null);
    const [isDialogOpen, setDialogOpen] = useState(false);

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
            const response = await fetch(INSTITUTIONPAYMENTS_API_BASE_URL, {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            });
            const institutionPayments = await response.json();
            setInstitutionPayments(institutionPayments);
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData();
      }, [institutionPayment, responseInstitutionPayments]);

      const deleteInstitutionPayment = (e, id) => {
        let confirmed = confirm("Are you sure you wanna delete this payment ?");
        if (!confirmed) return;
        e.preventDefault();
        fetch(INSTITUTIONPAYMENTS_API_BASE_URL + "/" + id, {
          method: "DELETE",
        }).then((res) => {
          if (institutionPayments) {
            setInstitutionPayments((prevElement) => {
              return prevElement.filter((institutionPayment) => institutionPayment.id !== id);
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
                  <h3
                    className={
                      "font-semibold text-lg " +
                      (color === "light" ? "text-blueGray-700" : "text-white")
                    }>
                    Institution Payments
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
                    {institutionPayments?.map((institutionPayment) => (
                      <InstitutionPayments
                      institutionPayment={institutionPayment}
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