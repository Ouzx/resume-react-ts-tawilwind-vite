import React from "react";
import CircularBar from "./CircularBar";
const CircularBars = () => {
  return (
    <div className="flex-1">
      <h2 className="text-thinText mb-8">additional skills</h2>
      <div className="flex justify-between">
        <CircularBar title="UX Design" percent={95} />
        <CircularBar title="UI Design" percent={92} />
        <CircularBar title="Drawing" percent={90} />
      </div>
    </div>
  );
};

export default CircularBars;
