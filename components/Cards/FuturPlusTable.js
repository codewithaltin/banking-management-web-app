import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import FuturPlus from "./FuturPlus";

export default function FuturPlusTable({ futur_plus }) {
    const FUTURPLUS_API_BASE_URL = "http://localhost:8080/api/v1/futur_plus";
    const [futur_plus1, setFuturPlus1] = useState(null);
    const [loading, setLoading] = useState(true);
    const [futurPlusId, setFuturPlusId] = useState(null);
    const [responseFuturPlus, setResponseFuturPlus] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(FUTURPLUS_API_BASE_URL, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const futur_plus1 = await response.json();
          setFuturPlus1(futur_plus1);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      };
      fetchData();
    }, [futur_plus, responseFuturPlus]);

    const deleteFuturPlus = (e, id) => {
        let confirmed = confirm("Are you sure you wanna delete this futur plus form?");
        if (!confirmed) return;
        e.preventDefault();
        fetch(FUTURPLUS_API_BASE_URL + "/" + id, {
          method: "DELETE",
        }).then((res) => {
          if (futur_plus1) {
            setFuturPlus1((prevElement) => {
              return prevElement.filter((futur_plus) => transfer.id !== id);
            });
          }
        });
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
                  <h3 className={"font-semibold text-lg "}>Futur Plus List</h3>
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
                        "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      Full Name
                    </th>
    
                    <th
                      className={
                        "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      Email
                    </th>

                    <th
                      className={
                        "px-6 align-middle border border-solid bg-blueGray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                      }
                    >
                      Card Info
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
                    {futur_plus1?.map((futur_plus) => (
                      <FuturPlus
                      futur_plus={futur_plus}
                        key={futur_plus.id}
                        deleteFuturPlus={deleteFuturPlus}
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