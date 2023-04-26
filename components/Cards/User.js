import React from "react";

const User = () => {
  return (
    <tr>
      {/*<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
      Altin Morina
    </th>*/}
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-medium tracking-wide">
        Altin
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-medium tracking-wide">
        Morina
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-medium tracking-wide">
        am56001@ubt-uni.net
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-medium tracking-wide">
        04958814
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-medium tracking-wide">
        <a className="text-indigo-600 hover:text-indigo-800 cursor-pointer">
          Edit
        </a>
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-medium tracking-wide">
        <a className="text-indigo-600 hover:text-indigo-800 cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default User;
