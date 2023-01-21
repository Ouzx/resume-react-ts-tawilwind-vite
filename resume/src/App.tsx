import BadgeList from "./components/BadgeList";
// import CircularBars from "./components/Circular/CircularBars";
import DescriptionItems from "./components/DescriptionGroup/DescriptionItems";
import DownloadResume from "./components/Buttons/DownloadResume";
import ProgressBars from "./components/ProgressBar/ProgressBars";
import SocialIcons from "./components/Social/SocialIcons";
import GithubRepo from "./components/Buttons/GithubRepo";
import Gallery from "./components/Gallery/Gallery";
import Education from "./components/Education/Education";

function App() {
  return (
    <div className="h-3/4 bg-hero relative">
      <div className=" h-[34em] bg-hero-pattern bg-cover bg-left-bottom bg-no-repeat ">
        <div className="mx-auto lg:p-8 flex flex-col lg:flex-row justify-evenly items-start max-w-7xl">
          <div className="shrink-0 w-full lg:mr-2 lg:max-w-[18rem] ">
            <div className="p-5 hover:bg-white transition-colors delay-75 bg-[#c0e3e7] shadow-2xl">
              <img
                className="my-5 h-48 w-48 rounded-full mx-auto"
                src="https://certy.px-lab.com/designer/wp-content/uploads/sites/2/2017/05/certy_avatar-195x195.jpg"
                alt="Profile-Picture"
              />
              <h1 className="font-bold text-center mb-3">OLA LOWE</h1>
              <p className="text-center text-darkText mb-5">
                Creative Designer
              </p>

              <SocialIcons />
            </div>
            <div className="p-5 shadow-2xl bg-white lg:mt-3">
              <BadgeList />
            </div>
            <div className="print:hidden p-5 shadow-2xl bg-white lg:mt-3 flex flex-wrap justify-center items-center">
              <DownloadResume />
              <div className="lg:mt-3 lg:ml-0 ml-3">
                <GithubRepo />
              </div>
            </div>
          </div>

          <div className="bg-white shrink w-full lg:max-w-[50rem] px-10 py-5">
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
            <div className="mb-7">
              <div className="mb-3 md:flex justify-evenly">
                <DescriptionItems />
                <hr className="mb-7 md:hidden" />
                {/* <CircularBars /> */}
                <ProgressBars />
              </div>
              <hr />
            </div>
            {/* <Gallery /> */}
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
