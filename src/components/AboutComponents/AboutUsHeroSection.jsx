import React from "react";
import fourPeopleAtTable from "../../assets/AboutAssets/four-people-at-table.png";
import Container from "../Container";
import Aos from "aos";

const AboutUsHeroSection = () => {
  Aos.init();
  return (
    <section className="   py-[80px]">
      <Container className={"py-5 px-5  "}>
        <div className=" flex justify-between flex-col items-center gap-10">
          <div
            data-aos="fade-down"
            // data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className=" flex  lg:w-[864px] md:w-[764px] gap-2.5 mx-auto flex-col justify-center md:items-center md:text-center text-left  "
          >
            <h1 className=" text-blue-PRIMARY lg:text-[22px] md:text-[16px] font-medium  font-futura ">
              About us
            </h1>
            <p className=" lg:w-3/4 md:text-[30px] text-[25px] md:w-[435px] font-bold font-futura lg:text-6xl ">
              We are changing the whole{" "}
              <span className="text-blue-PRIMARY ">new design</span>
            </p>
            <p className=" font-lato text-[#7F7D7D] lg:w-[521px]  md:w-[414px] lg:text-[20px] md:text-[16px] text-[14px] ">
              The only corporate card and spent management platform designed to
              help you spend less.
            </p>
          </div>
          <div
            data-aos="fade-up"
            // data-aos-offset="200"
            data-aos-delay="100"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            className=" flex flex-col items-center justify-center mt-8 "
          >
            <img
              className=" lg:w-[592px] md:w-[422.69px]"
              src={fourPeopleAtTable}
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUsHeroSection;
