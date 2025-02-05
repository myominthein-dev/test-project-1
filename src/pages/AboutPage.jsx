import React from "react";

import AboutUsHeroSection from "../components/AboutComponents/AboutUsHeroSection";
import TransformBusiness from "../components/AboutComponents/TransformBusiness";
import Ambition from "../components/AboutComponents/Ambition";
import AboutFounder from "../components/AboutComponents/AboutFounder";
import Techonologies from "../components/AboutComponents/Techonologies";

const AboutPage = () => {
  return (
    <section className="overflow-hidden">
      {/* Hero Section  */}
      <AboutUsHeroSection />
      <div className=" flex flex-col">
        <TransformBusiness />
        <Ambition />
        <AboutFounder />
        <Techonologies />
      </div>
    </section>
  );
};

export default AboutPage;
