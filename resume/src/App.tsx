import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-3/4 bg-hero relative">
      <div className="flex justify-center p-16 w-full h-[34em] bg-hero-pattern bg-cover bg-left-bottom bg-no-repeat ">
        <div className="bg-white w-full lg:max-w-5xl absolute border h-10"></div>
      </div>
    </div>
  );
}

export default App;
