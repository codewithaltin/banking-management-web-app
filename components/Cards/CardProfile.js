import React from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import EditUser from "./EditUser";
// components
import jwt_decode from "jwt-decode";

export default function CardProfile() {
  const [profile, setProfile] = useState({});
  const [decoded, setDecoded] = useState(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
  }, []);

  useEffect(() => {
    if (decoded) {
      fetchProfile();
    } else console.log("decoding failed.");
  }, [decoded]);

  async function fetchProfile() {
    try {
      const res = await fetch(
        "http://localhost:8080/api/v1/auth/userbyemail/" + decoded.sub,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.ok) {
        const json = await res.json();
        setProfile(json);
      } else {
        console.error("Failed to fetch profile data");
      }
    } catch (error) {
      console.error("An error occurred while fetching profile:", error);
    }
  }

  const handleEditProfileClick = () => {
    setIsEditDialogOpen(true);
  };

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src="/img/blank-profile-picture.webp"
                  className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                />
              </div>
            </div>
            <div className="w-full px-4 text-center mt-20">
              {/* <div className="flex justify-center py-4 lg:pt-4 pt-8">
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    22
                  </span>
                  <span className="text-sm text-blueGray-400">Friends</span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    10
                  </span>
                  <span className="text-sm text-blueGray-400">Photos</span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                    89
                  </span>
                  <span className="text-sm text-blueGray-400">Comments</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
              {profile.firstName + " " + profile.lastName}
            </h3>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-credit-card mr-2 text-lg text-blueGray-400"></i>
              {profile.accountNumber}
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-dollar-sign mr-2 text-lg text-blueGray-400"></i>
              {profile.balance}
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
              {profile.city}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
              {profile.email}
            </div>
            <div className="mb-2 text-blueGray-600">
              <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
              {profile.phoneNumber}
            </div>
          </div>
          <button
            className="mb-2 bg-blue-500 hover:bg-blue-700 text-blueGray-500 font-bold py-2 px-4 rounded mt-4"
            onClick={handleEditProfileClick}
          >
            Edit Profile
          </button>
          {isEditDialogOpen && (
        <EditUser
          userId={profile.id}
          setResponseUser={(updatedUser) => {
            setProfile(updatedUser);
          }}
          closeModal={() => setIsEditDialogOpen(false)}
        />
      )}
        </div>
      </div>  
    </>
  );
}
