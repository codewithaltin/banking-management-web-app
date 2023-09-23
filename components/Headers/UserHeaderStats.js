import React, { useState, useEffect } from "react";
import CardStats from "components/Cards/CardStats.js";
import jwt_decode from "jwt-decode";

export default function HeaderStats() {
  const [sGCount, setSGCount] = useState(null);
  const [tCount, setTransferCount] = useState(null);
  const [donationCount, setDonationCount] = useState(null);
  const [loanCount, setLoanCount] = useState(null);
  const [decoded, setDecoded] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
    
    // Fetch savingGoal data
    fetch("http://localhost:8080/api/v1/auth/savingGoal/user/" + decodedToken.sub)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }   
        return response.json();
      })
      .then((data) => {
        setSGCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    // Fetch transfer data 
    fetch("http://localhost:8080/api/v1/auth/transfer/user/" + decodedToken.sub)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTransferCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching payment data:", error);
      });

    // Fetch donation data 
    fetch("http://localhost:8080/api/v1/auth/loan/user/"+ decodedToken.sub)
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
        console.error("Error fetching donation data:", error);
      });

    // Fetch loan data 
    fetch("http://localhost:8080/api/v1/auth/donation/user/"+ decodedToken.sub)
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
                  statTitle={sGCount !== null ? sGCount : "Loading..."}
                  statIconName="fas fa-piggy-bank"
                  statIconColor="bg-red-500"
                  statLink="/auth/savinglist"
                />
                
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="My transfers"
                  statTitle={tCount !== null ? tCount : "Loading..."}
                  statIconName="fas fa-comments-dollar"
                  statIconColor="bg-orange-500"
                  statLink="/auth/savinglist"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="My Loans"
                  statTitle={loanCount !== null ? loanCount : "Loading..."}
                  statIconName="fas fa-landmark"
                  statIconColor="bg-lightBlue-500"
                  statLink="/auth/savinglist"
                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="My Donations"
                  statTitle={donationCount !== null ? donationCount : "Loading..."}
                  statIconName="fas fa-hand-holding-usd"
                  statIconColor="bg-pink-500"
                  statLink="/admin/donationlist"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
