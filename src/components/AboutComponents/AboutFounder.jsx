import React from "react";
import Container from "../Container";
import manWithCoffee from "../../assets/AboutAssets/man-with-coffee-at-work.png";


import {motion} from "framer-motion"
const AboutFounder = () => {
  
  return (
    <section>
      <Container className={"py-5   flex justify-center"}>
        <div className=" px-5 py-3 lg:w-[1220px] bg-lightBlue rounded-[20px] flex  justify-between  shadow-inner md:items-center md:flex-row flex-col-reverse  ">
          <div
           
            // data-aos-anchor-placement="center-bottom"
            className=" lg:w-[526px] lg:h-[195px] md:w-[372px] flex-col justify-between flex md:mt-0 mt-10"
          >
            <motion.h1 initial={{ y: -150, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.9 }}
           viewport={{ once: true }} className="font-futura font-bold text-2xl   md:text-[22px] text-[20px] lg:text-[31px] md:inline-block  hidden my-1 leading-[41.2px] tracking-wider">
              About the founder
            </motion.h1>
            <div className=" flex flex-col lg:w[526px] gap-[20px] h-[114px]">
              <motion.p initial={{ x: -150, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 1.2 }}
           viewport={{ once: true }} className=" font-lato lg:w-[363px]  w-[334px] md:text-[16px] text-[14px] font-[500px] text-secondaryGrey leading-[28px] tracking-tight">
                Mr.Peter, Founder of techno skill
              </motion.p>
              <motion.p initial={{ y: 150, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 1.3 }}
           viewport={{ once: true }} className=" font-futura font-[500px] lg:text-[25px] text-[20px]  text-secondaryBlue leading-[33.2px] tracking-[-0.1%]">{`“Join      us for an exciting journey towards digital 
success”`}</motion.p>
            </div>
          </div>
          <div
           
            // data-aos-anchor-placement="center-bottom"
            className="  flex  justify-end"
          >
            <motion.img initial={{ x: 150, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 1.5 }}
           viewport={{ once: true }}
              className=" md:w-[418px] w-[352px]  "
              src={manWithCoffee}
              alt=""
            />
          </div>
          <motion.h1 initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
           
            className="font-futura font-bold text-2xl  text-[24px] md:hidden   my-1 leading-[41.2px] tracking-wider"
          >
            About the founder
          </motion.h1>
        </div>
      </Container>
    </section>
  );
};

export default AboutFounder;
