import React from "react";
import badges from "./badges";
import Section from "./Section";
const BadgeListOrdered = () => {
  return (
    <div className="flex lg:flex-col flex-col md:flex-row gap-8 flex-wrap justify-around text-center">
      <Section title="Frontend" start={0} end={10} />
      <Section title="Backend" start={10} end={19} />
      <Section title="Devops" start={19} end={40} />
    </div>
  );
};

export default BadgeListOrdered;
