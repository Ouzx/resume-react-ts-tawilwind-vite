import React from "react";
import { DataContext } from "../DataContext";
const Hero = () => {
  const data = React.useContext(DataContext);
  return (
    <>
      <img
        className="my-5 h-48 w-48 object-cover rounded-full mx-auto"
        src={data.ProfilePic}
        alt="Profile-Picture"
      />
      <h1 className="font-bold text-center mb-3">{data.Name}</h1>
      <p className="text-center text-darkText mb-5">{data.JobTitle}</p>
    </>
  );
};

export default Hero;
