import React from "react";
import girlTablet from "../../assets/BlogAssets/girl-using-tablet.png";
import {motion} from "framer-motion"
const BlogHero = () => {
  return (
    <motion.div initial={{ y: 200, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }} className="flex flex-col gap-14 max-w-[1200px] mx-auto px-5 md:px-0">
      <div className=" mx-auto flex justify-center items-center mt-10">
        <div className="w-full flex flex-col justify-center items-start">
          <div className=" flex  items-center justify-center">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              className="bg-white w-[220px] sm:w-[300px] md:w-[350px] px-3 py-2.5 rounded-s-lg rounded-e-none text-black-500 border-0 border-lightGrey  focus:border-white focus:outline-none focus:ring-2 focus:ring-blue-PRIMARY focus:border-none shadow-sm inset-y-1"
            />
            <button className="custom__button rounded-s-none">Subscribe</button>
          </div>
          <span className="text-start text-secondaryGrey text-xs">
            We care about our data in our{" "}
            <span className=" underline">privacy policy</span>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-20 md:gap-0 md:justify-between items-center md:flex-row py-5 px-0 md:px-5">
        <div className="flex-1">
          <div className="flex flex-col gap-5 items-start w-full md:w-[490px]">
            <motion.h2 initial={{ y: -200, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }} className="text-2xl md:text-3xl font-futura font-bold text-black-PRIMARY">
              How to start a blog <br />
              in 2024: The ultimate guide{" "}
            </motion.h2>
            <motion.p initial={{ x: -200, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 0.9 }}
           viewport={{ once: true }} className="text-base text-secondaryGrey font-lato font-normal">
              Discover expect tips, latest trends, and valuable insights in
              digital <br /> design and project management
            </motion.p>
            <motion.button initial={{ y: 200, opacity: 0 }}
           whileInView={{ y: 0, opacity: 1 }}
           transition={{ duration: 1.2 }}
           viewport={{ once: true }} className="custom__button active:scale-95 duration-150">
              Read More
            </motion.button>
          </div>
        </div>
        <div className="flex-1">
          <motion.img initial={{ x: 200, opacity: 0 }}
           whileInView={{ x: 0, opacity: 1 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
            src={girlTablet}
            alt="girl using tablet"
            className="w-full md:w-[577px] "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default BlogHero;
