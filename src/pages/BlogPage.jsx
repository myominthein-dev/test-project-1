import React from "react";
import Container from "../components/Container";
import HeaderBlock from "../components/HeaderBlock";
import { BlogCardGroup, BlogHero, BlogPost } from "../components/blog";
const BlogPage = () => {
  return (
    <section>
      <Container>
        <div className=" py-20">
          <HeaderBlock
            label={"Our Blog"}
            firstColor="black-900"
            secondColor={"blue"}
            firstHeadline={"Tales and"}
            secondHeadline={"discussions"}
          >
            Subscribe to learn about product features, the latest in technology,
            solutions and updates.
          </HeaderBlock>
          <BlogHero />
        </div>
        <BlogPost />
        <BlogCardGroup />
      </Container>
    </section>
  );
};
export default BlogPage;
