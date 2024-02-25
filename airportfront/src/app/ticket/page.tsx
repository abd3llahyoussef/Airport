"use client";
import React, { useState, useEffect } from "react";
import Ticket from "@/components/Ticket";
import { useSelector } from "react-redux";
import "../../app.css";

export default function Final() {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const flight = useSelector((state: any) => state.flight.choosenFlight);
  console.log(flight);
  useEffect(() => {
    if (flight !== null) {
      setIsLoading(true);
    }
  }, [flight, isLoading]);

  return (
    <div>
      {isLoading ? (
        <Ticket
          flightNumber={flight.flightNumber}
          cityFrom={flight.cityFrom}
          cityTo={flight.cityTo}
          takeOffTime={new Date(flight.takeOffTime).toISOString().slice(11, 19)}
          arrivalTime={`${
            new Date(flight.takeOffTime).getUTCHours() + flight.Duration
          }:${new Date(flight.takeOffTime).getMinutes()}:${new Date(
            flight.takeOffTime
          ).getSeconds()}`}
        />
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
