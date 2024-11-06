import React from "react";
import Container from "../components/Container";
import AboutUsHeroSection from "../components/AboutComponents/AboutUsHeroSection";
import TransformBusiness from "../components/AboutComponents/TransformBusiness";

const AboutPage = () => {
  return (
    <section>
      <Container className={" py-5 px-5"}>
        {/* Hero Section  */}
        <AboutUsHeroSection />
        <TransformBusiness />
      </Container>
    </section>
  );
};

export default AboutPage;
