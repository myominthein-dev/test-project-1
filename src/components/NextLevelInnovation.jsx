import Badge from "./Badge";
import Container from "./Container";
import manImg from "../assets/HomeAssets/young-man-drawing-lines.png";
import checkIcon from "../assets/check.png";
import {motion} from "framer-motion"
const textList = [
  "Enterprise-grade security",
  "99.9% guaranteed uptime SLA",
  "Designated customer success team",
];

const NextLevelInnovation = () => {
  return (
    <Container className="max-w-[1440px]  ">
      <div className="w-[355px] sm:w-full lg:max-w-[1216px] mx-auto sm:px-10 md:px-16 lg:p-16 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="w-full mx-auto flex flex-col item-center justify-center md:w-[371px] lg:w-[500px]">
          
          <div>
          <Badge label="Next-Level Innovation" />

          </div>
          <motion.h2 initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }} className="font-futura font-bold text-2xl md:text-[25px] lg:text-[31px] text-black-PRIMARY my-1">
            Demonstrate branding consequently think outside
          </motion.h2>
          <motion.p initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }} className="text-sm md:text-base text-secondaryGrey font-lato">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque{" "}
          </motion.p>
          
          <motion.ul initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}  className="mt-2">
            {textList.map((item) => (
              <li
                className="font-lato text-sm md:text-[16px] text-secondaryGrey flex items-center gap-2"
                key={item}
              >
                <span>
                  {" "}
                  <img src={checkIcon} alt="" />{" "}
                </span>
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
        <div className="mx-auto">
          <motion.img initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}  src={manImg} alt="Man Drawing Picture" />
        </div>
      </div>
    </Container>
  );
};
export default NextLevelInnovation;
