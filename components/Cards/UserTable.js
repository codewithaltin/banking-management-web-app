import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

// components

import User from "components/Cards/User.js";

export default function UserTable() {
  const USER_API_BASE_URL = "http://localhost:8080/api/v1/users";
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(USER_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
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
              <h3 className={"font-semibold text-lg "}>Card Tables</h3>
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  First Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Last name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Email
                </th>
                <th className="px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ">
                  phone number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                  }
                >
                  Actions
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-right "
                  }
                ></th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {users?.map((user) => (
                  <User user={user} key={user.id} />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
}
