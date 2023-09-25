import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// components
import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import jwt_decode from "jwt-decode";
import User from "layouts/User.js";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
export default function Settings() {
  const [profile, setProfile] = useState({});
  const [decoded, setDecoded] = useState(null);
  const router = useRouter();
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
  return (
    <>
      <div className="flex flex-wrap justify-center ">
        <CardProfile profile={profile} />
      </div>{" "}
      <CardSettings
        userId={profile.id}
        setResponseUser={(updatedUser) => {
          setProfile(updatedUser);
        }}
      />
    </>
  );
}

Settings.layout = User;
