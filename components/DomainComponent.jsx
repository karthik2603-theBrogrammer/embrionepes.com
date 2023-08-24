"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { slideIn, fadeIn, zoomIn } from "@/utils/framermotion";
import { planetVariants } from "@/utils/framermotion";
import { AiFillLinkedin } from "react-icons/ai";
import { Tilt } from "react-tilt";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

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
  "hover:text-blue-400 transition ease-in hover:-translate-y-1 duration-100 cursor-pointer mx-2 mt-2";
const DomainComponent = ({ index, domainName, headsAndPhotos }) => {
  const { scrollYProgress, scrollY } = useScroll();
  const scale = useTransform(scrollYProgress, [1, 0], [0.01, 1]);

  return (
    <Tilt options={defaultOptions}>
      <motion.div
         data-aos="zoom-in-right"
         data-aos-duration="500"
         data-aos-delay={((index % 3) + 1) * 200}
        className={`h-fit w-[250px] md:h-[350px] md:w-[300px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-200 m-4  px-5  flex flex-col items-center justify-center relative`}
      >
        <h2 className=" mt-4 py-5  text-2xl md:text-4xl text-center">
          {domainName}
        </h2>

        {headsAndPhotos?.map(
          ({ domainHead, domainHeadPhoto, linkedInURL }, index) => (
            <div className="flex flex-row justify-center items-center space-x-3 mb-5" key={index}>
              <Image
                src={domainHeadPhoto}
                alt=""
                height={70}
                width={100}
                className="h-[110px] w-[110px] object-cover rounded-full"
              />
              <div className="flex flex-col items-center justify-center">
                <h3 className="text-center text-[1.2rem]">{domainHead}</h3>
                <a href={linkedInURL} target="_parent" className={iconStyles}>
                  <AiFillLinkedin size={25} />
                </a>
              </div>
            </div>
          )
        )}
      </motion.div>
    </Tilt>
  );
};

export default DomainComponent;
