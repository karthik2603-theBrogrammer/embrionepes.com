"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "@/utils/framermotion";
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
  "hover:text-blue-400 transition ease-in hover:-translate-y-1 duration-100 cursor-pointer mx-2";
const DomainComponent = ({
  index,
  domainName,
  domainHead1,
  domainHead2,
  domainHead1Photo,
  domainHead2Photo,
  domainHead1Linkedin,
  domainHead2Linkedin,
}) => {
  return (
    <Tilt options={defaultOptions} >
      <div
        className={`h-[300px] w-[250px] md:h-[350px] md:w-[300px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-200 m-4  px-5 py-9 flex flex-col items-center justify-center relative`}
        data-aos="zoom-in-up"
        data-aos-duration="500"
        data-aos-delay={((index % 3) + 1) * 100}
      >
        <h2 className="mb-5 md:mb-9 text-2xl md:text-4xl ">{domainName}</h2>
        <div className="flex flex-row space">
          <Image
            src={domainHead1Photo}
            alt="Domain-Head-1"
            height={70}
            width={70}
          />
          <h3>{domainHead1}</h3>
          <a href={domainHead1Linkedin} target="_blank" className={iconStyles}>
            <AiFillLinkedin size={25} />
          </a>
        </div>
        <div className="flex flex-row space-">
          <Image
            src={domainHead2Photo}
            alt="Domain-Head-1"
            height={70}
            width={70}
          />
          <h3>{domainHead2}</h3>
          <a href={domainHead2Linkedin} target="_parent" className={iconStyles}>
            <AiFillLinkedin size={25} />
          </a>
        </div>
      </div>
    </Tilt>
  );
};

export default DomainComponent;
