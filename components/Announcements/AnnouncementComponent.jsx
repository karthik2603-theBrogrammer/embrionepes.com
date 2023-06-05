"use client";

import React, { useEffect, useState } from "react";
import { AiFillAlert } from "react-icons/ai";
import TimeAgo from "react-timeago";

const AnnouncementComponent = ({
  index,
  announcementName,
  announcementDescription,
  formLink,
  dateOfEntry,
  postedByDomain,
  postedBy,
}) => {
  const [ifNewAnnouncement, setNewAnnouncement] = useState(false);
  useEffect(() => {
    if (Math.abs(Date.now() - dateOfEntry) / 36e5 < 48) {
      setNewAnnouncement(true);
    }
  }, []);

  return (
    <div
      className={` w-fit h-fit bg-gray-400 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 text-gray-200 mx-2 my-4  px-2 py-2 flex flex-col items-center justify-center relative z-[23]`}
      data-aos="zoom-in-down"
      data-aos-duration="500"
      data-aos-delay={((index % 3) + 1) * 200}
    >
      <div className="flex flex-row justify-between items-center w-[100%] px-2 md:px-8  flex-1">
        <h3 className="md:text-4xl text-2xl py-6 gradient-text-animation ">
          {announcementName}
        </h3>
        <div className="flex flex-col justify-end items-end space-y-2 relative bottom-0">
          {ifNewAnnouncement && (
            <div className="flex flex-row items-center justify-center space-x-1">
              <p>New! </p>
              <AiFillAlert color="gold" size={25} />
            </div>
          )}

          <p className="md:text-2xl">
            <TimeAgo date={new Date(dateOfEntry)} />
          </p>
          
        </div>
      </div>

      <p className="my-6 text-justify px-5 md:text-2xl">
        {announcementDescription}
      </p>

      <div className="flex flex-col space-y-3 items-center justify-center mb-4">
        {/* <p>
          by {postedBy}, {postedByDomain}
        </p> */}
        <a  target='_blank'>
          <p>🔗 Click to go to the form! </p>
        </a>
      </div>
    </div>
  );
};

export default AnnouncementComponent;
