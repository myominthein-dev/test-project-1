import React from "react";
import BlogPostCard from "./BlogPostCard";
import Phone from "../../assets/BlogAssets/chart-in-iphone.png";
import Article from "../../assets/BlogAssets/blog-post-article.png";
import SaleBox from "../../assets/BlogAssets/sale-box.png";
import DeskStop from "../../assets/BlogAssets/contents-in-desktop.png";
import BlogIndicator from "./BlogIndicator";
import { motion } from "framer-motion";

const BlogPost = () => {
  const postLists = [
    {
      id: 1,
      imgSrc: Phone,
      date: "2 Apr.2023",
      cardTitle: "Linear software update and testing",
      cardParagraph:
        "Introduction to wireframing and it’s principles. Learn from the best in the industry.",
    },
    {
      id: 2,
      imgSrc: DeskStop,
      date: "13 Jan.2023",
      cardTitle: "How collaboration make us better designers",
      cardParagraph:
        "Collaboration can make our teams stronger, and our individuals designs better.",
    },
    {
      id: 3,
      imgSrc: SaleBox,
      date: "14 May.2024",
      cardTitle: "Linear software update and testing",
      cardParagraph:
        "Introduction to wireframing and it’s principles. Learn from the best in the industry.",
    },
    {
      id: 4,
      imgSrc: Article,
      date: "14 May.2024",
      cardTitle: "Linear software update and testing",
      cardParagraph:
        "Introduction to wireframing and it’s principles. Learn from the best in the industry.",
    },
  ];
  return (
    <section className="md:w-[640px] lg:w-full  mx-auto w-[355px]  md:px-0">
      <div className="flex flex-col gap-10 md:gap-20 py-10 md:px-5 max-w-[1400px] md:py-20 mx-auto px-0 ">
        <h2 className="text-2xl md:text-3xl font-futura font-bold text-black-PRIMARY">
          New Blogs For You
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-5">
          {postLists.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.2, // Add delay based on index for staggered effect
              }}
              viewport={{ once: true }}
            >
              <BlogPostCard
                imgSrc={post.imgSrc}
                date={post.date}
                cardTitle={post.cardTitle}
                cardParagraph={post.cardParagraph}
              />
            </motion.div>
          ))}
        </div>
        <BlogIndicator />
      </div>
    </section>
  );
};

export default BlogPost;
