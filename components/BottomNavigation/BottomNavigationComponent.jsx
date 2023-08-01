"use client";
import React from "react";
import { BiHomeAlt } from 'react-icons/bi'
import { TfiAnnouncement } from 'react-icons/tfi'
import { IoMdContact } from 'react-icons/io'
import { BsFill3CircleFill } from 'react-icons/bs'
import {AiFillInfoCircle,AiFillHome} from 'react-icons/ai'

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
      className="md:hidden h-fit px-8 py-5 z-999 m-8 flex flex-row items-center justify-center space-x-9 text-justify bg-blue-100 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"
    >
      <AiFillHome className={`${iconStyles}`} size = {20} />
      <AiFillInfoCircle className={`${iconStyles}`} size = {20} />
      <TfiAnnouncement className={`${iconStyles}`} size = {20} />
      <IoMdContact className={`${iconStyles}`} size = {20} />
      <BsFill3CircleFill className={`${iconStyles} animate-bounce`} color = 'gold' size = {20} />
      {/* <p className={`${navigationItemStyles}`}>Home</p>
      <p className={`${navigationItemStyles}`}>About</p>
      <p className={`${navigationItemStyles}`}>Ann</p>
      <p className={`${navigationItemStyles}`}>Contacts</p>
      <p className={`${navigationItemStyles}`}>Kodikon3.0</p> */}
    </div>
  );
};

export default BottomNavigationComponent;
