import React from "react";
import fourPeopleAtTable from "../../assets/AboutAssets/four-people-at-table.png";
import Container from "../Container";

const AboutUsHeroSection = () => {
  return (
    <section className=" bg-custom-gradient min-h-screen py-[80px]">
      <Container className={"py-5 px-5"}>
        <div className=" flex justify-between flex-col items-center gap-10">
          <div className=" text-center flex  lg:w-[864px] gap-2.5 mx-auto flex-col justify-center items-center  ">
            <h1 className=" text-blue-PRIMARY lg:text-[22px] font-medium  font-futura">
              About us
            </h1>
            <p className=" lg:w-3/4  font-bold font-futura text-6xl ">
              We are changing the whole{" "}
              <span className="text-blue-PRIMARY ">new design</span>
            </p>
            <p className=" font-lato text-[#7F7D7D] w-1/2 text-center">
              The only corporate card and spent management platform designed to
              help you spend less.
            </p>
          </div>
          <div className=" flex flex-col items-center justify-center mt-8 ">
            <img className=" lg:w-[592px]" src={fourPeopleAtTable} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsHeroSection;
