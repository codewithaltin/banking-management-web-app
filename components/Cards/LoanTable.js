import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import EditLoan from "./EditLoan";
import Loan from "./Loan";

export default function LoanTable({ loan, color }) {
    const LOAN_API_BASE_URL = "http://localhost:8080/api/v1/loan";
    const [loans, setLoans] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loanId, setLoanId] = useState(null);
    const [responseLoan, setResponseLoan] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(LOAN_API_BASE_URL, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const loans = await response.json();
          setLoans(loans);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };
      fetchData();
    }, [loan, responseLoan]);

    const deleteLoan = (e, id) => {
        let confirmed = confirm("Are you sure you wanna delete this loan?");
        if (!confirmed) return;
        e.preventDefault();
        fetch(LOAN_API_BASE_URL + "/" + id, {
          method: "DELETE",
        }).then((res) => {
          if (loans) {
            setLoans((prevElement) => {
              return prevElement.filter((loan) => loan.id !== id);
            });
          }
        });
      };

    const editLoan = (e, id) => {
        e.preventDefault();
        setLoanId(id);
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
                  <h3 className={"font-semibold text-lg "}>Loans</h3>
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
                        Full Name
                    </th>
                    <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                        Email
                    </th>
                    <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                        PhoneNumber
                    </th>
                    <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >    Address
                    </th>
                    <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >    Loan Amount
                    </th>
                    <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >      Monthly Income
                    </th>
                    <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >     Purpouse
                    </th>
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
                  </tr>
                </thead>
                {!loading && (
                  <tbody>
                    {loans?.map((loan) => (
                      <Loan
                        loan={loan}
                        key={loan.id}
                        deleteLoan={deleteLoan}
                        editLoan={editLoan}
                      />
                    ))}
                  </tbody>
                )}
              </table>
            </div>
            <EditLoan loanId={loanId} setResponseUser={setResponseLoan} />
          </div>
        </>
      );
    }