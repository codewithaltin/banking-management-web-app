import React from "react";

const User = ({ user }) => {
  return (
    <tr key={user.id}>
      {/*<th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
      Altin Morina
    </th>*/}
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-medium tracking-wide">
        {user.firstName}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-medium tracking-wide">
        {user.lastName}
      </td>
      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-medium tracking-wide">
        {user.emailID}
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
