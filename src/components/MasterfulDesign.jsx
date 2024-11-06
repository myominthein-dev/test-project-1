import Container from "./Container";
import HeaderBlock from "./HeaderBlock";
import womanImg from "../assets/HomeAssets/boba-woman-with-magnifying-glass-on-a-search 1.svg";

const check = [
  {
    id: 1,
    header: "Explore ideas together",
    paragraph:
      "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
  {
    id: 2,
    header: "Bring those ideas to life",
    paragraph:
      "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
  {
    id: 3,
    header: "Ship better outcomes",
    paragraph:
      "Engage audience segments and finally create actionable insights. Amplify vertical integration.",
  },
];

const MasterfulDesign = () => {
  return (
    <section className="max-w-[1440px] w-[355px] mx-auto  sm:w-full pb-[50px] md:pb-0 md:pt-[50px] lg:pb-0 lg:py-0 lg:pt-[100px]">
      <HeaderBlock
        label="Masterful Design"
        firstColor="black"
        firstHeadline="A New Era of"
        secondColor="blue"
        secondHeadline="Design Excellence"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's
      </HeaderBlock>
      <div className="w-full md:w-[764px] max-w-[1216px] mx-auto flex flex-col md:flex-row px-5 md:px-0 md:py-[50px] lg:py-0 lg:pt-[60px] lg:gap-12 items-center">
        <div className="w-full md:w-1/2 lg:w-2/3 mx-auto">
          <img src={womanImg} className=" " alt="girl sitting" />
        </div>
        <div className="w-full md:w-1/2 lg:w-[516px]">
          {check.map((item) => (
            <div className="flex mb-5 " key={item.id}>
              <div className="font-lato text-xs border border-black-PRIMARY rounded-full size-6 p-2 flex justify-center items-center">
                {item.id}
              </div>
              <div className="mx-4">
                <h4 className="font-futura text-lg text-black-PRIMARY font-extrabold mb-3">
                  {item.header}
                </h4>
                <p className="font-lato text-sm text-secondaryGrey">
                  {item.paragraph}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default MasterfulDesign;
