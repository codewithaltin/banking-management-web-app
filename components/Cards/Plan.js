import React from "react";

const Plan = ({ plan, deletePlan, editPlan }) => {
  return (
    <tr key={plan.id}>
      <td className="border-t-0 bg-blueGray-100  px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {plan.id}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {plan.planName}
      </td>

      <td className="border-t-0 bg-blueGray-100 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        <span> {plan.planDesc}</span>
      </td>

      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        {plan.monthQuanity}
      </td>

      <td className="border-t-0 bg-blueGray-100 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        <a
          onClick={(e, id) => deletePlan(e, plan.id)}
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
        >
          Delete
        </a>
      </td>
      <td className="border-t-0  bg-blueGray-100 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 overflow-hidden max-w-100-px tracking-wide">
        <a
          onClick={(e, id) => editPlan(e, plan.id)}
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
        >
          Update
        </a>
      </td>
      <td className="border-t-0 px-6  bg-blueGray-100 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 overflow-hidden max-w-100-px tracking-wide">
        <a className="text-indigo-600 hover:text-indigo-800 cursor-pointer">
          Select
        </a>
      </td>
    </tr>
  );
};

export default Plan;
