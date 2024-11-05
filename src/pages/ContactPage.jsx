import React from "react";
import {
  ContactUsAddress,
  ContactUsHeroSection,
} from "../components/ContactComponents";

const ContactPage = () => {
  return (
    <section className="mx-auto w-[1440px] ">
      <ContactUsHeroSection />
      <ContactUsAddress />
    </section>
  );
};

export default ContactPage;
