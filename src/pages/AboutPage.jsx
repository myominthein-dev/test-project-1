import React from "react";
import Container from "../components/Container";
import AboutUsHeroSection from "../components/AboutComponents/AboutUsHeroSection";
import TransformBusiness from "../components/AboutComponents/TransformBusiness";

const AboutPage = () => {
  return (
    <section>
      {/* Hero Section  */}
      <AboutUsHeroSection />
      <TransformBusiness />
    </section>
  );
};

export default AboutPage;
