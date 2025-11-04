import React from "react";
import Lottie from "lottie-react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import ComputerAnimation from "../assets/Programming Computer.json";
import SkillAnimation from "../assets/developer skills.json";

const About = () => {
  return (
    <motion.div
      className="relative about min-h-screen flex flex-col items-center justify-evenly p-4 md:p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      {/* Left animation - hidden on mobile */}
      <div className="md:block absolute md:left-50 top-2/5 md:top-1/2 transform -translate-y-1/2 z-0 w-96 h-96">
        <Lottie
          animationData={ComputerAnimation}
          loop={true}
          className="opacity-60 animate-pulse"
        />
      </div>

      {/* Right animation - hidden on mobile */}
      <div className="md:block absolute pt-48 md:right-50 top-1/2 transform -translate-y-1/2 w-96 h-96 z-0">
        <Lottie
          animationData={SkillAnimation}
          loop={true}
          className="opacity-60 animate-pulse"
        />
      </div>

      <p className="z-10 responsive-text-8xl text-center">
        <Typewriter
          words={["About Me"]}
          typeSpeed={120}
          deleteSpeed={50}
          delaySpeed={1500}
          loop={false}
          cursor
          cursorStyle="|"
          cursorClassName="typewriter-cursor"
        />
      </p>

      <p className="z-10 responsive-text-5xl text-center">I Am a Full Stack Developer</p>

      <div className="z-10 responsive-text-2xl grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start justify-center p-4 md:p-6 w-full md:w-[85%]">
        <div className="text-4xl">
          Technologies I Use:
          <ul className="text-2xl p-4 list-disc list-inside">
            <li>MongoDB.</li>
            <li>Express.js.</li>
            <li>React.js.</li>
            <li>Node.js.</li>
            <li>Tailwind CSS.</li>
          </ul>
        </div>

        <div className="text-4xl">
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
