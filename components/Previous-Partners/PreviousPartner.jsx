import React from "react";
import Image from "next/image";

const PreviousPartner = ({ logoSource, height, width, index, logoLink }) => {
  return (
    <div
      className="h-fit w-fit m-3 flex flex-center items-center justify-center relative"
      data-aos="zoom-out-down"
      data-aos-duration="500"
      data-aos-delay={(index + 1) * 150}
    >
      <a href={logoLink} target ="_blank">
        <Image
          src={logoSource}
          height={height}
          width={width}
          className="self-center"
        />
      </a>
    </div>
  );
};

export default PreviousPartner;
