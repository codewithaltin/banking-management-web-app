import React from "react";
// components

export default function CardProfile(profile) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="w-full px-4 flex justify-center">
          <div>
            <img
              alt="..."
              src="/img/blank-profile-picture.webp"
              className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
            />
          </div>
        </div>
        <div className="px-6">
          <button className="mb-2 bg-blue-500 hover:bg-blue-700 text-blueGray-500 font-bold py-2 px-4 rounded mt-4 top-0 "></button>
        </div>
        <div className="text-center mt-12 ">
          <h3 className="text-2xl font-bold leading-normal text-blueGray-700 mb-2">
            {profile.profile.firstName + " " + profile.profile.lastName}
            <div className="mb-2 text-blueGray-600 m-8  text-lg">
              <i className="fas fa-euro-sign mr-2  text-blueGray-400"></i>
              {profile.profile.balance + " EUR"}
            </div>
          </h3>
          <div className="flex m-8 justify-between">
            <div className="mb-2 text-blueGray-600 m-8  text-lg ">
              <i className="fas fa-credit-card mr-2  leading-normal  text-blueGray-400"></i>
              {profile.profile.accountNumber}
            </div>
            <div className="mb-2 text-blueGray-600 m-8  text-lg">
              <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
              {profile.profile.city}
            </div>
            <div className="mb-2 text-blueGray-600 m-8  text-lg">
              <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
              {profile.profile.email}
            </div>
            <div className="mb-2 text-blueGray-600  m-8 text-lg">
              <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
              {profile.profile.phoneNumber}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
