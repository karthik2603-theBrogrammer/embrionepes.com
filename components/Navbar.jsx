"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useDragControls } from "framer-motion";
import NavbarAnnouncementComponent from "./Announcements/NavbarAnnouncementComponent";

const icon = {
  hidden: {
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
  },
  visible: {
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)",
  },
};
const Navbar = () => {
  const constraintsRef = useRef(null);

  return (
    <motion.div className="h-fit w-screen flex flex-1 flex-col md:flex-row items-center justify-center md:justify-end relative">
      <div className="self-center w-fit relative md:right-9 flex items-center justify-center">
        <NavbarAnnouncementComponent />
      </div>
      <motion.div >
        <Image
          src="/embrionelogo.png"
          height={200}
          width={200}
          className="md:pr-10 flicker-logo h-[100px] w-[100px] md:h-[200px] md:w-[200px] cursor-pointer "
        />
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
