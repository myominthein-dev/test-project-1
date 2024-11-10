import React from "react";
import livingRoom from "../../assets/ContactAssets/living-room-couch.png";
import threeColleages from "../../assets/ContactAssets/three-colleages-at-desk.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";

const ContactUsHeroSection = () => {
  const [text, { isType }] = useTypewriter({
    words: [" Let’s talk about your next success?"],
    loop: 1,
    typeSpeed: 50,
    delaySpeed: 700,
  });
  return (
    <div className=" w-full h-[709px] lg:h-[909px] ">
      <div className=" flex flex-col justify-around h-full items-center ">
        {/* Paragraphs */}
        <div className=" w-full px-5 lg:w-[864px] flex flex-col justify-center md:items-center items-start gap-2">
          <p className=" text-[#6596A1] text-[18px] lg:text-[22px] font-[500] leading-[22px]">
            {" "}
            Contact us
          </p>
          <h1 className=" first-line:text-black-900 text-[#6596A1] text-[25px] lg:text-[61px] font-[700] leading-[30px] lg:leading-[67px] text-left md:text-center">
            <div>
              {text}{" "}
              <Cursor cursorStyle={isType && ">"} cursorColor="#6596A1" />
            </div>
          </h1>
          <span className=" text-left md:text-center text-[13px] lg:text-[20px] font-[500] leading-[28px] lg:w-[521px] text-[#7F7D7D]">
            The only corporate card and spent management platform designed to
            help you spend less.
          </span>
        </div>
        {/* Image */}
        <div>
          <div className=" relative">
            <motion.img
              initial={{ x: -180, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              src={livingRoom}
              className=" w-full  lg:w-[537px] h-[406px] "
            />

            <motion.img
              initial={{ x: 180, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
              src={threeColleages}
              className="w-full lg:w-[592px] h-[436px] object-contain absolute top-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHeroSection;
