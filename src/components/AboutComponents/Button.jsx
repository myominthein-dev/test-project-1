import React from "react";

const Button = ({ label, className, handler }) => {
  return (
    <div>
      <button
        onClick={handler}
        className={`border font-lato gap-[6px] text-white border-blue-PRIMARY rounded-md  py-2 px-4 bg-blue-PRIMARY ${className}`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
