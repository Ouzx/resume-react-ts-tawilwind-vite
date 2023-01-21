import React from "react";

interface TimeBarProps {
  date: string;
  title: string;
  description: string;
}

const TimeBar = (props: TimeBarProps) => {
  return (
    <div className="p-4 pt-0 flex items-center">
      <div className="min-w-[10rem] h-8 shrink-0 z-10 bg-accent px-2 py-1 text-center text-sm relative">
        {props.date}
        <div className="w-[1.35rem] h-[1.35rem] -z-[1] bg-accent absolute top-[0.352rem] -right-[0.7rem] rotate-45"></div>
      </div>
      <div className="h-1 w-1 bg-black ml-7 mr-3"></div>
      <div>
        <h2 className="font-black ">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default TimeBar;
