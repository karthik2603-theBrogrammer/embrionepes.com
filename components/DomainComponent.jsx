"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "@/utils/framermotion";

const rightviewVariants = {
  on: {
    opacity: 1,
    x: "0%",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
  off: {
    opacity: 0,
    x: "50%",
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

const DomainComponent = ({
  index,
  domainName,
  domainHead1,
  domainHead2,
  domainHead1Photo,
  domainHead2Photo,
}) => {
  return (
    <motion.div
      className={`h-[300px] w-[250px] md:h-[400px] md:w-[300px] bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-200 m-4  px-5 py-9 `}
      // initial="off"
      // whileInView="on"
      // viewport={{ amount: 0.2, once: true }}
      // variants={rightviewVariants}
      data-aos="fade-left"
     data-aos-offset="100"
     data-aos-duration="500"
     data-aos-delay={((index%3)+1) * 5 }
    >
      <h2>{domainName}</h2>
      <div>
        <Image
          src={domainHead1Photo}
          alt="Domain-Head-1"
          height={70}
          width={70}
        />
        <h3>{domainHead1}</h3>
      </div>
      <div>
        <Image
          src={domainHead2Photo}
          alt="Domain-Head-1"
          height={70}
          width={70}
        />
        <h3>{domainHead2}</h3>
      </div>
    </motion.div>
  );
};

export default DomainComponent;
