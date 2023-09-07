import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import EditDonation from "./EditDonation";
import Donation from "./Donation";

export default function DonationTable({ donation }) {
    const DONATION_API_BASE_URL = "http://localhost:8080/api/v1/donation";
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
          <div className=" w-28 h-28 mt-16">.</div>
          <div
            className={
              "relative flex flex-col min-w-0 break-words w-full mb-6 mt-16 shadow-lg rounded "
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
                        "px-6 align-middle bg-blueGray-200 border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                        Full Name
                    </th>
                    <th
                      className={
                        "px-6 align-middle border bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                        Email
                    </th>
                    <th
                      className={
                        "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                        Phone
                    </th>
                    <th className="px-6 align-middle border  bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                        Address
                    </th>
                    <th className="px-6 align-middle border  bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                        Amount
                    </th>
                    <th className="px-6 align-middle border  bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                        Card Information
                    </th>
                    <th className="px-6 align-middle border  bg-blueGray-200 border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                        Comment
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