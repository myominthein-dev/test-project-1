import React from "react";
import Container from "./Container";
import logo from "../assets/logo.svg";
import placeholder from "../assets/HomeAssets/placeholder.svg";

const products = ["Features", "Integrations", "Enterprise", "Solutions"];
const quickLinks = ["About us", "Contact us", "Login", "Products"];

const FooterComponent = () => {
  const placeHolderCount = [1, 2, 3, 4];
  return (
    <Container className="bg-[#f7f7f7] mt-14">
      <div className="max-w-[1440px] mx-auto p-16">
        <div className="grid grid-cols-6 gap-16 md:gap-6">
          <div className="flex flex-col gap-6 col-span-4 md:col-span-1">
            <img src={logo} className="w-5" alt="Logo" />
            <p className="font-lato text-base text-secondaryGrey">
              Generate outside the box thinking with the possibility to target
              the low.
            </p>
            <div className="flex gap-6">
              {placeHolderCount.map((item) => (
                <img
                  src={placeholder}
                  className=""
                  key={item}
                  alt="Placeholder"
                />
              ))}
            </div>
          </div>
          <div className="col-span-1 md:col-span-1"></div>
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
            <h2 className="font-futura text-2xl text-secondaryBlue font-bold">
              Products
            </h2>
            <div>
              {products.map((item) => (
                <p
                  className="mb-3 font-lato text-base text-secondaryGrey"
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 col-span-4 md:col-span-1">
            <h2 className="font-futura text-2xl text-secondaryBlue font-bold">
              Quick links
            </h2>
            <div>
              {quickLinks.map((item) => (
                <p
                  className="mb-3 font-lato text-base text-secondaryGrey"
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
            <h2 className="font-futura text-2xl text-secondaryBlue font-bold">
              Products
            </h2>
            <div>
              {products.map((item) => (
                <p
                  className="mb-3 font-lato text-base text-secondaryGrey"
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
            <h2 className="font-futura text-2xl text-secondaryBlue font-bold">
              Products
            </h2>
            <div>
              {products.map((item) => (
                <p
                  className="mb-3 font-lato text-base text-secondaryGrey"
                  key={item}
                >
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-16">
          <img src={logo} className="w-5 mb-4" alt="Logo" />
          <p className="font-lato text-secondaryGrey">
            ©{new Date().getFullYear()} MMSConnection@MCF3. All Rights Reserved.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default FooterComponent;
