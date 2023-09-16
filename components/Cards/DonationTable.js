import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import EditDonation from "./EditDonation";
import Donation from "./Donation";

export default function DonationTable({ donation, color }) {
    const DONATION_API_BASE_URL = "http://localhost:8080/api/v1/auth/donation";
    const [donations, setDonations] = useState(null);
    const [loading, setLoading] = useState(true);
    const [donationId, setDonationId] = useState(null);
    const [responseDonation, setResponseDonation] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(DONATION_API_BASE_URL, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const donations = await response.json();
          setDonations(donations);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };
      fetchData();
    }, [donation, responseDonation]);

    const deleteDonation = (e, id) => {
        let confirmed = confirm("Are you sure you wanna delete this donation?");
        if (!confirmed) return;
        e.preventDefault();
        fetch(DONATION_API_BASE_URL + "/" + id, {
            method: "DELETE",
          }).then((res) => {
            if (donations) {
              setDonations((prevElement) => {
                return prevElement.filter((donation) => donation.id !== id);
              });
            }
        });
      };

    const editDonation = (e, id) => {
        e.preventDefault();
        setDonationId(id);
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
                  <h3 className={"font-semibold text-lg "}>Donations</h3>
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
                        Phone
                    </th>
                    <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >     Address
                    </th>
                    <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >  Amount
                    </th>
                    <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >     Card Information
                    </th>
                    <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >     Comment
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
                    {donations?.map((donation) => (
                      <Donation
                        donation={donation}
                        key={donation.id}
                        deleteDonation={deleteDonation}
                        editDonation={editDonation}
                      />
                    ))}
                  </tbody>
                )}
              </table>
            </div>
            <EditDonation donationId={donationId} setResponseDonation={setResponseDonation} />
          </div>
        </>
      );
    }