import { motion } from "framer-motion";

const Badge = ({ label }) => {
  return (
    <motion.div
      className="relative  inline-block px-4 py-1 text-base lg:text-xl font-futura rounded-[20px] text-blue-PRIMARY border border-lightGrey"
      whileHover={{
        scale: 1.1, // Slight enlargement on hover
        rotate: [0, 2, -2, 1, -1], // Gentle wobble rotation
        background: "rgba(255, 255, 255, 0.15)", // Slight translucent background
        backdropFilter: "blur(12px)", // Adds blur for glassy effect
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 10,
          duration: 0.4,
        },
      }}
    >
      {label}
    </motion.div>
  );
};

export default Badge;
