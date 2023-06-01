import React from "react";

const AboutUs = () => {
  return (
    <div className="p-5 md:p-[110px] flex flex-col relative">
      <div
        className="blue__gradient absolute md:top-[-450px] md:right-[400px] h-[350px] w-[350px] md:h-[500px] md:w-[600px] "
        data-aos="zoom-in-right"
        data-aos-duration="700"
      />
      <h1 className="text-white w-fit md:text-7xl text-5xl py-6">About Us</h1>
      <p className="text-white text-1xl md:text-2xl text-justify">
        The Embrione is a peer-to-peer based tech community, under the CSE
        vertical of PES University, Bangalore. The club mainly focuses on:
        Providing a platform and opportunities for students to grow and develop
        their skill sets. For students in the first and second years.
        Beginner-friendly hackathons and other tech events. We bring together
        fresh minds and give them the freedom to unleash their full potential.
      </p>
    </div>
  );
};

export default AboutUs;
