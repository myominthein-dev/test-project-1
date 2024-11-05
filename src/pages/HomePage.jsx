import React from "react";
import Badge from "../components/Badge";
import HeaderBlock from "../components/HeaderBlock";
import MasterfulDesign from "../components/MasterfulDesign";
import NextLevelInnovation from "../components/NextLevelInnovation";
import HomeHeroSection from "../components/HomeComponents/HomeHeroSection";
import TestimonialSection from "../components/HomeComponents/TestimonialSection";

const HomePage = () => {
  return (
    <section>
      <HomeHeroSection/>
      <TestimonialSection/>
      <MasterfulDesign />
      <NextLevelInnovation />
    </section>
  );
};

export default HomePage;
