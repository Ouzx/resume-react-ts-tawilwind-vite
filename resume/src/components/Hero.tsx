import React from "react";
import { DataContext } from "../DataContext";

const Hero = () => {
  const data = React.useContext(DataContext);
  const [isHovered, setIsHovered] = React.useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div
        className="w-fit mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!isHovered ? (
          <img
            className="my-5 h-48 w-48 object-cover rounded-full mx-auto"
            src={data.ProfilePic}
            alt="Profile-Picture"
          />
        ) : (
          <img
            className="my-5 h-48 w-48 object-cover rounded-full mx-auto"
            src={data.ProfilePicHover}
            alt="Profile-Picture"
          />
        )}
      </div>
      <h1 className="font-bold text-center mb-3">{data.Name}</h1>
      <p className="text-center text-darkText mb-5">{data.JobTitle}</p>
    </>
  );
};

export default Hero;
