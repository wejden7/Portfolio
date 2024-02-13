import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
function SectionOne() {
  return (
    <div className="mx-24 grid grid-cols-2 items-center gap-4 ">
      <div className="text-white grid gap-6">
        <h4 className="text-2xl font-bold text-red-600">Hello, I'm</h4>
        <h1 className="font-bold text-5xl ">Wejden Chneti</h1>
        <h3 className="text-lg">
          A <span className="text-green-300">Junior Full Stack Developer</span>{" "}
          From <span className="text-sky-300">Tunis</span>
        </h3>
        <p className="font-medium">
          I'm creative designer based in New York, and I'm very passionate and{" "}
          <br /> dedicated to my work.
        </p>
        <div className="flex items-center space-x-4">
          <button className="btn-base btn-custom mr-4">About Me</button>
          <FaGithub />
          <FaLinkedin />
        </div>
      </div>
      <div className="border-2 border-red-500 h-72">2</div>
    </div>
  );
}

export default SectionOne;
