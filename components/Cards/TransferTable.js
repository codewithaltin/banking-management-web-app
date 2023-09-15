import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Transfer from "./Transfer";
import Swal from "sweetalert2";

export default function TransferTable({ transfer,color }) {
  const TRANSFER_API_BASE_URL = "http://localhost:8080/api/v1/auth/transfer";
  const [transfers, setTransfers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [transferId, setTransferId] = useState(null);
  const [responseTransfer, setResponseTransfer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(TRANSFER_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const transfers = await response.json();
        setTransfers(transfers);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [transfer, responseTransfer]);
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
        deleteTransfer(e, id);
        Swal.fire("Deleted!", "Deleted Succesfully!", "success");
      }
    });
    return dialogValue;
  };


  const deleteTransfer = (e, id) => {

    e.preventDefault();
    fetch(TRANSFER_API_BASE_URL + "/" + id, {
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
        <div className="rounded-t mb-0 px-4 py-3  border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className={"font-semibold text-lg "}>Transfer List</h3>
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
                {transfers?.map((transfer) => (
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
