import React from "react";
import navIcon1 from "../../../public/nav-icon4.svg";
import navIcon2 from "../../../public/nav-icon2.svg";
import navIcon3 from "../../../public/nav-icon3.svg";
import Image from "next/image";
import "../../app.css";

export default function Footer() {
  return (
    <div className="bg-blue-500 grid grid-cols-2 h-auto p-2">
      <p className="text-5xl text-white inline-flex mt-4 ml-5">Airport</p>
      <div className="social-icon-1 grid grid-cols-1 ml-28">
        <div>
          <a href="IC">
            <Image src={navIcon1} alt="contact icon" width="25" height="25" />
          </a>
          <a href="IC2">
            <Image src={navIcon2} alt="contact icon" width="25" height="25" />
          </a>
          <a href="IC3">
            <Image src={navIcon3} alt="contact icon" width="25" height="25" />
          </a>
        </div>
        <p className="mt-4 ">All Rights Reserved,2023</p>
      </div>
    </div>
  );
}
