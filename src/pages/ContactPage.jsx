"use client";
import React, { useEffect } from "react";
import {
  ContactUsAddress,
  ContactUsHeroSection,
  ContactUsOffice,
} from "../components/ContactComponents";

import AOS from "aos"
import 'aos/dist/aos.css';

const ContactPage = () => {
  useEffect(() => {
    AOS.init()
  }, []);
  return (
    <section className="mx-auto w-[1440px] ">
      <ContactUsHeroSection />
      <ContactUsAddress />
      <ContactUsOffice />
    </section>
  );
};

export default ContactPage;
