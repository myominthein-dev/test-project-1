import React from "react";
import Container from "../Container";
import desktopComputer from "../../assets/AboutAssets/desktop-computer.png";
import Button from "./Button";

const TransformBusiness = () => {
  return (
    <section className=" py-[100px]">
      <Container className={"py-5 px-5 flex justify-center"}>
        <div className=" flex  justify-between items-center w-[1220px]">
          <div className=" flex flex-col   ">
            <div className="flex flex-col gap-2.5 w-[491px] ">
              <h1 className=" font-futura font-bold text-2xl w-[363px] md:text-[25px] lg:text-[31px]  my-1">
                Transforming <br className="" /> business since 2014
              </h1>
              <div
                className=" w-[491px] flex flex-col gap-2.5 text-[#7F7D7D]
"
              >
                <p className=" w-[391px] ">
                  The passion with which we work allows us to transform a
                  problem into a challenge!
                </p>
                <p className=" w-[391px] ">
                  Technology has made our lives easier in so many ways, which
                  include a more connivent.
                </p>
              </div>
              <Button className={"mt-5 items-end"} label={"Learn More"} />
            </div>
          </div>
          <div className=" flex items-center justify-center w-[595px]">
            <img src={desktopComputer} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TransformBusiness;
