import React from "react";
import { DataContext } from "../DataContext";
const Intro = () => {
  const data = React.useContext(DataContext);
  return (
    <>
      <h1 className="font-thin hello mb-12">{data.HI}</h1>
      <p className="mb-14 text-darkText text tracking-wider leading-7">
        {data.Description}
      </p>
    </>
  );
};

export default Intro;
