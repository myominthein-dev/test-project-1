import React from "react";
import Badge from "../Badge";

const ContactUsOfficeHeard = () => {
  return (
    <div className=" flex justify-center items-center flex-col">
      <Badge label={"Our Office"} />
      <h1 className="  text-[50px] my-5  font-[700] leading-[66.45px]">
        <span className=" text-[#6596A1]">Where</span> we are?
      </h1>
      <p className=" text-[16px]  w-[478px] text-center  font-[600] leading-[24px] text-[#7F7D7D]">
        We are part of th LACS creative community with 3 spaces in the lisbon
        region.
      </p>
    </div>
  );
};

export default ContactUsOfficeHeard;
