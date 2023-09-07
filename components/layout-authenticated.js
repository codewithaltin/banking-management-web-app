import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function LayoutAuthenticated(props) {
  const [profile, setProfile] = useState();
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    const res = await fetch("localhost:8080/api/v1/auth/user", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    if (res.ok) {
      const json = await res.json();
      setProfile(json);
    } else {
      router.push("/login");
    }
  }

  function logout() {
    localStorage.removeItem("token");
    router.push("/");
  }

  return (
    <div>
      <div>
        <p>Signed in as: {profile && profile.username}</p>
        <p>
          <button onClick={logout}>Log out</button>
        </p>
      </div>
      {props.children}
    </div>
  );
}
