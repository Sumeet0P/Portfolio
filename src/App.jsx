import React from "react";
import "./App.css";
import "./index.css";
import Home from "./components/home";
import About from "./components/About";
import Education from "./components/Education";

const App = () => {
  return (
    <>
      <div className="bg-[#1a1a1a] text-[#e0e0e0] ">
        <Home />
        <About />
        <Education />
      </div>
    </>
  );
};

export default App;
