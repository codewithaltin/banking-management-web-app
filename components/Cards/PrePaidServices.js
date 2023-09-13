import React from "react";

const PrePaidServices = ({ prePaidService, deletePrePaidServices}) => {
  return (
    <tr key={prePaidService.id}>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        {prePaidService.operator}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {prePaidService.product}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {prePaidService.amount}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        <a
          onClick={(e, id) => deletePrePaidServices(e, prePaidService.id)}
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
    
  );
};

export default PrePaidServices;