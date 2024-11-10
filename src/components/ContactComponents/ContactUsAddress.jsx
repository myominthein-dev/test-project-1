import React from "react";
import yellowEnvalope from "../../assets/ContactAssets/yellow-envalope.png";
import locationMark from "../../assets/ContactAssets/location-mark.png";
import phoneIcon from "../../assets/ContactAssets/phone-icon.svg";
import ContactUsAddressChildren from "./ContactUsAddressChildren";
import {motion} from "framer-motion"
const ContactUsAddress = () => {
  return (
    <div className="w-full flex item-center justify-center  mt-20">
      <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-3 ">
        <motion.div initial={{ y: 180, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once:true }} className="flex items-center justify-center">
        <ContactUsAddressChildren
          image={locationMark}
          addressHeard={"Head office"}
          addressText={"Apt. 172 2622 Hackett Ranch, New Savannaport, MD 22635"}
        />
        </motion.div>

        <motion.div initial={{ y: 180, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once:true }}  className="hidden  md:flex justify-center items-center">
        <ContactUsAddressChildren
          image={yellowEnvalope}
          addressHeard={"Our email adderss"}
          addressText={"nonneffirahou-9496@yopmail.com"}
        />
        </motion.div>
        <motion.div initial={{ y: 180, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once:true }}   className="hidden xl:block">
        <ContactUsAddressChildren
          image={phoneIcon}
          addressHeard={"Contact number"}
          addressText={"+69934526313"}
        />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUsAddress;
