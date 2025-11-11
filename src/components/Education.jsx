import React, { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import CertificateAnimation from "../assets/CERTIFICATE FOR GRADUATION.json";

const Education = () => {
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { amount: 0.5, once: false });

  const lottieRef = useRef();

  useEffect(() => {
    if (isInView) {
      lottieRef.current?.play(); // Play when visible
    } else {
      lottieRef.current?.stop(); // Stop when out of view
    }
  }, [isInView]);

  return (
    <motion.div id="education"
      ref={counterRef}
      className="relative education min-h-screen flex flex-col items-center justify-evenly p-4 md:p-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <p className="responsive-text-8xl text-center">
        <Typewriter
          words={["Education"]}
          typeSpeed={120}
          deleteSpeed={50}
          delaySpeed={1500}
          loop={false}
          cursor
          cursorStyle="|"
          cursorClassName="typewriter-cursor"
        />
      </p>

      <div className="md:block absolute w-[65%] top-1/2 transform -translate-y-1/2 md:w-1/5 z-0">
        <Lottie
          lottieRef={lottieRef}
          animationData={CertificateAnimation}
          loop={false}
          className="opacity-30"
        />
      </div>

      <div className="relative responsive-text-2xl grid grid-cols-1 md:grid-cols-2 gap-4 items-start justify-center p-4 md:p-6 w-full md:w-[85%]">
        <div className="text-2xl space-y-2">
          <p className="text-5xl">Bachelor's Degree in Computer Application</p>
          <p className="">Chhatrapati Shivaji Maharaj University</p>
          <p className="">Graduated: 2024</p>
        </div>

        <div className="text-4xl">
          Relevant Coursework:
          <ul className="text-2xl pt-4">
            {/* <li>Data Structures and Algorithms.</li> */}
            <li>Web Development.</li>
            <li>Database Management.</li>
            <li>Software Engineering.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
