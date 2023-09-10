import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LayoutAuthenticated from "../components/layout-authenticated.js";

export default function User() {
  const [content, setContent] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchContent();
  }, []);

  async function fetchContent() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/user/1`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    if (res.ok) {
      const text = await res.text();
      setContent(text);
    }
  }

  return (
    <LayoutAuthenticated>
      <div>
        <h1>User</h1>
        {content}
      </div>
    </LayoutAuthenticated>
  );
}
