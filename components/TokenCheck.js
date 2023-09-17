import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "./loading";
function TokenCheck({ children }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the token exists in local storage
    const localStorageToken = localStorage.getItem("token");

    if (!localStorageToken) {
      // Token not found in local storage, route to the main page
      router.push("/auth/login");
    } else {
      setIsLoading(false); // Set loading to false once the check is complete
    }
  }, []);

  if (isLoading) {
    // You can display a loading indicator here
    return <Loading />;
  }

  return children; // This component doesn't render anything
}

export default TokenCheck;
