import React from "react";
import Lottie from "lottie-react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import ComputerAnimation from "../assets/Programming Computer.json";
import SkillAnimation from "../assets/developer skills.json";

const About = () => {
  return (
    <motion.div
      className="relative about min-h-screen flex flex-col items-center justify-evenly p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Left animation */}
      <div className="absolute pb-12 left-50 top-1/2 transform -translate-y-1/2 w-1/4 z-0">
        <Lottie
          animationData={ComputerAnimation}
          loop={true}
          className="opacity-60 animate-pulse"
        />
      </div>

      {/* Right animation */}
      <div className="absolute pt-48 right-50 top-1/2 transform -translate-y-1/2 w-1/4 z-0">
        <Lottie
          animationData={SkillAnimation}
          loop={true}
          className="opacity-60 animate-pulse"
        />
      </div>

      <p className="z-10 text-8xl text-center">
        <Typewriter
          words={["About Me"]}
          typeSpeed={120} // Faster typing
          deleteSpeed={50} // Speed when deleting
          delaySpeed={1500} // Delay before next word starts
          loop={false}
          cursor
          cursorStyle="|"
          cursorClassName="typewriter-cursor"
        />
      </p>

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
    </motion.div>
  );
};

export default About;
