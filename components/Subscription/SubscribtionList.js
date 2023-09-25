import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Subscribtion from "./Subscribtion";

export default function SubscribtionList({ subscribtion }) {
  const SUBSCRIBTION_API_BASE_URL = "http://localhost:8080/api/v1/subscribtion";
  const [subscribtions, setSubscribtions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [subscribtionId, setSubscribtionId] = useState(null);
  const [responseSubscribtion, setResponseSubscribtion] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(SUBSCRIBTION_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const subscribtions = await response.json();
        setSubscribtions(subscribtions);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [subscribtion, responseSubscribtion]);

  const deleteSubscribtion = (e, id) => {
    let confirmed = confirm("Are you sure you wanna delete this subscribtion?");
    if (!confirmed) return;
    e.preventDefault();
    fetch([SUBSCRIBTION_API_BASE_URL] + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (subscribtions) {
        setSubscribtions((prevElement) => {
          return prevElement.filter((subscribtion) => subscribtion.id !== id);
        });
      }
    });
  };

  const editSubscribtion = (e, id) => {
    e.preventDefault();
    setSubscribtionId(id);
  };
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 mt-16 shadow-lg rounded "
        }
      >
        <div className="rounded-t mb-0 px-4 py-3  border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className={"font-semibold text-lg "}>Subscribtions</h3>
            </div>
          </div>
        </div>
        <div className=" w-full overflow-x-auto flex justify-center  ">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse table-fixed ">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle bg-blueGray-100 border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Name
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Price
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid bg-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Fee
                </th>
                <th
                  colSpan={3}
                  className={
                    " col-span-2 px-6  align-middle border min-w-full  overflow-hidden border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Actions
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {subscribtions?.map((subscribtion) => (
                  <Subscribtion
                    subscribtion={subscribtion}
                    key={subscribtion.id}
                    deleteSubscribtion={deleteSubscribtion}
                    editSubscribtion={editSubscribtion}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
        <editSubscribtion
          subscribtionId={subscribtionId}
          setResponseSubscribtion={setResponseSubscribtion}
        />
      </div>
    </>
  );
}
