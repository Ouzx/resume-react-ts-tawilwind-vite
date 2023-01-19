import DescriptionItems from "./components/DescriptionGroup/DescriptionItems";
import SocialIcons from "./components/Social/SocialIcons";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function App() {
  return (
    <div className="h-3/4 bg-hero relative">
      <div className=" h-[34em] bg-hero-pattern bg-cover bg-left-bottom bg-no-repeat ">
        <div className="mx-auto md:p-8 flex flex-col md:flex-row justify-evenly items-start max-w-7xl">
          <div className="p-5 hover:bg-white transition-colors delay-75 bg-[#c0e3e7] shrink-0 w-full md:mr-2 md:max-w-[18rem] shadow-2xl">
            <img
              className="my-5 h-48 w-48 rounded-full mx-auto"
              src="https://certy.px-lab.com/designer/wp-content/uploads/sites/2/2017/05/certy_avatar-195x195.jpg"
              alt="Profile-Picture"
            />
            <h1 className="font-bold text-center mb-3">OLA LOWE</h1>
            <p className="text-center text-darkText mb-5">Creative Designer</p>

            <SocialIcons />
          </div>
          <div className="bg-white shrink w-full max-w-[50rem] px-10 py-5">
            <div className="mb-7">
              <h1 className="font-black mb-12">{"HELLO, I'M OLA!"}</h1>
              <p className="mb-14 text-darkText">
                I am a talanted Freelance Graphic Designer and Illustrator. I
                design websites, logos, brochures, banners, book covers, and
                everything related to design and inspiration. I have graduated
                from International University of Design. Some of my works
                featured on international exhibition of design.
              </p>
              <hr />
            </div>
            <div>
              <div className="flex">
                <div>
                  <h2 className="text-thinText mb-8">personal information</h2>
                  <DescriptionItems />
                </div>
                <div className=" flex-1">
                  <h2 className="text-thinText mb-8">additional skills</h2>
                  <div className="flex justify-between">
                    <div>
                      <CircularProgressbar
                        className="w-24"
                        value={66}
                        text={`${66}%`}
                        styles={buildStyles({
                          pathColor: "#c0e3e7",
                          textColor: "#000",
                        })}
                      />
                      <p className="text-center font-bold mt-3">UX Design</p>
                    </div>
                    <div>
                      <CircularProgressbar
                        className="w-24"
                        value={66}
                        text={`${66}%`}
                        styles={buildStyles({
                          pathColor: "#c0e3e7",
                          textColor: "#000",
                        })}
                      />
                      <p className="text-center font-bold mt-3">UX Design</p>
                    </div>
                    <div>
                      <CircularProgressbar
                        className="w-24"
                        value={66}
                        text={`${66}%`}
                        styles={buildStyles({
                          pathColor: "#c0e3e7",
                          textColor: "#000",
                        })}
                      />
                      <p className="text-center font-bold mt-3">UX Design</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
