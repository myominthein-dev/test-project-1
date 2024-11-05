import React from "react";
import Container from "../Container";
import BlogPostCard from "./BlogPostCard";
import Phone from "../../assets/BlogAssets/chart-in-iphone.png";
import Article from "../../assets/BlogAssets/blog-post-article.png";
import SaleBox from "../../assets/BlogAssets/sale-box.png";
import DeskStop from "../../assets/BlogAssets/contents-in-desktop.png";

const BlogPost = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-10 md:gap-20 py-10 md:py-20 ">
          <h2 className="text-2xl md:text-3xl font-futura font-bold text-black-PRIMARY">
            New Blogs For You
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            <BlogPostCard
              imgSrc={Phone}
              date={"2 Apr.2023"}
              cardTitle={"Linear software update and testing"}
              cardParagraph={
                "Introduction to wireframing and it’s principles. Learn from the best in the industry."
              }
            />
            <BlogPostCard
              imgSrc={DeskStop}
              date={"13 Jan.2023"}
              cardTitle={"How collaboration make us better designers"}
              cardParagraph={
                "Collaboration can make our teams stronger, and our individuals designs better."
              }
            />
            <BlogPostCard
              imgSrc={SaleBox}
              date={"14 May.2024"}
              cardTitle={"Linear software update and testing"}
              cardParagraph={
                "Introduction to wireframing and it’s principles. Learn from the best in the industry."
              }
            />
            <BlogPostCard
              imgSrc={Article}
              date={"14 May.2024"}
              cardTitle={"Linear software update and testing"}
              cardParagraph={
                "Introduction to wireframing and it’s principles. Learn from the best in the industry."
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlogPost;
