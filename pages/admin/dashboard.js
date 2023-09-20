import React from "react";
import CardLineChart from "components/Cards/CardLineChart.js";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Admin from "layouts/Admin.js";

export default function Dashboard() {
  const router = useRouter();
  const [profile, setProfile] = useState();

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
        <div className="w-full xl:w-full mb-12 xl:mb-0 px-4"></div>
      </div>
    </>
  );
}

Dashboard.layout = Admin;
