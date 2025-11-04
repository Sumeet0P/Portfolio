import React from "react";
import "./App.css";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <div className="starfield text-[#e0e0e0]">
        <Home />
        <About />
        <Education />
        <Project />
        <Contact />
      </div>
    </>
  );
};

export default App;
