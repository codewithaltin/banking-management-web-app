import { useEffect } from "react";
import { useRouter } from "next/router";

function TokenCheck() {
  const router = useRouter();
  useEffect(() => {
    // Check if the token exists in local storage
    const localStorageToken = localStorage.getItem("token");

    if (!localStorageToken) {
      // Token not found in local storage, route to the main page
      router.push("/auth/login");
    }
  }, []);

  return null; // This component doesn't render anything
}

export default TokenCheck;
