import React from "react";

const Transfer = ({ transfer, deleteTransfer}) => {
  return (
    <tr key={transfer.id}>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {transfer.firstName}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {transfer.lastName}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        {transfer.accountNumber}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {transfer.amount}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {transfer.date}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {transfer.reciverAccountNumber}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {transfer.city}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {transfer.country}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {transfer.postCode}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {transfer.text}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        <a
          onClick={(e, id) => deleteTransfer(e, transfer.id)}
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Transfer;