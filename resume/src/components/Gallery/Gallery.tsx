import React from "react";
import Item from "./Item";
const DATA = [
  {
    img: "https://certy.px-lab.com/designer/wp-content/uploads/sites/2/2017/06/Certy_Porfolio_Designer-6-380x266.jpg",
    title: "Project 1",
    description: "Project one description",
    link: "#",
  },
  {
    img: "https://certy.px-lab.com/designer/wp-content/uploads/sites/2/2017/06/Certy_Porfolio_Designer-2-380x534.jpg",
    title: "Project 2",
    description: "Project two description",
    link: "#",
  },
  {
    img: "https://certy.px-lab.com/designer/wp-content/uploads/sites/2/2017/06/Certy_Porfolio_Designer-5-380x266.jpg",
    title: "Project 3",
    description: "Project three description",
    link: "#",
  },
  {
    img: "https://certy.px-lab.com/designer/wp-content/uploads/sites/2/2017/06/Certy_Porfolio_Designer-4-380x266.jpg",
    title: "Project 4",
    description: "Project four description",
    link: "#",
  },
  {
    img: "https://certy.px-lab.com/designer/wp-content/uploads/sites/2/2017/06/Certy_Porfolio_Designer-3-380x266.jpg",
    title: "Project 5",
    description: "Project five description",
    link: "#",
  },
  {
    img: "https://certy.px-lab.com/designer/wp-content/uploads/sites/2/2017/06/Certy_Porfolio_Designer-1-380x266.jpg",
    title: "Project 6",
    description: "Project six description",
    link: "#",
  },
];

const Gallery = () => {
  let firstCol: JSX.Element[] = [];
  let secondCol: JSX.Element[] = [];
  for (let i = 0; i < DATA.length; i++) {
    let item = (
      <Item
        img={DATA[i].img}
        title={DATA[i].title}
        description={DATA[i].description}
        link={DATA[i].link}
      />
    );
    if (i % 2 === 0) {
      firstCol.push(item);
    } else {
      secondCol.push(item);
    }
  }

  return (
    <div className="flex flex-1 flex-col md:flex-row gap-2">
      <div className="flex flex-1 flex-col gap-2">{firstCol}</div>
      <div className="flex flex-1 flex-col gap-2">{secondCol}</div>
    </div>
  );
};

export default Gallery;
