import React from "react";

const Education = () => {
  return (
    <div className="education h-screen flex flex-col items-center justify-evenly p-8">
      <p className="text-8xl text-center">Education</p>

      <div className="text-5xl grid grid-cols-2 gap-4 items-center justify-center p-6 w-[85%]">
        <div className="text-2xl space-y-2">
          <p className="text-5xl">Bachelor's Degree in Computer Application</p>
          <p className="">Chhatrapati Shivaji Maharaj University</p>
          <p className="">Graduated: 2024</p>
        </div>

        <div className="">
          Relevant Coursework:
          <ul className="text-2xl p-4">
            <li>Data Structures and Algorithms.</li>
            <li>Web Development.</li>
            <li>Database Management.</li>
            <li>Software Engineering.</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Education;
