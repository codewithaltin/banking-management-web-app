import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Savings from "./Savings";
import AddGoal from "./AddGoal";
import TableDropdown from "components/Dropdowns/TableDropdown.js";
import CardTable from "./CardTable";
import EditSavingGoal from "./EditSavingGoal";
import Swal from "sweetalert2";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

export default function SavingTable({ savingGoal, color }) {
  let SAVINGGOAL_API_BASE_URL;
  const [savingGoals, setSavingGoals] = useState(null);
  const [loading, setLoading] = useState(true);
  const [savingGoalId, setSavingGoalId] = useState(null);
  const [responseSavingGoal, setResponseSavingGoal] = useState(null);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [decoded, setDecoded] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
  }, []);

  useEffect(() => {
    if (decoded) {
      chooseEndPoint();
      fetchData();
    }
  }, [decoded]);

  function chooseEndPoint() {
    let res = decoded.authorities === "ROLE_USER";
    if (res) {
      SAVINGGOAL_API_BASE_URL =
        "http://localhost:8080/api/v1/auth/savingGoal/user/" + decoded.sub;
    } else {
      SAVINGGOAL_API_BASE_URL = "http://localhost:8080/api/v1/auth/savingGoal";
    }
  }
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(SAVINGGOAL_API_BASE_URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const savingGoalsData = await response.json();
        setSavingGoals(savingGoalsData);
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
        deleteSavingGoal(e, id);
        Swal.fire("Deleted!", "Deleted Succesfully!", "success");
      }
    });
  };

  const deleteSavingGoal = (e, id) => {
    e.preventDefault();
    fetch(SAVINGGOAL_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (savingGoals) {
        setSavingGoals((prevElement) => {
          return prevElement.filter((savingGoal) => savingGoal.id !== id);
        });
      }
    });
  };

  const editSavingGoal = (e, id) => {
    e.preventDefault();
    setSavingGoalId(id);
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
                }
              >
                Saving Goals
              </h3>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <a
                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  href="/SavingGoal"
                >
                  Add Goal
                </a>

                {isDialogOpen && <AddGoal isDialogOpen={handleOpenDialog} />}
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
                  Saving Reason
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
                  Date
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Goal Name
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
                {savingGoals?.map((savingGoal) => (
                  <Savings
                    savingGoal={savingGoal}
                    key={savingGoal.id}
                    ConfirmDialogAlert={ConfirmDialogAlert}
                    deleteSavingGoal={deleteSavingGoal}
                    editSavingGoal={editSavingGoal}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
        <EditSavingGoal
          savingGoalId={savingGoalId}
          setResponseSavingGoal={setResponseSavingGoal}
        />
      </div>
    </>
  );
}
