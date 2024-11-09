import React from "react";
import womanWithLaptop from "../../assets/AboutAssets/woman-with-laptop.png";
import Container from "../Container";
import Button from "./Button";
import Aos from "aos";
import "aos/dist/aos.css";

const Ambition = () => {
  Aos.init();
  return (
    <section className="">
      <Container
        className={"py-5 px-5 flex justify-center relative overflow-hidden"}
      >
        <div className=" flex md:flex-row flex-col gap-[10px] lg:w-[1220px] md:w-[764px] w-[352px] md:gap-[20px]  md:justify-between  text-left items-center ">
          <div
            data-aos="fade-down-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-out-sine"
            data-aos-mirror="true"
            className=" flex items-center justify-center md:mt-0 mt-5 "
          >
            <img
              className="lg:w-[577px] md:w-[372px] w-[352px]"
              src={womanWithLaptop}
              alt=""
            />
          </div>
          <div
            data-aos="fade-down-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1500"
            data-aos-easing="ease-out-sine"
            data-aos-mirror="true"
            className="flex flex-col  gap-2.5 lg:w-[577px] md:w-[372px] w-[352px] "
          >
            <h1 className=" font-futura font-bold text-2xl   md:text-[22px] text-[20px] lg:text-[31px]  my-1 leading-[41.2px] tracking-wider ">
              What to expect from <br className=" md:inline-block hidden" /> us
            </h1>

            <p className=" lg:w-[391px]  w-[334px]  md:text-[16px] text-[14px] leading-[24px]  text-[#7F7D7D] tracking-tight    ">
              Our ambition is to develop a lasting relationship with the
              customer and become their trusted technology partner. We seek
              continuous improvement of process.
            </p>

            <Button className={"mt-5 items-end "} label={"Learn More"} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Ambition;
