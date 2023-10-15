'use client'
import React from "react";
import { announcements } from "@/constants";
import AnnouncementComponent from "./AnnouncementComponent";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

const Announcements = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.0001, 1]);
  return (
    <div
      className="p-5 md:p-[110px] flex flex-col relative items-center justify-center"
      style={{ scale }}
      id = 'announcements'
    >
      <div
        className="flex flex-col md:flex-row items-center justify-center w-fit h-fit md:space-x-3"
        data-aos="zoom-in-up"
        data-aos-duration="500"
      >
        <span className="text-4xl md:text-7xl"> 📣 </span>
        <h1 className="text-white md:text-7xl text-4xl pb-6 pt-3 text-center">
          Announcements!
        </h1>
      </div>
      {announcements?.map((announcement, index) => (
        <AnnouncementComponent
          key={index}
          index={index}
          announcementName={announcement?.announcementName}
          announcementDescription={announcement?.announcementDescription}
          formLink={announcement?.formLink}
          formLinkStatus={announcement?.formLinkStatus}
          dateOfEntry={announcement?.dateOfEntry}
          postedByDomain={announcement?.postedByDomain}
          postedBy={announcement?.postedBy}
        />
      ))}
    </div>
  );
};

export default Announcements;
