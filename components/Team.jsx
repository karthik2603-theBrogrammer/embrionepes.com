import React from "react";
import DomainComponent from "./DomainComponent";
import { domainDetails } from "@/constants";
const Team = () => {
  return (
    <div className="p-5 md:p-[110px] flex flex-col">
      <h1
        className="text-white w-fit md:text-7xl text-5xl py-6 "
        data-aos="zoom-in-up"
        data-aos-duration="500"
      >
        Meet The Team
      </h1>
      <div className=" md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-4 flex flex-col items-center justify-center ">
        {domainDetails?.map((domain, index) => (
          <DomainComponent
            index={index}
            domainName={domain?.domainName}
            headsAndPhotos = {domain?.headsAndPhotos}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
