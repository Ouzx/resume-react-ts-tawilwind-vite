import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaTwitch,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import SocialButton from "./SocialButton";
import { DataContext } from "../../DataContext";

const extractUserName = (link: string) => {
  // check last slash if there is any text after it
  let userName = link.split("/").pop();

  if (link.startsWith("mailto:")) {
    userName = link.split(":").pop();
  }

  if (userName) {
    // check if there is any query string
    userName = userName.split("?").shift();
    // check if there is any hash
    userName = userName?.split("#").shift();
  }

  return userName!;
};

const SocialIcons = () => {
  const data = React.useContext(DataContext);
  let social = () => {
    let social = [];
    if (data.Social?.facebook)
      social.push(
        <SocialButton
          Icon={FaFacebookF}
          link={data.Social.facebook}
          key={data.Social.facebook}
          userName={extractUserName(data.Social.facebook)}
        />
      );
    if (data.Social?.twitter)
      social.push(
        <SocialButton
          Icon={FaTwitter}
          link={data.Social.twitter}
          key={data.Social.twitter}
          userName={extractUserName(data.Social.twitter)}
        />
      );
    if (data.Social?.linkedin)
      social.push(
        <SocialButton
          Icon={FaLinkedin}
          link={data.Social.linkedin}
          key={data.Social.linkedin}
          userName={extractUserName(data.Social.linkedin)}
        />
      );
    if (data.Social?.twitch)
      social.push(
        <SocialButton
          Icon={FaTwitch}
          link={data.Social.twitch}
          key={data.Social.twitch}
          userName={extractUserName(data.Social.twitch)}
        />
      );
    if (data.Social?.youtube)
      social.push(
        <SocialButton
          Icon={FaYoutube}
          link={data.Social.youtube}
          key={data.Social.youtube}
          userName={extractUserName(data.Social.youtube)}
        />
      );
    if (data.Social?.github)
      social.push(
        <SocialButton
          Icon={FaGithub}
          link={data.Social.github}
          key={data.Social.github}
          userName={extractUserName(data.Social.github)}
        />
      );
    if (data.Social?.email)
      social.push(
        <SocialButton
          Icon={AiFillMail}
          link={data.Social.email}
          key={data.Social.email}
          userName={extractUserName(data.Social.email)}
        />
      );
    return social;
  };

  return <div className=" flex justify-evenly items-center">{social()}</div>;
};

export default SocialIcons;
