import React from "react";
import fourPeopleAtTable from "../../assets/AboutAssets/four-people-at-table.png";
import Container from "../Container";
import {motion} from "framer-motion"

const AboutUsHeroSection = () => {
  return (
    <section className=" px-2 md:py-5 lg:py-14">
      <Container className={"py-5 px-5  "}>
        <div className=" flex justify-between flex-col items-center gap-10">
          <div className=" flex  lg:w-[864px] md:w-[764px] gap-2.5 mx-auto flex-col justify-center md:items-center md:text-center text-left  ">
            <motion.h1 initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }} className=" text-blue-PRIMARY lg:text-[22px] md:text-[16px] font-medium  font-lato ">
              About us
            </motion.h1>
            <motion.p initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }} className=" lg:w-3/4 md:text-[30px] text-[25px] md:w-[435px] font-bold font-lato lg:text-6xl ">
              We are changing the whole{" "}
              <span className="text-blue-PRIMARY ">new design</span>
            </motion.p>
            <motion.p initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }} className=" font-lato text-[#7F7D7D] lg:w-[521px]  md:w-[414px] lg:text-[20px] md:text-[16px] text-[14px] ">
              The only corporate card and spent management platform designed to
              help you spend less.
            </motion.p>
          </div>
          <div className=" flex flex-col items-center justify-center mt-8 ">
            <motion.img initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
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