import React from "react";
import TimeBar from "../TimeBar";
import { DataContext } from "../../DataContext";
const Experience = () => {
  const data = React.useContext(DataContext);

  let experience: JSX.Element[] = [];

  for (let i = 0; i < data?.Experience?.length; i++) {
    let item = (
      <TimeBar
        date={data.Experience[i].date}
        title={data.Experience[i].title}
        company={data.Experience[i].company}
        description={data.Experience[i].description}
        key={i + "*exp"}
      />
    );
    experience.push(item);
  }

  return (
    <div className="mb-7">
      <h1 className="font-black mb-12">{"Experience"}</h1>
      {experience}
    </div>
  );
};

export default Experience;
