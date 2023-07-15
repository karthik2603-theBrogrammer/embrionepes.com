"use client";
import React from "react";

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
  return (
    <div
      className="md:hidden h-fit px-8 py-5 z-999 m-8 flex flex-row items-center justify-center space-x-5 text-justify bg-blue-100 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10"
      data-aos="zoom-in-up"
      data-aos-duration="500"
      data-aos-delay={500}
    >
      <p className={`${navigationItemStyles}`}>Home</p>
      <p className={`${navigationItemStyles}`}>About</p>
      <p className={`${navigationItemStyles}`}>Ann</p>
      <p className={`${navigationItemStyles}`}>Contacts</p>
      <p className={`${navigationItemStyles}`}>Kodikon3.0</p>
    </div>
  );
};

export default BottomNavigationComponent;
