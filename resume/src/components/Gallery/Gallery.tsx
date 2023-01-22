import React from "react";
import Item from "./Item";
import { DataContext } from "../../DataContext";

const Gallery = () => {
  const data = React.useContext(DataContext);

  let firstCol: JSX.Element[] = [];
  let secondCol: JSX.Element[] = [];
  for (let i = 0; i < data?.Projects?.length; i++) {
    let item = (
      <Item
        img={data.Projects[i].img}
        title={data.Projects[i].title}
        description={data.Projects[i].description}
        link={data.Projects[i].link}
      />
    );
    if (i % 2 === 0) {
      firstCol.push(item);
    } else {
      secondCol.push(item);
    }
  }

  return (
    <>
      <h1 className="font-black mb-12">{"My Projects"}</h1>

      <div className="flex flex-1 flex-col sm:flex-row gap-2 mb-7">
        <div className="flex flex-1 flex-col gap-2">{firstCol}</div>
        <div className="flex flex-1 flex-col gap-2">{secondCol}</div>
      </div>
    </>
  );
};

export default Gallery;
