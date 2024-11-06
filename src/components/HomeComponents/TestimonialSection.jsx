import React from "react";
import HeaderBlock from "../HeaderBlock";
import happyWoman from "../../assets/HomeAssets/happy-woman-making-heart-shape.png";
import yellowMan from "../../assets/HomeAssets/yellow-young-happy-man.png";
import blueFemaleStudent from "../../assets/HomeAssets/blue-female-student.png";
import FeatureCard from "./FeatureCard";
import { CircleIcon, DotIcon, EllipsisIcon } from "lucide-react";

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
    <section className="max-w-[1440px] flex flex-col items-center justify-evenly w-11/12 mx-auto   h-[763px]">
      <div className="w-full h-[184px] ">
        <div className="text-center h-full">
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
      <div className="w-[1211px] flex justify-between  h-[211px] ">
        {cards.map((c) => (
          <FeatureCard key={c.id} info={c} />
        ))}
      </div>
      <div className=" w-full flex items-center justify-center ">
        <div className="flex">
          <DotIcon
            className="-mr-4 text-[#6596A1]"
          />
          <DotIcon className="-mr-4 text-[#C4C4C4]" />
          <DotIcon className="text-[#C4C4C4]" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
