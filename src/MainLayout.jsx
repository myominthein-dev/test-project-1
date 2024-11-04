import React from "react";
import { Outlet } from "react-router-dom";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";

const MainLayout = () => {
  return (
    <main className=" flex flex-col min-h-screen ">
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </main>
  );
};

export default MainLayout;
