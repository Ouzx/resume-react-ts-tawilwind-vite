import React from "react";

interface ItemProps {
  img: string;
  title: string;
  description: string;
  link: string;
}

const Item = (props: ItemProps) => {
  return (
    <div
      // select second div
      className={`bg-cover relative`}
      // style={{ backgroundImage: `url(${props.img})` }}
    >
      <img src={`${props.img}`} className="" alt="" />
      <div className="absolute transition-colors delay-75 z-10 top-0 w-full h-full flex flex-col justify-evenly items-center [&>*]:hidden hover:bg-black/80 hover:text-white [&>*]:hover:block ">
        <h4 className="font-bold">{props.title}</h4>
        <p>{props.description}</p>
        <a
          className="border-2 font-medium rounded-md px-8 py-2"
          href={props.link}
        >
          <button>Open</button>
        </a>
      </div>
    </div>
  );
};

export default Item;
