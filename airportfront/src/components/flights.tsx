import React, { ReactNode, MouseEventHandler } from "react";
import Image from "next/image";
import logo from "../../public/airplaneflight.svg";
import logoEg from "../../public/eglogo.png";
import { getFlight } from "@/app/GlobalRedux/features/flightSlice";

type flight = {
  departure_date: ReactNode;
  flight_class: string;
  flight_id: string;
  bags_weight: string;
  departure_time: ReactNode;
  arrival_time: ReactNode;
  fromCity: string;
  toCity: string;
  price: string;
  onClick: () => void;
};

export default function Flights({
  departure_date,
  flight_class,
  flight_id,
  bags_weight,
  departure_time,
  arrival_time,
  fromCity,
  toCity,
  price,
  onClick,
}: flight) {
  return (
    <div className="bg-white px-5 pt-5 h-max">
      <div className="bg-white rounded-3xl border-gray-100 border-2 shadow-2xl">
        <p className="text-2xl bg-gray-100 text-gray-700 rounded-t-3xl">
          <Image
            src={logo}
            alt="airplane logo"
            width="20"
            height="80"
            className="inline-block pl-2"
          />
          <span className="inline-block pl-2">DEPARTURE</span>
          <span className="text-lg inline-block pl-2">{departure_date}</span>
        </p>
        <div className="bg-white grid grid-cols-1">
          <div className="pt-4 h-auto">
            <span className="inline-block bg-gray-100 text-gray-600 rounded-3xl ml-10 px-1">
              <Image
                src={logo}
                alt="logo"
                width="20"
                height="20"
                className="inline-block"
              />
              {flight_class}
            </span>
          </div>
          <div className="grid md:grid-cols-3 px-5 mb-2  sm:grid-cols-2">
            <p className="text-lg text-gray grid grid-cols-2 mr-32">
              <Image
                src={logoEg}
                alt="flightLogo"
                height="70"
                width="200"
                className="mt-2 pl-8"
              />
              <p className="text-lg text-gray-600  grid grid-cols-1">
                <span className="inline-block">EgyptAir</span>
                <span className="inline-block">{flight_id}</span>
                <span className="inline-block">{bags_weight}kg</span>
              </p>
            </p>
            <p className="text-lg text-gray-100 grid grid-cols-1 text-center">
              <span className="text-black">{departure_time}</span>
              <span className="text-gray-600">{fromCity}</span>
            </p>
            <p className="text-lg text-gray-100 grid grid-cols-1 md:text-center sm:text-start pl-10">
              <span className="text-black">{arrival_time}</span>
              <span className="text-gray-600">{toCity}</span>
            </p>
          </div>
        </div>
        <div className="bg-gray-100 grid grid-cols-2 px-10 rounded-b-3xl mt-2 pt-2">
          <p className="text-lg text-black grid grid-cols-3">
            <Image
              src={logo}
              alt="plane"
              className="bg-gray-300 rounded-2xl inline-block"
              width="20"
              height="20"
            />
            <span>Standard Ticket</span>
            <span>${price}</span>
            <span>per adult</span>
            <button
              onClick={onClick}
              className="bg-white border-gray-100 border-2 text-black hover:text-white hover:bg-black"
            >
              Book
            </button>
          </p>
          <p className="text-lg text-black grid grid-cols-3">
            <Image
              src={logo}
              alt="plane"
              className="bg-gray-300 rounded-2xl inline-block"
              width="20"
              height="20"
            />
            <span>Flexible Ticket</span>
            <span>${price}</span>
            <span>per adult</span>
            <button
              onClick={onClick}
              className="bg-green-950 text-white border-2 border-gray-100 hover:text-green-950 hover:bg-white"
            >
              Book
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
