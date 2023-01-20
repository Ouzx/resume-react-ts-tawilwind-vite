import React from "react";
import { AiFillGithub } from "react-icons/ai";

const GithubRepo = () => {
  return (
    <a
      className="inline-block font-bold border-2 transition-colors delay-75 border-accent  hover:bg-accent rounded-md p-2"
      href="https://github.com/Ouzx/resume-react-ts-tawilwind-vite"
      target={"_blank"}
    >
      <button className="flex items-center  ">
        <span className="inline-block w-[15ch]">Github Repo</span>
        <AiFillGithub className="ml-2" />
      </button>
    </a>
  );
};

export default GithubRepo;
