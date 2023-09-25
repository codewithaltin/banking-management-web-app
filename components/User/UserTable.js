import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
// components
import EditUser from "./EditUser";
import User from "./User";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
export default function UserTable({ user, color }) {
  const USER_API_BASE_URL = "http://localhost:8080/api/v1/auth/user";
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);
  const [responseUser, setResponseUser] = useState(null);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState([]);
  const [cities, setCities] = useState([]);
  const [decoded, setDecoded] = useState(null);
  const [isAuditor, setIsAuditor] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
  }, []);

  useEffect(() => {
    if (decoded) {
      if (decoded.authorities === "ROLE_USER") {
        router.push("/");
      } else if (decoded.authorities === "ROLE_AUDITOR") {
        setIsAuditor(checkAuditor());
      }
    }
  }, [decoded]);
  function checkAuditor() {
    return decoded.authorities === "ROLE_AUDITOR";
  }
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
  }, [user, responseUser]);
  let dialogValue = false;

  const confirmDelete = (e, id) => {
    if (dialogValue) return true;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteUser(e, id);
        Swal.fire("Deleted!", "Deleted Succesfully!", "success");
      }
    });
    return dialogValue;
  };
  const deleteUser = (e, id) => {
    e.preventDefault();
    fetch(USER_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (users) {
        setUsers((prevElement) => {
          return prevElement.filter((user) => user.id !== id);
        });
      }
    });
  };
  const editUser = (e, id) => {
    e.preventDefault();
    setUserId(id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/auth/cities",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const arrOfCities = await response.json();
        setCities(arrOfCities); // Update the cities array using the useState hook
      } catch (error) {
        throw new Error("Oops, fetching went wrong!");
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div
        className={
          "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
          (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
        }
      >
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <div className="flex items-center">
                <form>
                  <div class="relative flex">
                    <div class="absolute inset-b-0 left-0 flex items-center pl-3 pointer-events-none">
                      <i className="fa fa-search text-blue-50 mt-3"></i>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      class="block w-full p-2 pl-10 text-sm text-blue-50 border border-gray-300 rounded-lg bg-blueGray-600 mr-4"
                      placeholder="Search user by e-mail..."
                      onChange={(e) => setSearch(e.target.value)}
                      required
                    ></input>
                    <select
                      className="eblock w-full p-2  text-sm text-blue-50 border border-gray-300 rounded-lg bg-blueGray-600 mr-4"
                      value={filter}
                      onChange={(e) => setFilter(e.target.value)}
                      name="city"
                    >
                      <option>All Cities</option>
                      {cities.map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>{" "}
                  </div>
                </form>
                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                  <a
                    className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    href="adduser"
                  >
                    Add User
                  </a>
                </div>{" "}
              </div>
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
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  First Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Last Name
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Email
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Phone Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Account Number
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  City
                </th>

                {!isAuditor && (
                  <th
                    colSpan={2}
                    className={
                      "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                      (color === "light"
                        ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                        : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                    }
                  >
                    Actions
                  </th>
                )}
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {users
                  ?.filter((item) => {
                    return search.toLowerCase() === ""
                      ? item
                      : item.email.toLowerCase().includes(search);
                  })
                  .filter((item) => {
                    return filter === "All Cities"
                      ? item
                      : item.email.toLowerCase().includes(search);
                  })
                  .filter((item) => {
                    return filter === "All Cities"
                      ? item
                      : item.city && item.city.includes(filter);
                  })
                  .filter((user) => user.role === "USER") // Filter by role "USER"
                  .map((user) => (
                    <User
                      user={user}
                      key={user.id}
                      confirmDelete={confirmDelete}
                      editUser={editUser}
                    />
                  ))}
              </tbody>
            )}
          </table>
        </div>
        <EditUser
          userId={userId}
          setResponseUser={setResponseUser}
          setIsOpen={true}
        />
      </div>
    </>
  );
}
