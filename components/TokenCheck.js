import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "./Loading";
import jwt_decode from "jwt-decode";

function TokenCheck({ children }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [tokenExists, setTokenExists] = useState(false);

  useEffect(() => {
    // Check if the token exists in local storage
    const localStorageToken = localStorage.getItem("token");

    if (!localStorageToken) {
      // Token not found in local storage, route to the main page
      router.push("/auth/login");
    } else {
      // Token exists, decode it
      const decodedToken = jwt_decode(localStorageToken);
      setTokenExists(true);
    }

    setIsLoading(false); // Set loading to false once the check is complete
  }, [router]);

  if (isLoading) {
    // You can display a loading indicator here
    return <Loading />;
  }

  // Only render the children if the token exists
  if (tokenExists) {
    return children;
  } else {
    return null; // Or you can return an unauthorized message/component
  }
}

export default TokenCheck;
