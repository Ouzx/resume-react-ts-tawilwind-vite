import React from "react";

const Point: React.FC<{ filled?: boolean }> = ({ filled }) => {
  return (
    <div
      className={`inline-block border printMe border-accent ${
        filled && "bg-accent"
      } h-4 w-4 rounded-full mr-1`}
    ></div>
  );
};

export default Point;
