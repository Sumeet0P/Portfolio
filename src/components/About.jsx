import React from "react";
import Lottie from "lottie-react";
import ComputerAnimation from "../assets/Programming Computer.json";
import SkillAnimation from "../assets/developer skills.json";

const About = () => {
  return (
    <div className="relative about min-h-screen flex flex-col items-center justify-evenly p-8">
      {/* Left animation */}
      <div className="absolute pb-12 left-50 top-1/2 transform -translate-y-1/2 w-1/4 z-0">
        <Lottie animationData={ComputerAnimation} loop={true} className="opacity-80 animate-pulse" />
      </div>

      {/* Right animation */}
      <div className="absolute pt-48 right-50 top-1/2 transform -translate-y-1/2 w-1/4 z-0">
        <Lottie animationData={SkillAnimation} loop={true} className="opacity-80 animate-pulse" />
      </div>

      <p className="z-10 text-8xl text-center">About Me</p>

      <p className="z-10 text-5xl text-center">I Am a Full Stack Developer</p>

      <div className="z-10 text-5xl grid grid-cols-2 gap-8 items-center justify-center p-6 w-[85%]">
        <div className="">
          Technologies I Use:
          <ul className="text-2xl p-4 list-disc list-inside">
            <li>MongoDB.</li>
            <li>Express.js.</li>
            <li>React.js.</li>
            <li>Node.js.</li>
            <li>Tailwind CSS.</li>
          </ul>
        </div>

        <div>
          <p className="">Programming Languages:</p>
          <ul className="text-2xl p-4 list-disc list-inside">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>SQL</li>
            <li>C++</li>
            <li>C</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
