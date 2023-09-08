import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const USER_API_BASE_URL = "localhost:8080/api/v1/auth/user";
export default function LayoutAuthenticated({ user }) {
  const [users, setUsers] = useState(null);
  const [responseUser, setResponseUser] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(USER_API_BASE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        const users = await response.json();
        setUsers(users);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [user, responseUser]);

  function logout() {
    localStorage.removeItem("token");
    router.push("/");
  }
  return (
    <div>
      <div>
        <User user={user} />

        <button onClick={logout}>Log out</button>
      </div>
    </div>
  );
}
