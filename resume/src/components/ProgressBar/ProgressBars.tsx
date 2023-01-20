import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressBars = () => {
  return (
    <div className="flex-1">
      <h2 className="text-thinText mb-8">languages</h2>
      <ProgressBar title="English" percent={60} />
      <ProgressBar title="Spanish" percent={70} />
      <ProgressBar title="German" percent={80} />
    </div>
  );
};

export default ProgressBars;
