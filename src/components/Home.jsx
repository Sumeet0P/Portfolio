import React from "react";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import AvatarAnimation from "../assets/Avatar.json"; // path to your file

const Home = () => {
  return (
    <>
      <motion.nav
        className="items-center bg-transparent justify-center text-2xl p-4 sticky top-0 z-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <ul className="flex items-center justify-center cursor-pointer divide-x divide-gray-500">
          <li className="px-4">
            <Link activeClass="active" to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link activeClass="active" to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="px-4">
            <Link
              activeClass="active"
              to="education"
              smooth={true}
              duration={500}
            >
              Education
            </Link>
          </li>
          <li className="px-4">
            <Link
              activeClass="active"
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="px-4">
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        className="home min-h-screen flex flex-col items-center justify-center p-8"
      >
        <Lottie
          animationData={AvatarAnimation}
          loop={true}
          className="w-96 h-96 "
        />
        <h1 className="text-8xl chetta m-8 text-center">
          <Typewriter
            words={["Sumeet Chauhan"]}
            typeSpeed={120} // Faster typing
            deleteSpeed={50} // Speed when deleting
            delaySpeed={1500} // Delay before next word starts
            loop={false}
            cursor
            cursorStyle="|"
            cursorClassName="typewriter-cursor"
          />
        </h1>
      </motion.div>
    </>
  );
};

export default Home;
