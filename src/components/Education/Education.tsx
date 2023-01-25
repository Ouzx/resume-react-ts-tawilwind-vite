import React from "react";
import TimeBar from "../TimeBar";
import { DataContext } from "../../DataContext";
const Education = () => {
  const data = React.useContext(DataContext);

  let education: JSX.Element[] = [];
  for (let i = 0; i < data?.Education?.length; i++) {
    let item = (
      <TimeBar
        date={data.Education[i].date}
        title={data.Education[i].title}
        company={data.Education[i].company}
        description={data.Education[i].description}
        afterText={data.Education[i].GPA}
        key={i + "*edu"}
      />
    );
    education.push(item);
  }

  return (
    <div className="mb-7">
      <h1 className="font-black mb-12">{"Education"}</h1>
      {education}
    </div>
  );
};

export default Education;
