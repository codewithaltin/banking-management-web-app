import React from "react";

// components

import IndexNavbar_light from "components/Navbars/IndexNavbar_light.js";
import FooterSmall from "components/Footers/FooterSmall.js";

export default function LightAuth({ children }) {
  return (
    <>
      <IndexNavbar_light transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div className="absolute top-0 w-full h-full bg-blueGray-200 bg-no-repeat bg-full"></div>
          {children}
          style=
          {{
            backgroundImage: "url('/img/register_bg_2.png')",
          }}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
