import React from "react";
import Container from "../components/Container";
import AboutUsHeroSection from "../components/AboutUsHeroSection";

const AboutPage = () => {
  return (
    <section>
      <Container className={" py-5 px-5"}>
        {/* Hero Section  */}
        <AboutUsHeroSection />
      </Container>
    </section>
  );
};

export default AboutPage;
