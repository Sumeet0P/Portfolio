import React from "react";

const Project = () => {
  return (
    <div className="projects h-screen flex flex-col items-center justify-evenly p-8">
      <p className="text-8xl text-center">Projects</p>

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
    </div>
  );
};

export default Project;
