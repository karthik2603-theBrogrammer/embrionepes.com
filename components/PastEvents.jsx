"use client";
import React, { useEffect, useState } from "react";
import { ClubEvents } from "@/constants";
import PastEventsCarousel from "./PastEvents/PastEventsCarousel";
const PastEvents = () => {
  const [activeEvent, setActiveEvent] = useState(null);
  const [eventDetails, setEventDetails] = useState(null);
  useEffect(() => {
    if (activeEvent !== null) {
      const eventDetailsLocal = ClubEvents?.find(
        (clubEvent) => clubEvent["eventName"] === activeEvent
      );
      console.log(eventDetailsLocal);
      setEventDetails(eventDetailsLocal);
    }
  }, [activeEvent]);

  return (
    <div className="p-5 md:p-[110px] flex flex-col relative">
      <h1
        className="text-white md:text-7xl text-5xl py-6 text-center"
        data-aos="zoom-in-up"
        data-aos-duration="500"
      >
        Here's What We've conducted!
      </h1>
      <div className="flex flex-row flex-wrap h-fit w-[100%] items-center justify-center my-5 space-x-4  flex-1">
        {ClubEvents?.map((clubEvent, index) => (
          <div
          key={index}
            data-aos="zoom-in"
            data-aos-duration="500"
            data-aos-delay={(index + 1) * 300}
          >
            <span
              className={`flex items-center justify-center text-[60%] md:text-2xl  p-3 rounded-md cursor-pointer  ${
                activeEvent === clubEvent?.eventName
                  ? "bg-white text-blue-950"
                  : "text-white hover:text-teal-200"
              } transition ease-in-out duration-300`}
              key={index}
              onClick={() => {
                setActiveEvent(clubEvent?.eventName);
              }}
            >
              {clubEvent?.eventName}
            </span>
          </div>
        ))}
      </div>
      {activeEvent === null ? (
        <p
          className="text-white text-1xl md:text-2xl  text-center gradient-text-animation"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          Select To See What The Embrione has been upto!
        </p>
      ) : (
        <div className="my-5">
          <p className="text-white text-2xl md:text-6xl text-center my-6 gradient-text-animation">
            {eventDetails?.eventName}
          </p>
          <p className="text-white text-1xl md:text-2xl   my-4 text-justify">
            {eventDetails?.eventDescription}
          </p>
          {activeEvent !== 'Cipher' && (<PastEventsCarousel
            eventImagesArray={eventDetails?.eventImagesArray}
          />)}
        </div>
      )}
      <div className=" z-[-40] blue__gradient absolute  md:top-[-450px] md:right-[50px] h-[350px] w-[350px] md:h-[500px] md:w-[600px] hidden md:flex" />
    </div>
  );
};

export default PastEvents;
