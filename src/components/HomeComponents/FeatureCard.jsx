import { Tilt } from "@jdion/tilt-react";
import React from "react";

const FeatureCard = ({
  style,
  className,
  info: { image, title, paragraph, btnLabel },
}) => {
  return (
    <div
      style={style}
      className={`lg:w-[382.33px]  md:w-[371px]  shadow-lg drop-shadow-md  h-[211px] bg-[#F0F5F6] border border-[#F7F7F7] px-[32px] py-[24px] rounded-[20px] ${className}`}
    >
      <div className="w-[318.33px] h-[50px] flex justify-between">
        <img src={image} alt="gg" />
        <button className="w-[88px] h-[46px] rounded-[8px] border border-blue-PRIMARY hover:bg-blue-300/30  active:scale-95 duration-200">
          {btnLabel}
        </button>
      </div>

      <div className="w-[318.33px] h-[89px]">
        <h2 className="font-extrabold font-futura text-[25px] leading-[33.22px]">
          {title}
        </h2>
        <p className="font-lato font-semibold text-[#7F7D7D] text-[16px] leading-[24px] ">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
