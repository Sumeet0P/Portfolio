import React from "react";

const About = () => {
  return (
    <div className="about-page h-screen flex flex-col items-center justify-evenly p-8">
      <p className="text-8xl text-center">About Me</p>

      <div className="text-5xl grid grid-cols-2 gap-16 items-center justify-center p-6 w-[85%]">
        <div className="text-2xl space-y-2">
          <p className="text-5xl">I Am a Full Stack Developer</p>
          <p className="">I Turn Ideas Into Reality.</p>
          <p className="">I Enjoy Building User-Friendly Interfaces.</p>
          <p className="">I Am Passionate About Learning New Technologies.</p>
        </div>
        <div className="">
          Technologies I Use:
          <ul className="text-2xl p-4">
            <li>React.js.</li>
            <li>MongoDB.</li>
            <li>Tailwind CSS.</li>
            <li>Node.js.</li>
            <li>Express.js.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
