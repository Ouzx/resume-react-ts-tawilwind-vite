import React from "react";
import { DataContext } from "./DataContext";

import BadgeList from "./components/Badges/BadgeList";
import BadgeListOrdered from "./components/Badges/BadgeListOrdered";
// import CircularBars from "./components/Circular/CircularBars";
import DescriptionItems from "./components/DescriptionGroup/DescriptionItems";
import DownloadResume from "./components/Buttons/DownloadResume";
import ProgressBars from "./components/ProgressBar/ProgressBars";
import SocialIcons from "./components/Social/SocialIcons";
import GithubRepo from "./components/Buttons/GithubRepo";
import Gallery from "./components/Gallery/Gallery";
import Education from "./components/Education/Education";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Experience from "./components/Experience/Experience";
import Certificates from "./components/Certificates/Certificates";
import Projects from "./components/Projects/Projects";

function App() {
  const data = React.useContext(DataContext);
  // console.log(data.JobTitle);
  return (
    <div className="relative bg-hero fixed-bg">
      <div className="bg-hero-pattern bg-cover bg-left-bottom bg-no-repeat bg-fixed">
        <div className="mx-auto lg:p-14 flex flex-col lg:flex-row justify-evenly items-start max-w-7xl">
          <div className="shrink-0 w-full lg:mr-2 lg:max-w-[18rem] ">
            <div className="p-5 hover:bg-white bgPulse transition-colors delay-75 bg-[#c0e3e7] shadow-2xl">
              <Hero />
              <SocialIcons />
            </div>
            <div className="p-5 shadow-2xl bg-white lg:mt-3">
              <BadgeListOrdered />
            </div>
            <div className="print:hidden gap-2 p-5 shadow-2xl bg-white lg:mt-3 flex flex-wrap justify-center items-center">
              <DownloadResume />
              <GithubRepo />
            </div>
          </div>

          <div className="bg-white shrink w-full lg:max-w-[50rem] px-10 py-5 border-0 lg:border print:border-0">
            {/* First Block */}
            <div className="mb-7">
              <Intro />

              <hr />
            </div>

            {/* Second Block */}
            <div className="mb-7">
              <div className="mb-3 md:flex justify-evenly">
                <DescriptionItems />

                <hr className="mb-7 md:hidden" />
                {/* <CircularBars /> */}

                <ProgressBars />
              </div>
              <hr />
            </div>

            {/* Third Block */}
            <Education />
            <hr className="mb-7" />

            {/* Fourth Block */}
            <Projects />
            <hr className="mb-7" />

            {/* Fifth Block */}
            <Experience />
            <hr className="mb-7" />

            {/* Sixth Block */}
            <Certificates />
            <hr className="mb-14 print:mb-16" />

            {/* Seventh Block */}
            <Gallery />
            <hr className="print:hidden mb-28" />
            {/* Eighth Block */}
            <BadgeList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
