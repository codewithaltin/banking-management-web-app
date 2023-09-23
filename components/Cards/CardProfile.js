import React from "react";
// components

export default function CardProfile(profile) {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
        <div className="w-full px-4 flex justify-center"></div>
        <div className="m-8">
          <div className="flex justify-between">
            <div>
              <h3 className="text-3xl  font-bold leading-normal text-blueGray-700 mb-2 ">
                {"Welcome, " + " " + profile.profile.firstName + ""}{" "}
              </h3>
            </div>

            <div>
              <h3 className="text-3xl font-bold leading-normal text-blueGray-700 mb-2 ">
                {profile.profile.balance + " EUR"}{" "}
              </h3>
            </div>
          </div>
          <div className="flex  justify-between">
            <div className="mb-2 text-blueGray-600 mt-8  text-lg ">
              <i className="fas fa-credit-card mr-2  leading-normal  text-blueGray-400"></i>
              {profile.profile.accountNumber}
            </div>
            <div className="mb-2 text-blueGray-600  text-lg">
              <i className="fas fa-map-marker-alt mr-2 text-lg mt-8 text-blueGray-400"></i>
              {profile.profile.city}
            </div>
            <div className="mb-2 text-blueGray-600 mt-8  text-lg">
              <i className="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
              {profile.profile.email}
            </div>
            <div className="mb-2 text-blueGray-600  mt-8 text-lg">
              <i className="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
              {profile.profile.phoneNumber}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
