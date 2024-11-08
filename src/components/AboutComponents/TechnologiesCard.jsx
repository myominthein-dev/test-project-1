import React from "react";
import HtmlAvatar from "../../assets/AboutAssets/html-avatar.png";
import Aos from "aos";
import "aos/dist/aos.css";
const TechnologiesCard = ({ icon, label, index }) => {
  Aos.init();
  return (
    <>
      <div
        data-aos="zoom-in"
        data-aos-delay={index * 600}
        data-aos-duration="9500"
        // data-aos-anchor-placement="center-center"
        className="  inline-flex items-center  gap-[10px] justify-center h-[70px]   "
      >
        <img className=" opacity-50 size-[70px]" src={icon} alt="" />
        <p className=" font-futura uppercase tracking-wide  text-secondaryGrey  font-extrabold text-[25px]  ">
          {label}
        </p>
      </div>
    </>
  );
};

export default TechnologiesCard;
