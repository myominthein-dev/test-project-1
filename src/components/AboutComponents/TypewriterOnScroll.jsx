// TypewriterOnScroll.js
import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "react-intersection-observer";

const TypewriterOnScroll = () => {
  const [textVisible, setTextVisible] = useState(false);

  // Set up intersection observer to track if the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger when 50% of the element is in view
    onChange: (inView) => {
      if (inView) setTextVisible(true); // Start animation when in view
    },
  });

  return (
    <div
      ref={ref}
      style={{ minHeight: "100vh", padding: "20px", textAlign: "center" }}
    >
      <h1>Scroll down to see the typewriter effect!</h1>

      {textVisible && (
        <h2>
          <Typewriter
            words={[
              "Hello, World!",
              "Welcome to the Scroll Typewriter Effect!",
            ]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
      )}
    </div>
  );
};

export default TypewriterOnScroll;
