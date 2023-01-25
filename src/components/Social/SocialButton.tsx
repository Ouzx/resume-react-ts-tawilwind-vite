import React from "react";
import { IconType } from "react-icons";

const SocialButton: React.FC<{
  Icon: IconType;
  link: string;
  userName: string;
}> = ({ Icon, link, userName }) => {
  return (
    <button className="hover:text-white hover:bg-primary transition-colors delay-75 p-1 rounded-full">
      <a href={link} target="_blank">
        <Icon className="inline-block mr-2" />
        <span className="hidden print:inline-block">{userName}</span>
      </a>
    </button>
  );
};

export default SocialButton;
