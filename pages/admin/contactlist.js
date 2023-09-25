import React from "react";
import ContactTable from "components/Contact/ContactTable.js";
import Auth from "layouts/Auth";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function contactlist() {
const router = useRouter();
const [decoded, setDecoded] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const decodedToken = jwt_decode(token);
    setDecoded(decodedToken);
  }, []);

  useEffect(() => {
    if (decoded) {
      if (decoded.authorities === "ROLE_USER") {
        window.alert("Unathorized access, Riderecting you to your dashboard! ");
        router.push("/auth/dashboard");
      }
    }
  }, [decoded]);

  return (
    <>
      <ContactTable />
    </>
  );
};

contactlist.layout = Auth;
//export default contactlist; 
