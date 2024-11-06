import Container from "./Container";

const Action = () => {
  return (
    <Container className="mt-10">
      <div className="w-full md:max-w-[764px] lg:max-w-[1440px] mx-auto px-0 lg:px-[100px]">
        <div className="rounded-[10px] bg-lightBlue flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between lg:items-center px-8 py-10 md:px-16">
          <div className="w-full lg:w-2/3">
            <h4 className="font-futura text-secondaryBlue text-2xl mb-2">
              Seamless Interaction
            </h4>
            <h3 className="font-futura font-bold text-black-PRIMARY text-xl md:text-3xl lg:text-4xl">
              Welcome to your new digital reality that which will rock your
              world.
            </h3>
            <p className="font-lato text-secondaryGrey mt-4">
              Let us help you take you from zero to serious business and beyond.
              Our no-strings attached free trial lets you test our product
              today.
            </p>
          </div>
          <div className="w-full md:w-2/3 lg:w-1/3">
            <div className="flex  shadow-xl">
              <input
                type="text"
                className="w-full py-3 px-4 rounded-tl-[10px] rounded-bl-[10px] group focus:outline-none"
                placeholder="Enter your email"
              />
              <button className=" bg-secondaryBlue text-white py-3 px-4 rounded-tr-[10px] rounded-br-[10px] shadow-xl ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Action;
