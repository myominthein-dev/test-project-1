import React from "react";
import Container from "../Container";
import TechnologiesCard from "./TechnologiesCard";
import ReactAvatar from "../../assets/AboutAssets/react-avatar.png";
import HtmlAvatar from "../../assets/AboutAssets/html-avatar.png";
import CssAvatar from "../../assets/AboutAssets/css-avatar.png";
import WordpressAvatar from "../../assets/AboutAssets/wordpress-avatar.png";

const Techonologies = () => {
  const technoList = [
    {
      name: "HTML",
      icon: HtmlAvatar,
    },
    {
      name: "CSS",
      icon: CssAvatar,
    },
    {
      name: "Wordpress",
      icon: WordpressAvatar,
    },
    {
      name: "React Native",
      icon: ReactAvatar,
    },
  ];
  return (
    <section>
      <Container className={"py-5 px-5 flex justify-center "}>
        <div className=" flex flex-col items-center gap-[50px] lg:w-[1220px] md:w-[764px] w-[352px]">
          <h1 className=" w-[343px] font-futura font-bold text-secondaryBlue lg:text-[50px] md:text-[30px] text-[25px] leading-[66.45px] tracking-wide text-center">
            Technologies
          </h1>

          <div className=" grid w-full lg:grid-cols-4 justify-between   lg:gap-0 md:gap-8 gap-4 md:grid-cols-2 grid-cols-1   py-[10px] px-[20px]">
            {technoList.map((item, index) => (
              <TechnologiesCard
                key={index}
                icon={item.icon}
                label={item.name}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Techonologies;
