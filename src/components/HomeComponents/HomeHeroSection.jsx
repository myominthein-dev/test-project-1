import React from "react";
import Container from "../Container";
import { ArrowRightIcon } from "lucide-react";
import twoPeople from "../../assets/HomeAssets/boba-young-man-discussion.png";
import plantAndChair from "../../assets/HomeAssets/armchair-and-plant.png";
const HomeHeroSection = () => {
  return (
    <Container>
      <div className="lg:h-[939px]  md:h-[566.64px] h-[403px] lg:w-full flex flex-col bg-gradient-to-b from-[#CCDCE0] to-[#FFFFFF]">
        <div className="md:w-[640px] w-[355px] sm:w-full lg:h-[475px] flex items-center mx-auto  ">
          <div className="md:h-[315px]  pt-3  h-[283px]  flex flex-col lg:justify-between justify-around  sm:items-center relative w-full md:my-auto  ">
            <div className="lg:h-[243px] md:h-[190px]  gap-3  flex  md:justify-around flex-col lg:justify-between sm:item-center">
              <h2 className="text-[#6596A1] text-[16px] md:text-[16px] md:leading-[24px] lg:text-[22px] text-left sm:text-center lg:leading-[22px]  font-futura">
                The Art of UI Design
              </h2>
              <p className="font-lato text-[30px] pr-2 sm:p-0   leading-[33.22px] sm:mx-auto sm:tracking-wide  relative md:px-3 sm:w-[400px] w-[353px]   sm:text-center md:text-[30px] lg:text-[61px] md:w-[435px] md:h-[64px] lg:w-[885px] lg:h-[134px] font-extrabold lg:leading-[67px] md:leading-[32px] text-left ">
                Come for the <span className="text-[#6596A1]">features</span> of
                it. Stay for best ever help.
              </p>

              <p className="font-lato  align-middle  text-[14px] leading-[16.8px] w-[355px] sm:w-[400px]  text-[#7F7D7D] md:mx-auto  lg:text-[20px] md:w-[414px] md:h-[48px] md:text-[16px] md:leading-[24px] lg:leading-[28px] font-semibold lg:w-[521px] lg:h-[56px] text-left sm:text-center">
                We’ve been told it is possible to revolutionize the payment
                industry. We have not reinvented the wheel, we decide
              </p>
            </div>

            <div className="  w-[286px]  me-auto flex justify-between md:items-center sm:mx-auto h-[46px]">
              <button className="w-[122px] h-[46px] rounded-[8px] px-[5px] border border-[#6596A1] py-[8px] text-[#6596A1] text-[16px] leading-[22px] -tracking-tighter">
                Learn More
              </button>
              <button className="w-[148px] flex items-center justify-center   bg-[#6596A1] h-[46px] rounded-[8px] border border-[#6596A1] py-[8px] text-white text-[16px] leading-[22px] -tracking-tighter">
                <span>Get Started</span> <ArrowRightIcon className="size-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[806.03px] w-[352px] h-[190px] md:w-[422.9px] md:h-[228.64px] relative flex  mx-auto  lg:h-[436px]">
          <div className=" relative w-[167px] h-[128px] left-20 top-10 z-20 md:w-[201.38px] md:h-[154.3px] lg:w-[384px] lg:h-[294.23px] ">
            <img className="h-full w-full object-cover" src={plantAndChair} />
          </div>
          <div className=" z-30 w-[258.53px] h-[190.41px] lg:w-[592px] lg:h-[436px] md:w-[310.45px] md:h-[228.64px]">
            <img className="h-full object-cover w-full" src={twoPeople} />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HomeHeroSection;
