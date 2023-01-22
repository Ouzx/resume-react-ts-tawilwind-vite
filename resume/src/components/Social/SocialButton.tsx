import React from "react";
import { IconType } from "react-icons";

const SocialButton: React.FC<{ Icon: IconType; link: string }> = ({
  Icon,
  link,
}) => {
  console.log(link);
  return (
    <button className="hover:text-white hover:bg-primary transition-colors delay-75 p-1 rounded-full">
      <a href={link} target="_blank">
        <Icon />
      </a>
    </button>
  );
};

export default SocialButton;
