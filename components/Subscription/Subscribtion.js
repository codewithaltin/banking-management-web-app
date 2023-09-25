import React from "react";

const Subscribtion = ({
  subscribtion,
  deleteSubscribtion,
  editSubscribtion,
}) => {
  return (
    <tr key={subscribtion.id}>
      <td className="border-t-0 px-6 bg-blueGray-100 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 font-semibold tracking-wide">
        {subscribtion.name}
      </td>

      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        {subscribtion.price}
      </td>
      <td className="border-t-0 px-6 bg-blueGray-100 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        {subscribtion.price}
      </td>
      <td className="border-t-0  px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4  tracking-wide">
        <a
          onClick={(e, id) => deleteSubscribtion(e, subscribtion.id)}
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
        >
          Delete
        </a>
      </td>
      <td className="border-t-0   px-6 align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 overflow-hidden max-w-100-px tracking-wide">
        <a
          onClick={(e, id) => editSubscribtion(e, subscribtion.id)}
          className="text-indigo-600 hover:text-indigo-800 cursor-pointer"
        >
          Update
        </a>
      </td>
      <td className="border-t-0 px-6   align-middle border-l-0 border-r-0 text-s whitespace-nowrap p-4 overflow-hidden max-w-100-px tracking-wide">
        <a className="text-indigo-600 hover:text-indigo-800 cursor-pointer">
          Select
        </a>
      </td>
    </tr>
  );
};

export default Subscribtion;
