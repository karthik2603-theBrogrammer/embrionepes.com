import React from "react";
import sevenElevenLogo from "../../assets/sevenElevenLogo.png";
import uravuLogo from "../../assets/uravuLogo.png";
import frozenBottle from "../../assets/frozenBottle.png";
import hopepunkLogo from "../../assets/hopepunkLogo.png";
import nileLogo from "../../assets/nileLogo.png";
import PreviousPartner from "./PreviousPartner";

const logoSources = [
  sevenElevenLogo,
  frozenBottle,
  uravuLogo,
  hopepunkLogo,
  nileLogo,
];
const logoSizes = [
  { height: 70, width: 70 }, //seven-eleven
  { height: 140, width: 140 }, //frozenbottle
  { height: 140, width: 140 }, //uravu
  { height: 160, width: 160 }, //hopeunk,
  { height: 130, width: 130 }, //nile
];
const logoLinks = [
  "https://www.7-eleven.com/", //seven-eleven
  "https://frozenbottle.com/", // frozenbottle
  "https://www.uravulabs.com/", // uravu
  " https://hopepunk.store/", // hopeunk
  "https://nilesecure.com/", // nile
];
const PreviousPartners = () => {
  return (
    <div className="p-5 md:p-[110px] flex flex-col relative items-center justify-center mt-9">
      <div
        className="flex flex-col md:flex-row items-center justify-center w-fit h-fit md:space-x-3 mb-9"
        data-aos="zoom-in-up"
        data-aos-duration="500"
      >
        <span className="text-4xl md:text-7xl"> ✨ </span>
        <h1 className="text-white md:text-7xl text-4xl pb-6 pt-3 text-center">
          Our Previous Partners!
        </h1>
      </div>

      {/* //// */}
      <div className="flex flex-col md:flex-row space-y-9 md:space-x-32  items-center justify-center mt-9 relative">
        {logoSources?.map((logoSource, index) => (
          <PreviousPartner
            key={index}
            index={index}
            logoSource={logoSource}
            height={logoSizes[index].height}
            width={logoSizes[index].width}
            logoLink = {logoLinks[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default PreviousPartners;
