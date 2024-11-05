import React from "react";
import Container from "../Container";
import vactor from "../../assets/logo.svg";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./Nav";
const HeaderComponent = () => {
  const location = useLocation();
  const path = location.pathname;
  const nav = useNavigate();
  const navHandler = (route) => {
    nav(route);
  };
  return (
    <Container
      className={
        "flex bg-white flex-col px-3 items-center h-[72px] justify-center"
      }
    >
      <header className="flex h-[32px] w-full max-w-[1412px] justify-between">
        <nav>
          <img src={vactor} />
        </nav>

        <navbar className="w-[250px] d-none flex justify-between text-[14px] leading-[22px] font-lato h-[22px]">
          <span className="cursor-pointer" onClick={() => navHandler("/")}> 
            <Nav path={path} origin="/" text={"Home"} />
          </span>
          <span className="cursor-pointer" onClick={() => navHandler("/about")}> 
            <Nav path={path} origin="/about" text={"About"} />
          </span>
          <span className="cursor-pointer" onClick={() => navHandler("/blog")}> 
            <Nav path={path} origin="/blog" text={"Blog"} />
          </span>
          <span className="cursor-pointer" onClick={() => navHandler("/contact")}> 
            <Nav path={path} origin="/contact" text={"Contact"} />
          </span>
        </navbar>
      </header>
    </Container>
  );
};

export default HeaderComponent;
