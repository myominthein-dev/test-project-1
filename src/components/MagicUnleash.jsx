import Container from "./Container";
import DesignCard from "./DesignCard";
import HeaderBlock from "./HeaderBlock";

import cardImgOne from "../assets/HomeAssets/gears-and-magnifying-glass.png";
import cardImgTwo from "../assets/HomeAssets/columns-charts.png";
import cardImgThree from "../assets/HomeAssets/laptop-and-rocket.png";

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const cards = [
  {
    id: 1,
    tag: "Marketing",
    date: "2 Apr. 2024",
    imgSrc: cardImgOne,
    headline: "Organize your digital assets with a methodology.",
    paragraph:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate.",
  },
  {
    id: 2,
    tag: "Design",
    date: "2 Apr. 2024",
    imgSrc: cardImgTwo,
    headline: "Gestalt psychology in UI/UX design and beyond.",
    paragraph:
      "Bring to the table win-win strategies to proactive domination. At the end of the day, going forward and approaches to win win situation.",
  },
  {
    id: 3,
    tag: "Development",
    date: "2 Apr. 2024",
    imgSrc: cardImgThree,
    headline: "Faster ways to reach your customers and their needs.",
    paragraph:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test override the digital divide and dried.",
  },
];

const MagicUnleash = () => {
  return (
    <Container className="max-w-[1440px] py-[100px] px-5 lg:py-0">
      <HeaderBlock
        label="Magic Unleashed"
        firstColor="blue"
        firstHeadline="A New Era of"
        secondColor="black"
        secondHeadline="Design Excellence"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </HeaderBlock>
      <div className="w-full md:w-[764px] lg:w-full p-0 max-w-[1216px] mt-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              variants={cardVariants}
            >
              <DesignCard
                img={card.imgSrc}
                tag={card.tag}
                date={card.date}
                headline={card.headline}
                paragraph={card.paragraph}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default MagicUnleash;
