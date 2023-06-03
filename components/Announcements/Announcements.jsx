import React from "react";
import { announcements } from "@/constants";
import AnnouncementComponent from "./AnnouncementComponent";
const Announcements = () => {
  return (
    <div className="p-5 md:p-[110px] flex flex-col relative items-center justify-center">
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
          dateOfEntry={announcement?.dateOfEntry}
          postedByDomain = {announcement?.postedByDomain}
          postedBy={announcement?.postedBy}
        />
      ))}
    </div>
  );
};

export default Announcements;
