import React from "react";
import HeaderBlock from "../HeaderBlock";
import happyWoman from "../../assets/HomeAssets/happy-woman-making-heart-shape.png";
import yellowMan from "../../assets/HomeAssets/young-man-drawing-lines.png";
import blueFemaleStudent from "../../assets/HomeAssets/blue-female-student.png";
import FeatureCard from "./FeatureCard";
import { CircleIcon, DotIcon, EllipsisIcon } from "lucide-react";
import { motion } from "framer-motion";

const popUpVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const cards = [
  {
    id: 1,
    image: happyWoman,
    btnLabel: "View All",
    title: "Wireless",
    paragraph: "Enim nec rhoncus volutpat nullam eros sapien pharetra.",
  },
  {
    id: 2,
    image: yellowMan,
    btnLabel: "View All",
    title: "Synergistic",
    paragraph: "Neque ut integer nulla tellus semper amet id scelerisque eros.",
  },
  {
    id: 3,
    image: blueFemaleStudent,
    btnLabel: "View All",
    title: "Distributed",
    paragraph: "Aliquet et cras nam sed mauris laoreet bibendum et.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="max-w-[1440px] h-[456px]  mt-16 w-[355px] flex flex-col items-center justify-evenly sm:w-full  mx-auto   ">
      <div className="w-full h-[184px] ">
        <div className="sm:text-center h-full">
          <HeaderBlock
            secondColor={"blue"}
            firstHeadline={"Crafting Seamless"}
            secondHeadline={" Experiences"}
            label={"The Best UI"}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </HeaderBlock>
        </div>
      </div>
      <div className="max-w-[1211px] grid gap-3 md:grid-cols-2 xl:grid-cols-3 h-[211px] ">
        <motion.div
          className="md:col-span-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={popUpVariants}
        >
          <FeatureCard info={cards[0]} />
        </motion.div>

        <motion.div
          className="md:col-span-1 hidden md:block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={popUpVariants}
        >
          <FeatureCard info={cards[1]} />
        </motion.div>

        <motion.div
          className="md:col-span-1 hidden xl:block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          variants={popUpVariants}
        >
          <FeatureCard info={cards[2]} />
        </motion.div>
      </div>
      <div className=" w-full flex items-center justify-center ">
        <div className="flex">
          <DotIcon className="-mr-4 text-[#6596A1]" />
          <DotIcon className="-mr-4 text-[#C4C4C4]" />
          <DotIcon className="text-[#C4C4C4]" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
