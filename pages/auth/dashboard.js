import React from "react";
// components
import CardLineChart from "components/Cards/CardLineChart.js";
// layout for page
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
import User from "layouts/User.js";

export default function Dashboard() {
  const router = useRouter();
  const [profile, setProfile] = useState();
  const [decoded, setDecoded] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
  }, []);

  useEffect(() => {
    if (decoded) {
      if (decoded.authorities != "ROLE_USER") {
        Swal.fire({
          title: "Unauthorized page!",
          showConfirmButton: false,
          timer: 1500,
        });
        router.push("/");
      }
      fetchProfile();
    } else console.log("decoding failed.");
  }, [decoded]);

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const res = await fetch(
      "http://localhost:8080/api/v1/auth/userbyemail/" +
        localStorage.getItem("email"),
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
      router.push("/");
    }
  }

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-full mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = User;
