import React from "react";

const tagStyle =
  "mr-1 mb-1 hover:scale-125 hover:ml-2 hover:mr-3 transform duration-300";

const Badges = () => {
  let badges = [
    <img
      src="https://img.shields.io/badge/-HTML5-%23E44D27?style=flat-square&logo=html5&logoColor=ffffff"
      alt="HTML5"
      key="HTML5"
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-CSS3-%231572B6?style=flat-square&logo=css3"
      alt="CSS3"
      key="CSS3"
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-JavaScript-%23F7DF1C?style=flat-square&logo=javascript&logoColor=000000&labelColor=%23F7DF1C&color=%23FFCE5A"
      alt="JavaScript"
      key={"JavaScript"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"
      alt="TypeScript"
      key="TypeScript"
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-React-%23282C34?style=flat-square&logo=react"
      alt="React"
      key="React"
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-React%20Native-%2320232a?style=flat-square&logo=react&logoColor=61dbfb"
      alt="ReactNative"
      key={"ReactNative"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Sass-%23CC6699?style=flat-square&logo=sass&logoColor=ffffff"
      alt="Sass"
      key="Sass"
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-TailwindCss-%231a202c?style=flat-square&logo=tailwind-css"
      alt="TailwindCss"
      key={"TailwindCss"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Redux-%23764ABC?style=flat-square&logo=redux&logoColor=ffffff"
      alt="Redux"
      key="Redux"
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-ESLint-%234B32C3?style=flat-square&logo=eslint"
      alt="ESlint"
      key={"ESlint"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Node.js-%2343853D?style=flat-square&logo=node.js&logoColor=ffffff"
      alt="Node.js"
      key={"Node.js"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Express.js-%23006400?style=flat-square&logo=express&logoColor=ffffff"
      alt="Express.js"
      key={"Express.js"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Flask-%23000?style=flat-square&logo=flask&logoColor=ffffff"
      alt="Flask"
      key={"Flask"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Vite-%2361F7CF?style=flat-square&logo=vite&logoColor=000"
      alt="Vite"
      key={"Vite"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Next.js-%23000000?style=flat-square&logo=next.js&logoColor=ffffff"
      alt="Next.js"
      key={"Next.js"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-MongoDB-%2347A248?style=flat-square&logo=mongodb&logoColor=ffffff"
      alt="MongoDB"
      key={"MongoDB"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-MySQL-%234479A1?style=flat-square&logo=mysql&logoColor=ffffff"
      alt="MySQL"
      key={"MySQL"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-SQLite-%23005A9C?style=flat-square&logo=sqlite&logoColor=ffffff"
      alt="SQLite"
      key={"SQLite"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-OracleDB-%23E85D00?style=flat-square&logo=oracledb&logoColor=ffffff"
      alt="OracleDB"
      key={"OracleDB"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Netlify-%2300C7B7?style=flat-square&logo=netlify&logoColor=ffffff"
      alt="Netlify"
      key={"Netlify"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Vercel-%23ffffff?style=flat-square&logo=vercel&logoColor=000000"
      alt="Vercel"
      key={"Vercel"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Heroku-%23430098?style=flat-square&logo=heroku&logoColor=ffffff"
      alt="Heroku"
      key={"Heroku"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Render.com-%230070BA?style=flat-square&logo=render&logoColor=ffffff."
      alt="Render"
      key={"Render"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-GitHub%20Actions-%23181717?style=flat-square&logo=github&logoColor=ffffff"
      alt="GithubActions"
      key={"GithubActions"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-GitHub-%23181717?style=flat-square&logo=github&logoColor=ffffff"
      alt="Github"
      key={"Github"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Git-%23F05032?style=flat-square&logo=git&logoColor=%23ffffff"
      alt="Git"
      key={"Git"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Azure-%234B83AF?style=flat-square&logo=azure&logoColor=ffffff"
      alt="Azure"
      key={"Azure"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Linux-%23FCC624?style=flat-square&logo=linux&logoColor=000"
      alt="Linux"
      key={"Linux"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-.NET-%230078D7?style=flat-square&logo=.net&logoColor=ffffff"
      alt=".NET"
      key={".NET"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Bash-%230078D4?style=flat-square&logo=bash&logoColor=ffffff"
      alt="Bash"
      key={"Bash"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-C%23-%23178600?style=flat-square&logo=c-sharp&logoColor=ffffff"
      alt="CSharp"
      key={"CSharp"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Python-%2314354C?style=flat-square&logo=python&logoColor=ffffff"
      alt="Python"
      key={"Python"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Java-%23ED8B00?style=flat-square&logo=java&logoColor=ffffff"
      alt="Java"
      key={"Java"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Selenium-%232FA44F?style=flat-square&logo=selenium&logoColor=ffffff"
      alt="Selenium"
      key={"Selenium"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Jest-%23C21325?style=flat-square&logo=jest&logoColor=ffffff"
      alt="Jest"
      key={"Jest"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Cucumber-%23004880?style=flat-square&logo=cucumber&logoColor=ffffff"
      alt="Cucumber"
      key={"Cucumber"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-PyTest-%230F7017?style=flat-square&logo=pytest&logoColor=ffffff"
      alt="Pytest"
      key={"Pytest"}
      className={tagStyle}
    />,
    <img
      src="https://img.shields.io/badge/-Visual%20Studio%20Code-%23007ACC?style=flat-square&logo=visual-studio-code&logoColor=ffffff"
      alt="VSCode"
      key={"VSCode"}
      className={tagStyle}
    />,
  ];
  // return random badges in empty fragment
  return <>{badges.sort(() => Math.random() - 0.5)}</>;
};

const BadgeList = () => {
  return (
    <div className="overflow-clip">
      <h2 className="text-center text-thinText font-bold mb-1">
        My Tech Stack
      </h2>
      <hr className="mb-3" />
      <div className="clip-ex">
        <div className="flex animate-[animation1_100s_infinite_alternate_none] justify-center">
          <Badges key={"badges1"} />
        </div>
      </div>

      <div className="clip-ex">
        <div className="flex animate-[animation2_120s_infinite_alternate_none] justify-center">
          <Badges key={"badges2"} />
        </div>
      </div>

      <div className="clip-ex">
        <div className="flex animate-[animation2_110s_infinite_alternate_none] justify-center">
          <Badges key={"badges3"} />
        </div>
      </div>

      <div className="clip-ex">
        <div className="flex animate-[animation2_130s_infinite_alternate_none] justify-center">
          <Badges key={"badges4"} />
        </div>
      </div>

      <div className="clip-ex">
        <div className="flex animate-[animation1_100s_infinite_alternate_none] justify-center">
          <Badges key={"badges5"} />
        </div>
      </div>

      <div className="clip-ex">
        <div className="flex animate-[animation2_140s_infinite_alternate_none] justify-center">
          <Badges key={"badges6"} />
        </div>
      </div>

      <div className="clip-ex">
        <div className="flex animate-[animation1_150s_infinite_alternate_none] justify-center">
          <Badges key={"badges7"} />
        </div>
      </div>
    </div>
  );
};

export default BadgeList;
