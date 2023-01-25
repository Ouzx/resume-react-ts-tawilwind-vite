import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import Item from "./Item";

const Projects = () => {
  const data = useContext(DataContext);
  return (
    <div className="mb-7" key="randomdrandom">
      <h1 className="font-black mb-12">{"Projects"}</h1>
      {data.ProjectList?.map((project, index) => (
        <>
          <Item
            key={"projectListz" + index + "z"}
            title={project.title}
            description={project.description}
            image={project.img}
            link={project.link}
          />
          {index !== data.ProjectList.length - 1 && <hr className="my-4" />}
        </>
      ))}
    </div>
  );
};

export default Projects;
