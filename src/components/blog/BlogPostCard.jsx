import React from "react";

const BlogPostCard = ({ imgSrc, date, cardTitle, cardParagraph }) => {
  return (
    <div className=" col-span-1 shadow-lg rounded-lg hover:-translate-y-1 duration-200">
      <div>
        <img
          src={imgSrc}
          className=" w-full object-contain object-center h-48"
        />
      </div>
      <div className="bg-lightBlue">
        <div className="flex flex-col gap-3 items-start  p-5 max-w-[531px]">
          <span className="text-xs text-secondaryGrey font-lato font-light">
            {date}
          </span>
          <h3 className=" font-futura font-medium text-xl md:text-2xl text-black-PRIMARY">
            {cardTitle}
          </h3>
          <p className=" font-lato font-normal text-base text-secondaryGrey">
            {cardParagraph}
          </p>
          <button className="border border-blue-PRIMARY rounded-lg px-5 py-2.5 font-lato bg-transparent text-blue-PRIMARY">
            Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
