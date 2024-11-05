import React from "react";
import fourPeopleAtTable from "../assets/AboutAssets/four-people-at-table.png";

const AboutUsHeroSection = () => {
  return (
    <section className=" bg-custom-gradient min-h-screen">
      <div className=" flex flex-col gap-5">
        <div className=" text-center flex flex-col justify-center items-center  ">
          <h1 className="text-blue-BASE text-xl font-medium  font-futura">
            About us
          </h1>
          <p className=" w- mt-4 font-bold font-futura text-6xl ">
            We are changing the whole
            <span className="text-blue-BASE ">new design</span>
          </p>
          <p className=" font-lato text-[#7F7D7D] w-1/2 text-center">
            The only corporate card and spent management platform designed to
            help you spend less.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <img src={fourPeopleAtTable} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
