import React from "react";
import Container from "../Container";
import { ArrowRightIcon } from "lucide-react";
import twoPeople from "../../assets/HomeAssets/boba-young-man-discussion.png";
import plantAndChair from "../../assets/HomeAssets/armchair-and-plant.png";
const HomeHeroSection = () => {
  return (
    <Container>
      <div className="h-[939px] flex flex-col justify-between bg-gradient-to-b from-[#CCDCE0] to-[#FFFFFF]">
        <div className="w-[640px] h-[475px] flex items-center mx-auto  ">
          <div className="h-[315px] flex flex-col justify-between relative w-full my-auto  ">
            <div className="h-[243px]  flex flex-col justify-between ">
              <h2 className="text-[#6596A1] text-[22px] text-center leading-[22px]  font-futura">
                The Art of UI Design
              </h2>
              <p className="font-lato tracking-wide  relative px-3 -left-32   text-center text-[61px] w-[885px] h-[134px] font-extrabold leading-[67px] ">
                Come for the <span className="text-[#6596A1]">features</span> of
                it. Stay for best ever help.
              </p>

              <p className="font-lato  text-[#7F7D7D] mx-auto  text-[20px] leading-[28px] font-semibold w-[521px] h-[56px] text-center">
                We’ve been told it is possible to revolutionize the payment
                industry. We have not reinvented the wheel, we decide
              </p>
            </div>

            <div className="  w-[286px] flex justify-between items-center mx-auto h-[46px]">
              <button className="w-[122px] h-[46px] rounded-[8px] px-[5px] border border-[#6596A1] py-[8px] text-[#6596A1] text-[16px] leading-[22px] -tracking-tighter">
                Learn More
              </button>
              <button className="w-[148px] flex items-center justify-center   bg-[#6596A1] h-[46px] rounded-[8px] border border-[#6596A1] py-[8px] text-white text-[16px] leading-[22px] -tracking-tighter">
                <span>Get Started</span> <ArrowRightIcon className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="w-[806.03px] relative flex  mx-auto  h-[436px]">
          <div className=" relative left-20 top-10 z-20 w-[384px] h-[294.23px] ">
            <img className="h-full w-full object-cover" src={plantAndChair} />
          </div>
          <div className="border z-30 w-[592px] h-[436px] border-green-400">
            <img className="h-full object-cover w-full" src={twoPeople} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeHeroSection;
