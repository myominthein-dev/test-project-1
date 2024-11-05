import React from "react";

const BlogIndicator = () => {
  const arrayLength = Array.from({ length: 3 }, (_, i) => i);
  return (
    <div className="flex justify-center items-center gap-2">
      {arrayLength.map((_, i) => (
        <div
          className={`w-2 h-2 rounded-full ${
            i === 0 ? "bg-blue-PRIMARY" : "bg-lightGrey"
          }`}
          key={i}
        />
      ))}
    </div>
  );
};

export default BlogIndicator;
