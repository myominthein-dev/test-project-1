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
        <FeatureCard className={'md:col-span-1'} info={cards[0]} />
        <FeatureCard className={'md:col-span-1 hidden lg:block'} info={cards[1]} />
        <FeatureCard className={'md:col-span-1 hidden xl:block'} info={cards[2]} />
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
