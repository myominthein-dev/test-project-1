import React from "react";
import { HiPlus } from "react-icons/hi2";
const BlogCard = ({ card }) => {
  return (
    <div className=" col-span-1 bg-lightBlue rounded-2xl hover:-translate-y-1 duration-200 p-5">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="text-xs bg-white border border-lightGrey inline-block px-4 py-2 rounded-[20px] text-blue-PRIMARY  font-futura">
            {card.label}
          </div>
          <button className="w-6 h-6 bg-blue-PRIMARY text-white rounded-full flex justify-center items-center">
            <span>
              <HiPlus className="w-3 h-3" />
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex flex-col gap-3 max-w-[299px]">
            <h4 className="font-futura font-normal text-secondaryGrey text-base">
              {card.subTitle}
            </h4>
            <h2 className="font-futura font-semibold text-xl md:text-3xl text-black-PRIMARY">
              {card.Title}
            </h2>
          </div>
          <button className="custom__button mt-auto">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
