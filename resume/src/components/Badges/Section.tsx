import React from "react";
import badges from "./badges";

interface Props {
  title: string;
  start: number;
  end: number;
}

const Section = ({ title, start, end }: Props) => {
  return (
    <div className="flex-1">
      <h3 className="font-black text-thinText">{title}</h3>
      <hr className="mb-3" />
      <div className="flex justify-evenly flex-wrap ">
        {/* take first 10 of badges */}
        {badges.slice(start, end)}
      </div>
    </div>
  );
};

export default Section;
