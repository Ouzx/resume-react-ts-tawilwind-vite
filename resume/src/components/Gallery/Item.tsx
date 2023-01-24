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
      className={`relative md:border shadow-lg  rounded-3xl `}
      // style={{ backgroundImage: `url(${props.img})` }}
    >
      <img
        src={`${props.img}`}
        className="w-full object-cover object-left rounded-3xl max-h-[38rem] min-h-[16rem]"
        alt=""
      />
      <div className="p-7 rounded-3xl text-center absolute transition-colors z-10 top-0 w-full h-full flex flex-col justify-evenly items-center [&>*]:md:hidden bg-black/80 hover:bg-black/80 md:bg-transparent text-white [&>*]:hover:block ">
        <h4 className="font-bold">{props.title}</h4>
        <p className="">{props.description}</p>
        <a
          className="border-2 font-medium rounded-md px-8 py-2"
          href={props.link}
          target="_blank"
        >
          <button>Open</button>
        </a>
      </div>
    </div>
  );
};

export default Item;
