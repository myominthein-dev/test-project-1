import React from "react";
import phoneIconSmall from "../../assets/ContactAssets/phone-icon-small.svg";
import mailIconSmall from "../../assets/ContactAssets/mail-icon-small.svg";

const ContactUsOfficeText = ({ country, address, addressWidth }) => {
  return (
    <div className="  p-8 rounded-[20px] text-[#7F7D7D] w-[387px] bg-[#F0F5F6]">
      <h1 className=" my-3 text-[#6596A1] text-[25px] font-[700] leading-[33.22px]">
        {country}
      </h1>
      <p
        className={`text-[16px] font-[400] leading-[24px] w-[${addressWidth}]`}
      >
        {address}
      </p>
      <div className=" flex gap-3 mt-2">
        <div className=" flex gap-1">
          {" "}
          <img className=" text-[#6596A1]" src={phoneIconSmall} alt="" />
          <span>+9699123456</span>
        </div>
        <div className=" flex gap-1">
          {" "}
          <img src={mailIconSmall} alt="" />
          <span>info@infoseo.com</span>
        </div>
      </div>
    </div>
  );
};

export default ContactUsOfficeText;
