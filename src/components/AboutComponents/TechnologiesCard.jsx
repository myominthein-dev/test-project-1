import React from "react";
import HtmlAvatar from "../../assets/AboutAssets/html-avatar.png";

const TechnologiesCard = ({ icon, label }) => {
  return (
    <>
      <div className="  inline-flex items-center  gap-[10px] justify-center h-[70px]   ">
        <img className=" opacity-50 size-[70px]" src={icon} alt="" />
        <p className=" font-futura uppercase tracking-wide  text-secondaryGrey  font-extrabold text-[25px]  ">
          {label}
        </p>
      </div>
    </>
  );
};

export default TechnologiesCard;
