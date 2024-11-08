import React from "react";
import yellowEnvalope from "../../assets/ContactAssets/yellow-envalope.png";
import locationMark from "../../assets/ContactAssets/location-mark.png";
import phoneIcon from "../../assets/ContactAssets/phone-icon.svg";
import ContactUsAddressChildren from "./ContactUsAddressChildren";

const ContactUsAddress = () => {
  return (
    <div className=" w-full p-5 mt-20">
      <div className=" flex flex-col gap-3 lg:flex-row justify-evenly items-center ">
        <ContactUsAddressChildren
          image={locationMark}
          addressHeard={"Head office"}
          addressText={"Apt. 172 2622 Hackett Ranch, New Savannaport, MD 22635"}
        />

        <ContactUsAddressChildren
          image={yellowEnvalope}
          addressHeard={"Our email adderss"}
          addressText={"nonneffirahou-9496@yopmail.com"}
        />
        <ContactUsAddressChildren
          image={phoneIcon}
          addressHeard={"Contact number"}
          addressText={"+69934526313"}
        />
      </div>
    </div>
  );
};

export default ContactUsAddress;
