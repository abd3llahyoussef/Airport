"use client";
import Navigation from "./navbar";
import Inputs from "../components/searchInputs";
import Contact from "@/components/Contact";
import Footer from "./footer/page";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main>
      <div>
        <Navigation />
        <div className="flex text-5xl text-white bg-[url('../../public/banner.jpg')] bg-cover h-96 pt-36 ">
          <div className="w-max indent-3">
            It is The Time To,
            <br />
            <div className="overflow-hidden text-5xl text-white font-bold z-10">
              <TypeAnimation
                sequence={[
                  "Experience Our Airline",
                  1000,
                  "Enjoy Our Services",
                  1000,
                ]}
                wrapper="div"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>
        </div>
        <Inputs />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
