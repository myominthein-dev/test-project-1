import React from "react";
import officeBuilding from "../../assets/ContactAssets/3d-office-building.png";

const ContactUsOfficeImg = () => {
  return (
    <div className="w-full h-full ">
      <img
        className=" object-contain w-full h-full"
        src={officeBuilding}
        alt=""
      />
    </div>
  );
};

export default ContactUsOfficeImg;
