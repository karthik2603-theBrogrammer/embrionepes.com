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
            domainHead1={domain?.domainHead1}
            domainHead2={domain?.domainHead2}
            domainHead1Photo={domain?.domainHead1Photo}
            domainHead2Photo={domain?.domainHead2Photo}
            domainHead1Linkedin={domain?.domainHead1Linkedin}
            domainHead2Linkedin={domain?.domainHead2Linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
