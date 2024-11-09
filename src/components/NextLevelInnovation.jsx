import Badge from "./Badge";
import Container from "./Container";
import manImg from "../assets/HomeAssets/young-man-drawing-lines.png";
import checkIcon from "../assets/check.png";

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
          <h2 className="font-futura font-bold text-2xl md:text-[25px] lg:text-[31px] text-black-PRIMARY my-1">
            Demonstrate branding consequently think outside
          </h2>
          <p className="text-sm md:text-base text-secondaryGrey font-lato">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna
            vulputate pellentesque{" "}
          </p>
          
          <ul className="mt-2">
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
          </ul>
        </div>
        <div className="mx-auto">
          <img src={manImg} alt="Man Drawing Picture" />
        </div>
      </div>
    </Container>
  );
};
export default NextLevelInnovation;
