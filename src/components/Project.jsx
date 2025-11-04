import React from "react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";

const Project = () => {
  return (
    <motion.div className="projects h-screen flex flex-col items-center justify-evenly p-8"
    initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}>
      <p className="text-8xl text-center"><Typewriter
                words={["Projects"]}
                typeSpeed={120} // Faster typing
                deleteSpeed={50} // Speed when deleting
                delaySpeed={1500} // Delay before next word starts
                loop={false}
                cursor
                cursorStyle="|"
                cursorClassName="typewriter-cursor"
              /></p>

      <div className="grid grid-cols-2 gap-8 w-[85%] text-2xl">
        <div>
          <p className="text-4xl mb-2">TaskTrackr App</p>
          <p>
            A React Native task management app with animations, tab navigation,
            and local storage.
          </p>
        </div>
        <div>
          <p className="text-4xl mb-2">LinkTree Clone</p>
          <p>
            Built with Next.js and Tailwind — custom UI and dynamic links for
            social profiles.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
