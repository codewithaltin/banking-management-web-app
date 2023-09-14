import React from "react";

// components

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";

export default function Auth({ children }) {
  return (
    <>
      <IndexNavbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"></div>
          {children}
          {/* style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}*/}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
