"use client";
import React from "react";
import pesLogo from "../../assets/PES_LogoWhite.webp";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillLinkedin } from "react-icons/ai";
import { Tilt } from "react-tilt";
const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};
const iconStyles =
  "hover:text-blue-400 transition ease-in hover:-translate-y-1 duration-100 cursor-pointer";
const Footer = () => {
  return (
    <div
      className="w-screen h-[40vh] mt-9 flex md:flex-row flex-col justify-center items-center relative text-white space-y-6  "
      data-aos="fade-down"
      data-aos-duration="1000"
    >
      <Tilt defaultOptions={defaultOptions}>
        <div className="flex flex-col items-center justify-center">
          <Image src={pesLogo} alt="PES-LOGO" height={200} width={200} />
        </div>
      </Tilt>
      <div className="flex flex-col items-center justify-center w-fit md:mx-12 lg:mx-36">
        <div className="flex flex-row items-center justify-center space-x-5 w-fit h-fit mb-6">
          <BsInstagram size={25} className={iconStyles} />
          <HiOutlineMail size={25} className={iconStyles} />
          <AiFillLinkedin size={25} className={iconStyles} />
        </div>
        <p className="text-center w-fit">© All Rights Reserved 2023</p>
        <p className="text-center">
          Made with ❣️ By the{" "}
          <span className="gradient-text-animation">Embrione</span> WebDev Team
        </p>
      </div>

      <div className=" flex-col items-center justify-center self-center m-0 md:flex hidden w-fit">
        <p className="text-center"> Vijit Kumar:vijit@gmail.com </p>
        <p className="text-center">Vishal Lodha: vishal@gmail.com </p>
      </div>
      <div className="blue__gradient absolute md:top-[-300px] md:left-[-100px] h-[350px] w-[350px] md:h-[400px] md:w-[450px] z-[-60] " />
    </div>
  );
};

export default Footer;
