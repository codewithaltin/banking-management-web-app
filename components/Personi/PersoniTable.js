import React, { useEffect, useState } from "react";
// components
import EditPersoni from "./EditPersoni";

import Swal from "sweetalert2";
import Personi from "./Personi";
export default function PersoniTable({ personi, color }) {
  const PERSONI_API_BASE_URL = "http://localhost:8080/api/v1/auth/personi";
  const [personis, setPersonis] = useState(null);
  const [loading, setLoading] = useState(true);
  const [personiId, setPersoniId] = useState(null);
  const [responsePersoni, setResponsePersoni] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(PERSONI_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const personis = await response.json();
        setPersonis(personis);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [personi, responsePersoni]);
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
        deletePersoni(e, id);
        Swal.fire("Deleted!", "Deleted Succesfully!", "success");
      }
    });
    return dialogValue;
  };
  const deletePersoni = (e, id) => {
    e.preventDefault();
    fetch(PERSONI_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (personis) {
        setPersonis((prevElement) => {
          return prevElement.filter((personi) => personi.id !== id);
        });
      }
    });
  };
  const editPersoni = (e, id) => {
    e.preventDefault();
    setPersoniId(id);
  };

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
                  <div class="relative flex"></div>
                </form>
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
                  Title
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Release Year
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Director
                </th>
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
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {personis.map((personi) => (
                  <Personi
                    personi={personi}
                    key={personi.id}
                    confirmDelete={confirmDelete}
                    editPersoni={editPersoni}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
        <EditPersoni
          personiId={personiId}
          setResponsePersoni={setResponsePersoni}
          setIsOpen={true}
        />
      </div>
    </>
  );
}
