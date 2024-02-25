"use client";
import React, { useState, useEffect, MouseEventHandler } from "react";
import Flights from "@/components/flights";
import { useDispatch, useSelector } from "react-redux";
import "../../app.css";
import { getFlight } from "@/app/GlobalRedux/features/flightSlice";
import { useRouter } from "next/navigation";

export default function Book() {
  const flights = useSelector((state: any) => state.flight.flights);
  const isLoading = useSelector((state: any) => state.flight.isLoading);
  console.log(flights);

  const router = useRouter();
  const dispatch = useDispatch();

  const addFlight = (item: any): void => {
    try {
      console.log(item);
      dispatch(getFlight(item));
      router.push("/ticket");
    } catch (err) {
      console.error("Error in adding flight", err);
    }
  };
  return (
    <div className="bg-white h-screen">
      {isLoading ? (
        <ul>
          {flights[0].map((item: any, key: any) => (
            <li key={item.id}>
              <Flights
                departure_date={new Date(item.takeOffDate)
                  .toISOString()
                  .slice(0, 10)}
                flight_class="Economy"
                flight_id={item.flightNumber}
                bags_weight="2.5"
                departure_time={new Date(item.takeOffTime)
                  .toISOString()
                  .slice(11, 19)}
                arrival_time={`${
                  new Date(item.takeOffTime).getUTCHours() + item.Duration
                }:${new Date(item.takeOffTime).getMinutes()}:${new Date(
                  item.takeOffTime
                ).getSeconds()}`}
                fromCity={item.cityFrom}
                toCity={item.cityTo}
                price="50"
                onClick={() => addFlight(item)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="h-screen flex justify-center items-center">
          <div id="wifi-loader">
            <svg className="circle-outer" viewBox="0 0 86 86">
              <circle className="back" cx="43" cy="43" r="40"></circle>
              <circle className="front" cx="43" cy="43" r="40"></circle>
              <circle className="new" cx="43" cy="43" r="40"></circle>
            </svg>
            <svg className="circle-middle" viewBox="0 0 60 60">
              <circle className="back" cx="30" cy="30" r="27"></circle>
              <circle className="front" cx="30" cy="30" r="27"></circle>
            </svg>
            <svg className="circle-inner" viewBox="0 0 34 34">
              <circle className="back" cx="17" cy="17" r="14"></circle>
              <circle className="front" cx="17" cy="17" r="14"></circle>
            </svg>
            <div className="text" data-text="Searching"></div>
          </div>
        </div>
      )}
    </div>
  );
}
