import React from "react";
import DomainComponent from "./DomainComponent";
import { domainDetails } from "@/constants";
const Team = () => {
  return (
    <div className="p-5 md:p-[110px] flex flex-col">
      <h1 className="text-white w-fit md:text-7xl text-5xl py-6">
        Meet The Team
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-3 ">
        {domainDetails?.map((domain, index) => (
          <DomainComponent index = {index} domain = {domain}/>
        ))}
      </div>
    </div>
  );
};

export default Team;
