import React from "react";
import Container from "../Container";
import desktopComputer from "../../assets/AboutAssets/desktop-computer.png";
import Button from "./Button";
import {motion} from "framer-motion"
const TransformBusiness = () => {
  
  return (
    <section className="">
      <Container className={"py-5 px-5 flex justify-center"}>
        <div className=" flex md:flex-row flex-col gap-[10px] lg:w-[1220px] md:w-[764px] w-[352px] md:gap-[20px]  justify-between  text-left items-center ">
          <div className="flex flex-col  gap-2.5 lg:w-[491px] md:w-[372px] w-[352px] ">
            <motion.h1 initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }} className=" font-futura font-bold text-2xl   md:text-[22px] text-[20px] lg:text-[31px]  my-1 leading-[41.2px] sm:tracking-wide">
              Transforming <br className="" /> business since 2014
            </motion.h1>
            <div
              className="  flex flex-col gap-2.5 text-[#7F7D7D] tracking-tight leading-[24px]
"
            >
              <motion.p  initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }} className=" lg:w-[391px]  w-[334px] md:text-[16px] text-[14px]   ">
                The passion with which we work allows us to transform a problem
                into a challenge!
              </motion.p>
              <motion.p initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }} className=" lg:w-[391px] md:w-[371px] w-[334px] md:text-[16px] text-[14px] ">
                Technology has made our lives easier in so many ways, which
                include a more connivent.
              </motion.p>
            </div>
            <Button className={"mt-5 items-end"} label={"Learn More"} />
          </div>

          <div className=" flex flex-col md:flex-row items-center justify-center md:mt-0 mt-5   ">
            <motion.img initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once:true }}
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
