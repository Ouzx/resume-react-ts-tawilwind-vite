import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import Item from "./Item";

const Projects = () => {
  const data = useContext(DataContext);
  return (
    <div className="mb-7">
      <h1 className="font-black mb-12">{"Projects"}</h1>
      {/* <Item
        title="Inhalt CMS"
        description="Inhalt CMS is a content management system that allows you to create and manage your website with typescript. It is built with React, and Tailwind CSS."
        image="inhalt.png"
        link="https://github.com/Ouzx/inhalt-cms"
      /> */}
      {data.ProjectList.map((project, index) => (
        <>
          <Item
            key={index}
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
