import React from "react";

interface TimeBarProps {
  date: string;
  title: string;
  description: string;
}

const TimeBar = (props: TimeBarProps) => {
  return (
    <div className="p-4 pt-0 md:flex items-center">
      <div
        className={`min-w-[10rem] mb-3 md:mb-0 md:w-[40%] h-8 shrink-0 z-10 bg-accent px-2 py-1 text-center text-sm relative`}
      >
        {props.date}
        <div className="w-[1.35rem] h-[1.35rem] -z-[1] bg-accent absolute top-[0.352rem] -right-[0.7rem] rotate-45"></div>
      </div>
      <div className="h-1 w-1 shrink-0 hidden md:block bg-black ml-7 mr-3"></div>
      <div>
        <h2 className="font-black mt-4 sm:mt-0">{props.title}</h2>
        <p>{props.description}</p>
      </div>
      <hr className="block my-4" />
    </div>
  );
};

export default TimeBar;
