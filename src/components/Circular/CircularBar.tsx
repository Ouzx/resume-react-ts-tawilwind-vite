import React from "react";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularBar: React.FC<{ percent: number; title: string }> = ({
  percent,
  title,
}) => {
  return (
    <div>
      <CircularProgressbar
        className="h-24"
        value={percent}
        text={`${percent}%`}
        styles={buildStyles({
          pathColor: "#c0e3e7",
          textColor: "#000",
        })}
      />
      <p className="text-center font-bold mt-3">{title}</p>
    </div>
  );
};

export default CircularBar;
