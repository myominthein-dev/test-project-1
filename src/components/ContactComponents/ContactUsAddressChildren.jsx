import React from "react";

const ContactUsAddressChildren = ({ image, addressHeard, addressText }) => {
  console.log(image, addressHeard, addressText);

  return (
    <div className=" drop-shadow-md flex justify-around  items-center bg-[#F0F5F6]  w-full lg:w-[386px] h-[181px] rounded-[20px]">
      <div className="w-[56px] h-[56px]">
        <img className="w-full h-full" src={image} alt="" />
      </div>
      <div className=" w-[68%] flex flex-col justify-center items-start gap-1">
        <h3 className=" text-[25px] font-[700] leading-[33.22px] text-[#223236]">
          {addressHeard}
          <span className=" ms-1">:</span>
        </h3>
        <span className=" text-[16px] font-[600]  text-[#7F7D7D]">
          {addressText}
        </span>
      </div>
    </div>
  );
};

export default ContactUsAddressChildren;
