import React from "react";
import livingRoom from "../../assets/ContactAssets/living-room-couch.png";
import threeColleages from "../../assets/ContactAssets/three-colleages-at-desk.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const ContactUsHeroSection = () => {
  const [text, { isType }] = useTypewriter({
    words: [" Let’s talk about your next success?"],
    loop: 1,
    typeSpeed: 50,
    delaySpeed: 700,
  });
  return (
    <div className=" w-full h-[909px]  bg-gradient-to-t from-[#FFFFFF] via-[#E6EAEB] to-[#CCDCE0]">
      <div className=" flex flex-col justify-evenly h-full items-center ">
        {/* Paragraphs */}
        <div className="  w-[864px] flex flex-col justify-center items-center gap-2">
          <p className=" text-[#6596A1] text-[22px] font-[500] leading-[22px]">
            {" "}
            Contact us
          </p>
          <h1 className=" first-line:text-black-900 text-[#6596A1] text-[61px] font-[700] leading-[67px] text-center">
            <h1>
              {text}{" "}
              <Cursor cursorStyle={isType && ">"} cursorColor="#6596A1" />
            </h1>
          </h1>
          <span className=" text-center text-[20px] font-[500] leading-[28px] w-[521px] text-[#7F7D7D]">
            The only corporate card and spent management platform designed to
            help you spend less.
          </span>
        </div>
        {/* Image */}
        <div>
          <div className=" relative">
            <img
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="400"
              data-aos-easing="ease-in-out"
              className="  w-[537px] h-[406px] "
              src={livingRoom}
              alt=""
            />
            <img
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-delay="600"
              data-aos-easing="ease-in-out"
              className=" w-[592px] h-[436px] object-contain absolute top-6"
              src={threeColleages}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsHeroSection;
