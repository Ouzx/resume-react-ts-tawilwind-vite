import React from "react";
import Item from "./Item";
import { DataContext } from "../../DataContext";

const Gallery = () => {
  const data = React.useContext(DataContext);

  return (
    <>
      <h1 className="font-black mb-12">{"Portfolio"}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data?.Projects?.map((item) => {
          return (
            <Item
              img={item?.img}
              title={item?.title}
              description={item?.description}
              link={item?.link}
              key={item?.title + item?.link}
            />
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
