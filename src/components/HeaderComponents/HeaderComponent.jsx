import React, { useState } from "react";
import Container from "../Container";
import vactor from "../../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./Nav";
import { Menu, X } from "lucide-react";
const HeaderComponent = () => {
  const location = useLocation();
  const path = location.pathname;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const nav = useNavigate();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const navHandler = (route) => {
    nav(route);
    setIsSidebarOpen(false);
  };

  return (
    <Container
      className={
        "flex bg-white  flex-col top-0 z-50  sticky px-3 items-center  h-[72px] justify-center"
      }
    >
      <header className="flex h-[32px] relative w-[355px] sm:w-full  md:max-w-[770px]    lg:max-w-[1412px] justify-between">
        <nav className="cursor-pointer" onClick={()=>navHandler("/")}>
          <img src={vactor} />
        </nav>

       

        <button
          onClick={toggleSidebar}
          className="md:hidden   h-full w-10 transition-all duration-200"
        >
          <Menu
            className={`absolute top-0 right-0 transition-all  duration-300 ease-in-out ${
              isSidebarOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
            }`}
            size={30}
          />
          <X
            className={`absolute top-0 right-0 transition-all duration-300 ease-in-out ${
              isSidebarOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
            size={30}
          />
        </button>

        <navbar
          className={`md:w-[250px] text-md  bg-white rounded-md w-full transition-all md:relative md:top-0 duration-300 ease-in-out top-14 p-3 md:p-0  absolute h-auto   md:flex justify-between md:text-[14px] leading-[22px] font-lato md:h-[22px] ${
            isSidebarOpen
              ? " opacity-100  translate-y-0  h-auto"
              : "max-h-0 opacity-0 z-0 pointer-events-none md:pointer-events-auto  -translate-y-full md:translate-y-0 md:max-h-none md:opacity-100"
          }`}
        >
          <span className="cursor-pointer  " onClick={() => navHandler("/")}>
            <Nav path={path} origin="/" text={"Home"} />
          </span>
          <span className="cursor-pointer" onClick={() => navHandler("/about")}>
            <Nav path={path} origin="/about" text={"About"} />
          </span>
          <span className="cursor-pointer" onClick={() => navHandler("/blog")}>
            <Nav path={path} origin="/blog" text={"Blog"} />
          </span>
          <span
            className="cursor-pointer"
            onClick={() => navHandler("/contact")}
          >
            <Nav path={path} origin="/contact" text={"Contact"} />
          </span>
        </navbar>
      </header>
    </Container>
  );
};

export default HeaderComponent;
