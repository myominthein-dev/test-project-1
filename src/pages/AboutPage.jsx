import React from "react";
import Container from "../components/Container";
import AboutUsHeroSection from "../components/AboutComponents/AboutUsHeroSection";
import TransformBusiness from "../components/AboutComponents/TransformBusiness";
import Ambition from "../components/AboutComponents/Ambition";
import AboutFounder from "../components/AboutComponents/AboutFounder";

const AboutPage = () => {
  return (
    <section>
      {/* Hero Section  */}
      <AboutUsHeroSection />
      <div className=" flex flex-col gap-[100px]">
        <TransformBusiness />
        <Ambition />
        <AboutFounder />
      </div>
    </section>
  );
};

export default AboutPage;
