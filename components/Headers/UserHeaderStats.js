import React, { useState, useEffect } from "react";
import CardStats from "components/Cards/CardStats.js";
import jwt_decode from "jwt-decode";

export default function HeaderStats() {
  const [userCount, setUserCount] = useState(null);
  const [employeeCount, setEmployeeCount] = useState(null);
  const [donationCount, setDonationCount] = useState(null);
  const [loanCount, setLoanCount] = useState(null);
  const [decoded, setDecoded] = useState(null);

  

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
    // Fetch user data
    fetch("http://localhost:8080/api/v1/auth/savingGoal/user/" + decodedToken.sub)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }   
        return response.json();
      })
      .then((data) => {
        setUserCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    // Fetch employee data (replace with your actual endpoint)
    fetch("http://localhost:8080/api/v1/auth/transfer/user/" + decodedToken.sub)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setEmployeeCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching payment data:", error);
      });

    // Fetch donation data (replace with your actual endpoint)
    fetch("http://localhost:8080/api/v1/auth/loan/user/"+ decodedToken.sub)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDonationCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching donation data:", error);
      });

    // Fetch loan data (replace with your actual endpoint)
    fetch("http://localhost:8080/api/v1/auth/donation/user/"+ decodedToken.sub)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setLoanCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching loan data:", error);
      });
  }, []);


  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="My Saving Goals"
                  statTitle={userCount !== null ? userCount : "Loading..."}               
                  statArrow="up"
                  statPercent="12.45"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="far fa-chart-bar"
                  statIconColor="bg-red-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="My transfers"
                  statTitle={employeeCount !== null ? employeeCount : "Loading..."} 
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-chart-pie"
                  statIconColor="bg-orange-500"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="My Loans"
                  statTitle={loanCount !== null ? loanCount : "Loading..."} 
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  statIconName="fas fa-percent"
                  statIconColor="bg-lightBlue-500"
                />  
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="My Donations"
                  statTitle={donationCount !== null ? donationCount : "Loading..."} 
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since last Month"
                  statIconName="fas fa-users"
                  statIconColor="bg-pink-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}