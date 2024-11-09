import React from "react";
import Container from "../Container";
import desktopComputer from "../../assets/AboutAssets/desktop-computer.png";
import Button from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";

const TransformBusiness = () => {
  Aos.init();
  return (
    <section className="">
      <Container className={"py-5 px-5 flex justify-center"}>
        <div className=" flex md:flex-row flex-col gap-[10px] lg:w-[1220px] md:w-[764px] w-[352px] md:gap-[20px]  justify-between  text-left items-center ">
          <div
            data-aos="flip-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="cubic-bezier(0.1, -0.6, 0.2, 0)"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-center"
            className="flex flex-col  gap-2.5 lg:w-[491px] md:w-[372px] w-[352px] "
          >
            <h1 className=" font-futura font-bold text-2xl   md:text-[22px] text-[20px] lg:text-[31px]  my-1 leading-[41.2px] sm:tracking-wide">
              Transforming <br className="" /> business since 2014
            </h1>
            <div
              className="  flex flex-col gap-2.5 text-[#7F7D7D] tracking-tight leading-[24px]
"
            >
              <p className=" lg:w-[391px]  w-[334px] md:text-[16px] text-[14px]   ">
                The passion with which we work allows us to transform a problem
                into a challenge!
              </p>
              <p className=" lg:w-[391px] md:w-[371px] w-[334px] md:text-[16px] text-[14px] ">
                Technology has made our lives easier in so many ways, which
                include a more connivent.
              </p>
            </div>
            <Button className={"mt-5 items-end"} label={"Learn More"} />
          </div>

          <div
            data-aos="flip-right"
            // data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="cubic-bezier(0.1, -0.6, 0.2, 0)"
            data-aos-mirror="true"
            data-aos-anchor-placement="top-center"
            className=" md:flex items-center justify-center md:mt-0 mt-5  hidden "
          >
            <img
              className="lg:w-[531px] md:w-[372px] w-[352px]"
              src={desktopComputer}
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TransformBusiness;
