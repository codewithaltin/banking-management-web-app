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
      router.push("/auth/login");
    } else {
      // Token exists, decode it
      const decodedToken = jwt_decode(localStorageToken);
      setTokenExists(true);
    }

    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <Loading />;
  }
  if (tokenExists) {
    return children;
  } else {
    return null;
  }
}

export default TokenCheck;
