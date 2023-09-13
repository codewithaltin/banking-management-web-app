import React from "react";

const InstitutionPayments = ({ institutionPayment, deleteInstitutionPayment}) => {
  return (
    <tr key={institutionPayment.id}>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        {institutionPayment.institution}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {institutionPayment.company}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {institutionPayment.referenceNumber}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {institutionPayment.amount}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        <a
          onClick={(e, id) => deleteInstitutionPayment(e, institutionPayment.id)}
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
    
  );
};

export default InstitutionPayments;