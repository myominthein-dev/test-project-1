import React from "react";
import Badge from "../Badge";
import {motion} from "framer-motion"

const ContactUsOfficeHeard = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <Badge label={"Our Office"} />
      <motion.h1 initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once:true }}   className="  text-[30px] lg:text-[50px] my-5  font-[700] leading-[66.45px]">
        <span className=" text-[#6596A1]">Where</span> we are?
      </motion.h1>
      <motion.p initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once:true }} className=" w-[350px] text-xs lg:text-[16px]  lg:w-[478px] text-center  font-[600] leading-[24px] text-[#7F7D7D]">
        We are part of th LACS creative community with 3 spaces in the lisbon
        region.
      </motion.p>
    </div>
  );
};

export default ContactUsOfficeHeard;
