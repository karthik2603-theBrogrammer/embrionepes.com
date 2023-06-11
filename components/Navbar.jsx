"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useDragControls } from "framer-motion";

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
    <motion.div className="h-fit w-screen flex items-center justify-center md:justify-end">
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
