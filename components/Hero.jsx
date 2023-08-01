"use client";
import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
import vortex from "../assets/blue-orbit.json";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useScramble } from "use-scramble";

const Hero = () => {
  const [isBigScreen, setIsBigScreen] = useState(true);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      console.log("Big Screen");
      setIsBigScreen(false);
    }
  });
  // const { scrollYProgress, scrollY } = useScroll();
  // const scale = useTransform(scrollYProgress, [1, 0], [0.01, 1]);
  // const scrollRef = useRef(null);

  const { ref, replay } = useScramble({
    text: "Embrione",
    range: [97, 120],
    speed: 0.4,
    tick: 1,
    step: 1,
    scramble: 2,
    seed: 0,
    chance: 1,
    overdrive: false,
    overflow: true,
  });
  const { ref2 } = useScramble({
    text: "The",
    range: [97, 120],
    speed: 0.4,
    tick: 1,
    step: 1,
    scramble: 2,
    seed: 0,
    chance: 1,
    overdrive: false,
    overflow: true,
  });

  return (
    <motion.div className="flex flex-col items-center md:items-start justify-between h-fit md:h-[80vh] md:pt-[140px] md:py-[100px] py-[40px] overflow-hidden">
      <motion.div
        // style={{ scale }}
        className="z-10 w-fit max-w-5xl items-center md:items-start justify-center font-mono text-sm flex flex-col md:pl-24  relative"
      >
        <span
          className="text-white text-4xl tracking-in-expand-more-delay xl:text-7xl"
          ref={ref2}
        >
          The
        </span>

        <h1
          className=" text-white w-fit md:text-9xl text-[70px]  text xl:text-[210px] md:tracking-in-expand md:py-0 py-9"
          ref={ref}
        />
        <span className="text-white  text-1xl md:text-2xl pl-1 text-focus-in xl:text-4xl">
          CSE Vertical, PES University
        </span>
      </motion.div>
      <motion.div
        className="-z-10 w-screen items-center justify-center md:hidden flex relative -top-9   "
        data-aos="zoom-in"
        data-aos-duration="500"
        data-aos-delay="200"
      >
        <Lottie
          loop={true}
          animationData={vortex}
          style={{ height: 300, width: 300 }}
        />
      </motion.div>
      <div className="blue__gradient absolute md:top-[-200px] md:left-[-100px] h-[350px] w-[350px] md:h-[500px] md:w-[600px]  " />
    </motion.div>
  );
};

export default Hero;
