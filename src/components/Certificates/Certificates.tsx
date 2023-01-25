import React from "react";
import TimeBar from "../TimeBar";
import { DataContext } from "../../DataContext";
const Certificates = () => {
  const data = React.useContext(DataContext);

  let experience: JSX.Element[] = [];

  for (let i = 0; i < data?.Experience?.length; i++) {
    let item = (
      <TimeBar
        date={data.Certifications[i].date}
        title={data.Certifications[i].title}
        company={data.Certifications[i].company}
        description={data.Certifications[i].description}
        key={i + "*cert"}
      />
    );
    experience.push(item);
  }

  return (
    <div className="mb-7">
      <h1 className="font-black mb-12">{"Certifications"}</h1>
      {experience}
    </div>
  );
};

export default Certificates;
