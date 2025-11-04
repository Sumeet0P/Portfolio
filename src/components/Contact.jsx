import React from "react";
import Lottie from "lottie-react";
import ContactAnimation from "../assets/send email contact oil color.json";

const Contact = () => {
  return (
    <footer className="relative justify-center items-center contact p-8 text-center text-2xl">
      <div className="absolute transform pt-16 left-95 -translate-y-1/2 w-1/12 z-0">
        <Lottie animationData={ContactAnimation} loop={true} className="opacity-80 animate-pulse" />
      </div>
      <p>Let’s connect!</p>
      <p className="relative"><a href="mailto:schauhan8886@gmail.com">Email: schauhan8886@gmail.com</a></p>
      <p className="relative"><a target="_blank" href="https://github.com/Sumeet0P">GitHub: github.com/Sumeet0P</a></p>
      <p className="relative"><a target="_blank" href="https://linkedin.com/in/sumeetchauhan37">LinkedIn: linkedin.com/in/sumeetchauhan37</a></p>
    </footer>
  );
};

export default Contact;
