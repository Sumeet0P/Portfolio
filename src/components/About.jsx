import React from "react";

const About = () => {
  return (
    <div className="about min-h-screen flex flex-col items-center justify-evenly p-8">
      <p className="text-8xl text-center">About Me</p>

      <p className="text-5xl text-center">I Am a Full Stack Developer</p>

      <div className="text-5xl grid grid-cols-2 gap-8 items-center justify-center p-6 w-[85%]">
        {/* <div className="text-2xl space-y-2">
          <p className="text-5xl">I Am a Full Stack Developer</p>
          <p className="">I Turn Ideas Into Reality.</p>
          <p className="">I Enjoy Building User-Friendly Interfaces.</p>
          <p className="">I Am Passionate About Learning New Technologies.</p>
        </div> */}
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
