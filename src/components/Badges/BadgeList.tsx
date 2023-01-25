import React from "react";
import badges from "./badges";

const Badges = () => {
  const badgeCopy = [...badges];
  // return random badges in empty fragment
  return <>{badgeCopy.sort(() => Math.random() - 0.5)}</>;
};

const BadgeList = () => {
  return (
    <div className="overflow-clip">
      <h2 className="text-center text-thinText font-bold mb-1">
        My Tech Stack
      </h2>
      <hr className="mb-3" />
      <div className="clip-ex">
        <div className="flex animate-[animation1_100s_infinite_alternate_none] justify-center">
          <Badges key={"badges1"} />
        </div>
      </div>

      <div className="clip-ex">
        <div className="flex animate-[animation2_120s_infinite_alternate_none] justify-center">
          <Badges key={"badges2"} />
        </div>
      </div>

      <div className="clip-ex">
        <div className="flex animate-[animation2_110s_infinite_alternate_none] justify-center">
          <Badges key={"badges3"} />
        </div>
      </div>

      <div className="clip-ex">
        <div className="flex animate-[animation2_130s_infinite_alternate_none] justify-center">
          <Badges key={"badges4"} />
        </div>
      </div>

      <div className="clip-ex">
        <div className="flex animate-[animation1_100s_infinite_alternate_none] justify-center">
          <Badges key={"badges5"} />
        </div>
      </div>

      <div className="clip-ex">
        <div className="flex animate-[animation2_140s_infinite_alternate_none] justify-center">
          <Badges key={"badges6"} />
        </div>
      </div>

      <div className="clip-ex">
        <div className="flex animate-[animation1_150s_infinite_alternate_none] justify-center">
          <Badges key={"badges7"} />
        </div>
      </div>
    </div>
  );
};

export default BadgeList;
