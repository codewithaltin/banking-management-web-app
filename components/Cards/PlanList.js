import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components
import Plan from "./Plan";

export default function PLanList({ plan }) {
  const PLAN_API_BASE_URL = "http://localhost:8080/api/v1/plan";
  const [plans, setPlans] = useState(null);
  const [loading, setLoading] = useState(true);
  const [plansId, setPlansId] = useState(null);
  const [responsePlan, setResponsePlan] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(PLAN_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const plans = await response.json();
        setPlans(plans);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [plan, responsePlan]);

  const deletePlan = (e, id) => {
    let confirmed = confirm("Are you sure you wanna delete this plan?");
    if (!confirmed) return;
    e.preventDefault();
    fetch([PLAN_API_BASE_URL] + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (plans) {
        setPlans((prevElement) => {
          return prevElement.filter((plan) => plan.id !== id);
        });
      }
    });
  };

  const editPlan = (e, id) => {
    e.preventDefault();
    setPlansId(id);
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
              <h3 className={"font-semibold text-lg "}>Plans</h3>
            </div>
          </div>
        </div>
        <div className=" w-full overflow-x-auto flex justify-center  ">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse ">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle bg-blueGray-100 border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  ID
                </th>
                <th
                  className={
                    "px-6 align-middle  border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Name
                </th>
                <th
                  className={
                    "px-6 align-middle bg-blueGray-100 border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Description
                </th>
                <th
                  className={
                    "px-6 align-middle border  border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Month Quanity
                </th>

                <th
                  colSpan={3}
                  className={
                    " col-span-2 px-6  align-middle border min-w-full bg-blueGray-100 overflow-hidden border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Actions
                </th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {plans?.map((plan) => (
                  <Plan
                    plan={plan}
                    key={plan.id}
                    deletePlan={deletePlan}
                    editPlan={editPlan}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
        <editPlan plansId={plansId} setResponsePlan={setResponsePlan} />
      </div>
    </>
  );
}
