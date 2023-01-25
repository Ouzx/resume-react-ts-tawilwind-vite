import React from "react";
import Point from "./Point";
const ProgressBar: React.FC<{ percent: number; title: string }> = ({
  percent,
  title,
}) => {
  const value = percent / 10;
  const points = [];
  for (let i = 0; i < 10; i++) {
    if (i < value) {
      points.push(<Point key={i} filled />);
    } else {
      points.push(<Point key={i} />);
    }
  }
  return (
    <div className="mb-3">
      <p className="font-black mb-2">{title}</p>
      {points.map((point) => point)}
    </div>
  );
};

export default ProgressBar;
