import React, { useContext } from "react";
import { DataContext } from "../../DataContext";
import { AiOutlineDownload } from "react-icons/ai";

const DownloadResume = () => {
  const data = useContext(DataContext);
  return (
    <a
      className="inline-block font-bold border-2 transition-colors delay-75 border-accent   hover:bg-accent rounded-md p-2"
      href={data?.ResumeFileName!}
      target={"_blank"}
    >
      <button className="flex items-center  ">
        <span className="inline-block w-[15ch]">Download Resume</span>
        <AiOutlineDownload className="ml-2" />
      </button>
    </a>
  );
};

export default DownloadResume;
