// TypewriterOnScroll.js
import React, { useState } from "react";
import { Typewriter, useTypewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const TypewriterOnScroll = () => {
  const [textVisible, setTextVisible] = useState(false);

  // Intersection Observer to trigger the typewriter when the element is in view
  const { ref, inView } = useInView({
    threshold: 0.5,
    onChange: (inView) => {
      if (inView) {
        setTextVisible(false); // Reset visibility to re-trigger animation
        setTimeout(() => setTextVisible(true), 100); // Delay to restart animation
      }
    },
  });

  return (
    <div ref={ref}>
      {textVisible && (
        <h1 className=" w-[343px] font-futura font-bold text-secondaryBlue lg:text-[50px] md:text-[30px] text-[25px] leading-[66.45px] tracking-wider text-center">
          <Typewriter
            words={[" Technologies"]}
            loop={1}
            cursor={false}
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}

            // Hide cursor when typing stops
          />
        </h1>
      )}
    </div>
  );
};

export default TypewriterOnScroll;
