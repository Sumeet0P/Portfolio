import React, { useState } from "react";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import { motion } from "motion/react";
import { Typewriter } from "react-simple-typewriter";
import AvatarAnimation from "../assets/Avatar.json";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="navbar flex items-center justify-between md:justify-center text-2xl p-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <button
          className="md:hidden text-2xl px-4 hover:opacity-75 transition-opacity"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        
        <ul className={`
          absolute md:relative top-full left-0 right-0 
          flex flex-col md:flex-row items-center justify-center 
          bg-[#1a1a1a]/90 backdrop-blur-sm md:bg-transparent
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible md:opacity-100 md:visible'}
          cursor-pointer md:divide-x md:divide-gray-500
        `}>
          <li className="w-full md:w-auto">
            <Link 
              activeClass="active" 
              to="home" 
              smooth={true} 
              duration={500}
              className="block px-4 py-3 md:py-0 hover:bg-gray-800/50 md:hover:bg-transparent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link 
              activeClass="active" 
              to="about" 
              smooth={true} 
              duration={500}
              className="block px-4 py-3 md:py-0 hover:bg-gray-800/50 md:hover:bg-transparent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              activeClass="active"
              to="education"
              smooth={true}
              duration={500}
              className="block px-4 py-3 md:py-0 hover:bg-gray-800/50 md:hover:bg-transparent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Education
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              activeClass="active"
              to="projects"
              smooth={true}
              duration={500}
              className="block px-4 py-3 md:py-0 hover:bg-gray-800/50 md:hover:bg-transparent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
          </li>
          <li className="w-full md:w-auto">
            <Link
              activeClass="active"
              to="contact"
              smooth={true}
              duration={500}
              className="block px-4 py-3 md:py-0 hover:bg-gray-800/50 md:hover:bg-transparent transition-colors"
              onClick={() => setIsMenuOpen(false)}
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
        <h1 className="text-6xl md:text-8xl chetta m-8 text-center">
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
