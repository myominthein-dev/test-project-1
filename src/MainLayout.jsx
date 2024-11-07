import React from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponents/HeaderComponent";

const MainLayout = () => {
  return (
    <main className=" flex flex-col min-h-screen ">
      <HeaderComponent />
        <div className="bg-gradient-to-b from-[#CCDCE0] to-[#FFFFFF]">
            <Outlet/>
        </div>
      <FooterComponent />
    </main>
  );
};

export default MainLayout;
