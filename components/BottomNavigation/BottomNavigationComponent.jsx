"use client";
import React from "react";
import { BiHomeAlt } from 'react-icons/bi'
import { TfiAnnouncement } from 'react-icons/tfi'
import { IoMdContact } from 'react-icons/io'
import { BsFill3CircleFill } from 'react-icons/bs'
import { AiFillInfoCircle, AiFillHome } from 'react-icons/ai'

const navigationItems = [
  "Home",
  "About",
  "Team",
  "Events",
  "Announcements",
  "Contacts",
];
const BottomNavigationComponent = () => {
  const navigationItemStyles = `text-[10px] text-white text-center`;
  const iconStyles = `text-white`
  return (
    <div
      className=" md:hidden h-fit px-8 py-5 z-999 m-8 flex flex-row items-center justify-center space-x-9 text-justify bg-blue-100 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10  relative"
      data-aos="zoom-in-up"
        data-aos-duration="500"
    >
      <AiFillHome className={`${iconStyles}`} size={20} />
      <AiFillInfoCircle className={`${iconStyles}`} size={20} />
      <TfiAnnouncement className={`${iconStyles}`} size={20} />
      <IoMdContact className={`${iconStyles}`} size={20} />
      <BsFill3CircleFill className={`${iconStyles} gradient-text-animation`}  size={20} />
    </div>
  );
};

export default BottomNavigationComponent;
