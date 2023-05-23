import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Transfer from "./Transfer";

export default function TransferTable({ transfer }) {
  const CONTACT_API_BASE_URL = "http://localhost:8080/api/v1/transfer";
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

  const deleteTransfer = (e, id) => {
    let confirmed = confirm("Are you sure you wanna delete this transfer form?");
    if (!confirmed) return;
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
      <div className=" w-28 h-28 mt-16"></div>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 mt-16 shadow-lg rounded "
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
                    "px-6 align-middle bg-blueGray-200 border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  First Name
                </th>
                
                <th
                  className={
                    "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Last Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Account Number
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Amount
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Date
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Account Number
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  City
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Country
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Postal Code
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Description
                </th>

                
                <th
                  colSpan={2}
                  className={
                    " col-span-2 px-6  align-middle border min-w-full bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
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
