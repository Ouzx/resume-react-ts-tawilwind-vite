import {
  FaFacebookF,
  FaTwitter,
  FaTwitch,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import SocialButton from "./SocialButton";

const SocialIcons = () => {
  return (
    <div className="flex justify-evenly items-center">
      <SocialButton Icon={FaFacebookF} link="https://facebook.com" />
      <SocialButton Icon={FaTwitter} link="https://twitter.com" />
      <SocialButton Icon={FaLinkedin} link="https://linkedin.com" />
      <SocialButton Icon={FaTwitch} link="https://twitch.com" />
      <SocialButton Icon={FaYoutube} link="https://youtube.com" />
    </div>
  );
};

export default SocialIcons;
