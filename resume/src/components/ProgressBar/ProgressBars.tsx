import React from "react";
import ProgressBar from "./ProgressBar";
import { DataContext } from "../../DataContext";

const ProgressBars = () => {
  const data = React.useContext(DataContext);

  let skills = data?.Skills?.map((skill) => (
    <ProgressBar
      title={skill.title}
      percent={skill.percent}
      key={skill.title + "" + skill.percent}
    />
  ));

  return (
    <div className="flex-1">
      <h2 className="text-thinText mb-8">languages</h2>
      {skills}
    </div>
  );
};

export default ProgressBars;
