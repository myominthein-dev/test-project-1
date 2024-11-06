import React from "react";
import Badge from "../components/Badge";
import HeaderBlock from "../components/HeaderBlock";
import MasterfulDesign from "../components/MasterfulDesign";
import NextLevelInnovation from "../components/NextLevelInnovation";
import HomeHeroSection from "../components/HomeComponents/HomeHeroSection";
import TestimonialSection from "../components/HomeComponents/TestimonialSection";
import MagicUnleash from "../components/MagicUnleash";
import Testimonial from "../components/Testimonial";
import Action from "../components/Action";

const HomePage = () => {
  return (
    <section>
      <HomeHeroSection/>
      <TestimonialSection/>
      <MasterfulDesign />
      <NextLevelInnovation />
      <MagicUnleash />
      <Testimonial />
      <Action />
    </section>
  );
};

export default HomePage;
