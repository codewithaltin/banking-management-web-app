import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
// components
import EditBanka from "./EditBanka";
import Swal from "sweetalert2";
import Banka from "./Banka";

export default function BankaTable({ banka, color }) {
  const BANKA_API_BASE_URL = "http://localhost:8080/api/v1/auth/banka";
  const [bankas, setBankas] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bankaId, setBankaId] = useState(null);
  const [responseBanka, setResponseBanka] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BANKA_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const bankas = await response.json();

        setBankas(bankas);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    console.log(bankas);
    fetchData();
  }, [banka, responseBanka]);

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
        deleteBanka(e, id);
        Swal.fire("Deleted!", "Deleted Succesfully!", "success");
      }
    });
    return dialogValue;
  };
  const deleteBanka = (e, id) => {
    e.preventDefault();
    fetch(BANKA_API_BASE_URL + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (bankas) {
        setBankas((prevElement) => {
          return prevElement.filter((banka) => banka.id !== id);
        });
      }
    });
  };
  const editBanka = (e, id) => {
    e.preventDefault();
    setBankaId(id);
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
                  ID
                </th>
                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  Name
                </th>

                <th
                  className={
                    "px-6 align-middle border border-solid py-3 text-s uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                    (color === "light"
                      ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                      : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                  }
                >
                  BirthYear
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
                {bankas.map((banka) => (
                  <Banka
                    banka={banka}
                    key={banka.id}
                    confirmDelete={confirmDelete}
                    editBanka={editBanka}
                  />
                ))}
              </tbody>
            )}
          </table>
        </div>
        <EditBanka
          bankaId={bankaId}
          setResponseBanka={setResponseBanka}
          setIsOpen={true}
        />
      </div>
    </>
  );
}
