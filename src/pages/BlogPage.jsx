import React from "react";
import Container from "../components/Container";
import HeaderBlock from "../components/HeaderBlock";
import { BlogCardGroup, BlogHero, BlogPost } from "../components/blog";
import {motion} from "framer-motion"
const BlogPage = () => {
  return (
    <section>
      <Container>
        <div className=" py-5 sm:py-7 lg:py-20">
        <div className=" flex px-5  lg:w-[864px] md:w-[764px] gap-2.5 mx-auto flex-col justify-center md:items-center md:text-center text-left  ">
            <motion.h1 initial={{ y: -200, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }} className=" text-blue-PRIMARY lg:text-[22px] md:text-[16px] font-medium  font-futura ">
              Our Blog
            </motion.h1>
            <motion.p initial={{ x: -200, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.9 }}
           viewport={{ once: true }} className=" lg:w-3/4 md:text-[30px] text-[25px] md:w-[435px] font-bold font-futura lg:text-6xl ">
              Tales and{" "}
              <span className="text-blue-PRIMARY ">discussions</span>
            </motion.p>
            <motion.p initial={{ y: 200, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }} className=" font-lato text-[#7F7D7D] lg:w-[521px]  md:w-[414px] lg:text-[20px] md:text-[16px] text-[14px] ">
              The only corporate card and spent management platform designed to
              help you spend less.
            </motion.p>
          </div>
          <BlogHero />
        </div>
        <BlogPost />
        <BlogCardGroup />
      </Container>
    </section>
  );
};
export default BlogPage;
