import React from "react";
import App from "./App";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  const email = router.query.email;
  return (
    <>
      <App email={email} />
    </>
  );
}
