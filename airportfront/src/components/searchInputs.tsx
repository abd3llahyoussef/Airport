"use client";
import React from "react";
import { useDispatch } from "react-redux/es/exports";
import { useState, useEffect } from "react";
import { getALLflights, setInfo } from "@/app/GlobalRedux/features/flightSlice";
import { useRouter } from "next/navigation";

interface flight {
  cityFrom: string; //departureAirport
  cityTo: string; //arrivalAirport
  passengers: string;
  class: string;
  takeOffDate: string; //departureDate
  arrivalDate: string;
}
export default function Inputs() {
  const [flights, setFlights] = useState<flight>({
    cityFrom: "", //departureAirport
    cityTo: "", //arrivalAirport
    passengers: "",
    class: "",
    takeOffDate: "", //departureDate
    arrivalDate: "",
  });

  const router = useRouter();
  const dispatch = useDispatch<any>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFlights((prevProps) => ({
      ...prevProps,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const result = dispatch(getALLflights(flights));
      console.log(result);
      router.push("/book");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dispatch(setInfo(flights));
  }, [dispatch, flights]);

  return (
    <div className="bg-white h-auto pb-2">
      <h1 className="text-black indent-3 mb-3 pt-3 text-3xl">
        Search For Flights
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-y-4 shadow-2xl mx-28 mb-2 p-2 rounded-3xl border-2 border-black">
          <label htmlFor="Departure Airport" className="text-black w-1/2">
            Departure Airport
          </label>
          <input
            type="text"
            placeholder="from airport"
            name="cityFrom"
            className="w-2/3 h-11/12 border-2 border-black bg-white rounded-3xl text-black ml-1 px-2 py-3 font-medium text-base tracking-normal ease-out"
            id="Departure Airport"
            value={flights.cityFrom}
            onChange={handleChange}
          />
          <label htmlFor="Arrival Airport" className="text-black">
            Arrival Airport
          </label>
          <input
            type="text"
            placeholder="to airport"
            name="cityTo"
            className="w-2/3 h-11/12 border-2 border-black bg-white rounded-3xl text-black ml-1 px-2 py-3 font-medium text-base tracking-normal ease-out"
            id="Arrival Airport"
            value={flights.cityTo}
            onChange={handleChange}
          />
          <label htmlFor="Passengers" className="text-black">
            Passengers
          </label>
          <input
            type="text"
            placeholder="1 Passenger"
            name="passengers"
            className="w-2/3 h-11/12 border-2 border-black bg-white rounded-3xl text-black ml-1 px-2 py-3 font-medium text-base tracking-normal ease-out"
            id="Passengers"
            value={flights.passengers}
            onChange={handleChange}
          />
          <label htmlFor="Class" className="text-black">
            Class
          </label>
          <input
            type="text"
            placeholder="Economy"
            name="class"
            className="w-2/3 h-11/12 border-2 border-black bg-white rounded-3xl text-black ml-1 px-2 py-3 font-medium text-base tracking-normal ease-out"
            id="Class"
            value={flights.class}
            onChange={handleChange}
          />
          <label htmlFor="Departure Date" className="text-black">
            Departure Date
          </label>
          <input
            type="date"
            min={new Date().toLocaleDateString()}
            max="2023-09-20"
            name="takeOffDate"
            className="w-2/3 h-11/12 border-2 border-black bg-white rounded-3xl text-black ml-1 px-2 py-3 font-medium text-base tracking-normal ease-out"
            id="Departure Date"
            value={flights.takeOffDate}
            onChange={handleChange}
          />
          <label htmlFor="Arrival Date" className="text-black">
            Arrival Date
          </label>
          <input
            type="date"
            min={new Date().toLocaleDateString()}
            max="2023-09-20"
            name="arrivalDate"
            className="w-2/3 h-11/12 border-2 border-black bg-white rounded-3xl text-black ml-1 px-2 py-3 font-medium text-base tracking-normal ease-out "
            id="Arrival Date"
            value={flights.arrivalDate}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="text-black border-2 border-black ml-28 mt-3 p-3 rounded-full text-lg hover:text-white hover:bg-black"
        >
          Search Flights
        </button>
      </form>
    </div>
  );
}
