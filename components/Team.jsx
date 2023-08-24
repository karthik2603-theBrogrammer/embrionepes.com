'use client'
import React, { useState } from "react";
import DomainComponent from "./DomainComponent";
import { domainDetails } from "@/constants";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/framermotion";
const Team = () => {
  const [isCurrentTeam, setIsCurrentTeam] = useState(false)
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.01 }}
      className="p-5 md:p-[110px] flex flex-col"
    >
      <h1
        className="text-white w-fit md:text-7xl text-5xl py-6 "
        data-aos="zoom-in-up"
        data-aos-duration="500"
      >
        Meet The <span className="  text-blue-300 px-2 -py-2 text-md rounded-lg" >{isCurrentTeam ? 'Current' : "Previous"}</span>  Team <span className=" bg-white text-blue-500 p-2 rounded-lg text-xl" >Current Coming Soon</span>
      </h1>
      <div className=" md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  flex flex-col items-center justify-center  ">
        {domainDetails?.map((domain, index) => (
          <DomainComponent
            index={index}
            domainName={domain?.domainName}
            headsAndPhotos={domain?.headsAndPhotos}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Team;
