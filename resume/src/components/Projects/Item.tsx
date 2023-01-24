import React from "react";
import { FaGithub } from "react-icons/fa";
interface Props {
  title: string;
  description: string;
  link?: string;
  image: string;
}

const Item = ({ title, description, link, image }: Props) => {
  return (
    <div>
      <div className="sm:flex items-center">
        <img
          src={image}
          alt={title}
          className={
            "sm:w-[12rem] h-[12rem] sm:shadow-xl sm:border mr-6 object-cover sm:rounded-3xl"
          }
        />
        <div>
          <h2 className="font-black titlePulse mb-3">{title}</h2>
          <p>{description}</p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white flex items-center max-w-fit p-2 rounded-lg mt-3"
            >
              <button>
                <FaGithub className="inline-block mr-2" />
                View on Github
              </button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
