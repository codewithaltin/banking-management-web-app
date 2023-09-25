import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import jwt_decode from "jwt-decode";
import AdminHeaderStats from "components/Headers/AdminHeaderStats";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
export default function Admin({ children }) {
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
        Swal.fire({
          title: "Unauthorized page!",
          showConfirmButton: false,
          timer: 2000,
        });
        router.push("/");
      }
    }
  }, [decoded]);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <AdminHeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">{children}</div>
      </div>
    </>
  );
}
