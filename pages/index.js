import React from "react";
import App from "./App";
import { useRouter } from "next/router";

export default function Index() {
  const router = useRouter();
  return (
    <>
      <App />
    </>
  );
}
