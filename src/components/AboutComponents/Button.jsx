import React from "react";
import {motion} from "framer-motion"
const Button = ({ label, className, handler }) => {
  return (
    <motion.div initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}>
      <button
        onClick={handler}
        className={`border font-lato gap-[6px] text-white border-blue-PRIMARY rounded-md  py-2 px-4 bg-blue-PRIMARY -tracking-tight ${className}`}
      >
        {label}
      </button>
    </motion.div>
  );
};

export default Button;
