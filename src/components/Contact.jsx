import React, { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";
import ContactAnimation from "../assets/send email contact oil color.json";

const Contact = () => {
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
    <motion.footer id="contact"
      className="relative flex flex-col justify-center items-center contact top-30 p-4 md:p-8 text-center responsive-text-2xl min-h-[50vh]"
      ref={counterRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className="md:block absolute w-1/4 mb-40 transform md:pt-16 md:left-95 -translate-y-1/2 md:w-1/12 z-0">
        <Lottie
          lottieRef={lottieRef}
          animationData={ContactAnimation}
          loop={false}
          className="opacity-100"
        />
      </div>
      <p>
        <Typewriter
          words={["Let's Connect!"]}
          typeSpeed={120} // Faster typing
          deleteSpeed={50} // Speed when deleting
          delaySpeed={1500} // Delay before next word starts
          loop={false}
          cursor
          cursorStyle="|"
          cursorClassName="typewriter-cursor"
        />
      </p>
      <p className="relative">
        <a href="mailto:schauhan8886@gmail.com">
          Email: schauhan8886@gmail.com
        </a>
      </p>
      <p className="relative">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Sumeet0P">
          GitHub: github.com/Sumeet0P
        </a>
      </p>
      <p className="relative">
        <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/sumeetchauhan37">
          LinkedIn: linkedin.com/in/sumeetchauhan37
        </a>
      </p>
    </motion.footer>
  );
};

export default Contact;
