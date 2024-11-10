import React from "react";
import ContactUsOfficeHeard from "./ContactUsOfficeHeard";
import ContactUsOfficeImg from "./ContactUsOfficeImg";
import ContactUsOfficeText from "./ContactUsOfficeText";
import {motion} from "framer-motion"
const ContactUsOffice = () => {
  const officeAddress = [
    {
      id: 1,
      address: " Apt. 989 Jl. Gatot Soebroto No. 54, Bandar Lampung, KI 04867.",
      country: "Indea",
      addressWidth: "90%",
    },
    {
      id: 2,
      address: "4262 Hane Spring, North Joannieshire, AR 57693-7102.",
      country: "USA",
      addressWidth: "80%",
    },
  ];
  return (
    <div className=" mt-20">
      <ContactUsOfficeHeard />
      <div className="  overflow-hidden">
        <div className=" gap-5  lg:w-[1220px]  lg:h-[507px] flex flex-col md:flex-row  mt-10 mx-auto">
          <motion.div initial={{ x: -180, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once:true }} className="  flex gap-3 lg:gap-0 flex-col justify-evenly items-center lg:h-full">
            {officeAddress.map((office) => (
              <ContactUsOfficeText
                key={office.id}
                addressWidth={office.addressWidth}
                country={office.country}
                address={office.address}
              />
            ))}
          </motion.div>
          <motion.div  initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once:true }} className="w-full  h-full  ">
            <ContactUsOfficeImg />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsOffice;
