'use client'
import React from "react";
import Lottie from "lottie-react";
import vortex from "../assets/blue-orbit.json";
const Hero = () => {
  return (
    <div className="flex flex-col items-start justify-between h-[90vh] md:pt-[140px] pt-[100px] overflow-hidden">
      <div className="z-10 w-fit max-w-5xl items-start justify-center font-mono text-sm flex flex-col lg:pl-24 pl-4 ">
        <span className="text-white text-4xl tracking-in-expand-more-delay">
          The
        </span>
        <h1 className=" text-white w-fit md:text-9xl text-7xl  tracking-in-expand text">
          Embrione
        </h1>
        <span className="text-white  text-1xl md:text-2xl pl-1 text-focus-in">
          CSE Vertical, PES University
        </span>
      </div>
      <div className="z-10 w-screen items-center justify-center max-w-5xl lg:hidden flex relative bottom-8">
        <Lottie
          loop={true}
          animationData={vortex}
          style={{ height: 300, width: 300, padding: 20 }}
        />
      </div>
      <div className="blue__gradient absolute md:top-[-200px] md:left-[-100px] h-[350px] w-[350px] md:h-[500px] md:w-[600px]  " />
    </div>
  );
};

export default Hero;
