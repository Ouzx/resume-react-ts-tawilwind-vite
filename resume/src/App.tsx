function App() {
  return (
    <div className="h-3/4 bg-hero relative">
      <div className=" h-[34em] bg-hero-pattern bg-cover bg-left-bottom bg-no-repeat ">
        <div className="mx-auto md:p-8 flex flex-col md:flex-row justify-evenly items-center max-w-7xl">
          <div className="bg-white shrink-0 w-full h-10 md:mr-2 md:max-w-[18rem]"></div>
          <div className="bg-white shrink w-full h-10 max-w-[50rem]"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
