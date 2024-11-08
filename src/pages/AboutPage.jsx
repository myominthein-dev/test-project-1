import React from "react";
import Container from "../components/Container";
import AboutUsHeroSection from "../components/AboutComponents/AboutUsHeroSection";
import TransformBusiness from "../components/AboutComponents/TransformBusiness";
import Ambition from "../components/AboutComponents/Ambition";

const AboutPage = () => {
  return (
    <section>
      {/* Hero Section  */}
      <AboutUsHeroSection />
      <TransformBusiness />
      <Ambition />
    </section>
  );
};

export default AboutPage;
