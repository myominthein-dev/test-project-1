import React from "react";
import Container from "../components/Container";
import HeaderBlock from "../components/HeaderBlock";
import { BlogHero } from "../components/blog";
const BlogPage = () => {
  return (
    <section>
      <Container className={"py-5"}>
        <div className="bg-gradient-to-b from-[#CCDCE0] to-[#FFFFFF]">
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
      </Container>
    </section>
  );
};
export default BlogPage;
