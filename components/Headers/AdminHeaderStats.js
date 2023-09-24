import React, { useState, useEffect } from "react";
import CardStats from "components/Cards/CardStats.js";

export default function AdminHeaderStats() {
  const [userCount, setUserCount] = useState(null);
  const [employeeCount, setEmployeeCount] = useState(null);
  const [donationCount, setDonationCount] = useState(null);
  const [loanCount, setLoanCount] = useState(null);
  const [transferCount, setTransferCount] = useState(null);
  const [ssCount, setSSCount] = useState(null);
  const [insPaymentC, setInsPaymentCount] = useState(null);
  const [prePaymentC, setPrePaymentCount] = useState(null);
  const [mobPaymentC, setMobPaymentCount] = useState(null);

  useEffect(() => {
    // Fetch user data
    fetch("http://localhost:8080/api/v1/auth/user")
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

    // Fetch employee data
    fetch("http://localhost:8080/api/v1/auth/employee")
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

    // Fetch donation data
    fetch("http://localhost:8080/api/v1/auth/donation")
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

    // Fetch loan data
    fetch("http://localhost:8080/api/v1/auth/loan")
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

    // Fetch transfer data
    fetch("http://localhost:8080/api/v1/auth/transfer")
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
        console.error("Error fetching donation data:", error);
      });

    // Fetch savingGoal data
    fetch("http://localhost:8080/api/v1/auth/savingGoal")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setSSCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching loan data:", error);
      });
    // Fetch institutionP data
    fetch("http://localhost:8080/api/v1/auth/institutionPayments")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setInsPaymentCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching institution payment data:", error);
      });

    // Fetch mobilep data
    fetch("http://localhost:8080/api/v1/auth/mobilePayment")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMobPaymentCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching mobile payment data:", error);
      });

    // Fetch prePaidP data
    fetch("http://localhost:8080/api/v1/auth/prePaidPayment")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPrePaymentCount(data.length);
      })
      .catch((error) => {
        console.error("Error fetching donation data:", error);
      });
  }, []);

  return (
    <>
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
              <CardStats
                statSubtitle="Active Users"
                statTitle={userCount !== null ? userCount : "Loading..."}
                statIconName="fas fa-users"
                statIconColor="bg-red-500"
                statLink="/admin/userlist"
              />
            </div>

            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
              <CardStats
                statSubtitle="Employees"
                statTitle={
                  employeeCount !== null ? employeeCount : "Loading..."
                }
                statIconName="fas fa-user-tie"
                statIconColor="bg-orange-500"
                statLink="/admin/employeelist"
              />
            </div>

            <div className="w-full lg:w-4/12 xl:w-4/12 px-4">
              <CardStats
                statSubtitle="Loans Taken"
                statTitle={loanCount !== null ? loanCount : "Loading..."}
                statIconName="fas fa-landmark"
                statIconColor="bg-lightBlue-500"
                statLink="/admin/loanlist"
              />
            </div>

            <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-5">
              <CardStats
                statSubtitle="Donations Made"
                statTitle={
                  donationCount !== null ? donationCount : "Loading..."
                }
                statIconName="fas fa-donate"
                statIconColor="bg-purple-500"
                statLink="/admin/donationlist"
              />
            </div>

            <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-5">
              <CardStats
                statSubtitle="Overall Transfers"
                statTitle={
                  transferCount !== null ? transferCount : "Loading..."
                }
                statIconName="fas fa-comments-dollar"
                statIconColor="bg-yellow-500"
                statLink="/admin/transferlist"
              />
            </div>

            <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-5">
              <CardStats
                statSubtitle="Entire Saving Goals "
                statTitle={ssCount !== null ? ssCount : "Loading..."}
                statIconName="fas fa-piggy-bank"
                statIconColor="bg-emerald-400"
                statLink="/auth/savinglist"
              />
            </div>

            <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-5">
              <CardStats
                statSubtitle="Mobile Transactions Accepted"
                statTitle={mobPaymentC !== null ? mobPaymentC : "Loading..."}
                statIconName="fas fa-mobile"
                statIconColor="bg-teal-500"
                statLink="/auth/MobilePaymentList"
              />
            </div>

            <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-5">
              <CardStats
                statSubtitle="Total of Prepaid Services"
                statTitle={prePaymentC !== null ? prePaymentC : "Loading..."}
                statIconName="fas fa-coins"
                statIconColor="bg-red-500"
                statLink="/auth/PrePaidServicesList"
              />
            </div>

            <div className="w-full lg:w-4/12 xl:w-4/12 px-4 mt-5">
              <CardStats
                statSubtitle="Number of Institution Payments"
                statTitle={insPaymentC !== null ? insPaymentC : "Loading..."}
                statIconName="fas fa-building"
                statIconColor="bg-indigo-500"
                statLink="/auth/Institutionpaymentslist"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
