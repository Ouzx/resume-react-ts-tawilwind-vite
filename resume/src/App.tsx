import SocialIcons from "./components/Social/SocialIcons";

function App() {
  return (
    <div className="h-3/4 bg-hero relative">
      <div className=" h-[34em] bg-hero-pattern bg-cover bg-left-bottom bg-no-repeat ">
        <div className="mx-auto md:p-8 flex flex-col md:flex-row justify-evenly items-center max-w-7xl">
          <div className="p-5 hover:bg-white transition-colors delay-75 bg-[#c0e3e7] shrink-0 w-full md:mr-2 md:max-w-[18rem] shadow-2xl">
            <img
              className="my-5 h-48 w-48 rounded-full mx-auto"
              src="https://certy.px-lab.com/designer/wp-content/uploads/sites/2/2017/05/certy_avatar-195x195.jpg"
              alt="Profile-Picture"
            />
            <h1 className="font-bold text-center mb-3">OLA LOWE</h1>
            <p className="text-center text-secondary mb-5">Creative Designer</p>

            <SocialIcons />
          </div>
          <div className="bg-white shrink w-full max-w-[50rem] px-10 py-5">
            <h1 className="font-bold mb-12">{"HELLO, I'M OLA!"}</h1>
            <p className="mb-14 text-secondary">
              I am a talanted Freelance Graphic Designer and Illustrator. I
              design websites, logos, brochures, banners, book covers, and
              everything related to design and inspiration. I have graduated
              from International University of Design. Some of my works featured
              on international exhibition of design.
            </p>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
