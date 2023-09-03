import React, { useEffect, useState } from "react";


export default function PaymentsNavbar() {
    return (
      <>
<div className="flex flex-wrap py-2">
  <div className="w-full px-4">
    <nav className="relative flex flex-wrap items-center justify-center px-2 py-3 navbar-expand-lg bg-indigo-500 rounded">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-center">
        <div className="flex lg:flex-grow items-center" id="example-navbar-info">
          <ul className="flex flex-col lg:flex-row list-none">
            
            <li className="nav-item">
              <a
              href="\auth\Institutionpaymentslist"
              target="blank"
              className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75">
                Institution Payments
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" 
              href="\auth\PrePaidServicesList">
                Pre Paid Servives
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" 
              href="\auth\CollectorPaymentList">
                Collector Payments
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center justify-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" 
              href="\auth\MobilePaymentList">
                Mobile Payments
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>

</>
  );
}