import React from "react";
import Image from "next/image";
import about from "../../../public/images/headerimg.png";
import dec from "../../../public/images/1.png";

function About() {
  return (
    <div
      id="about"
      className="section grid grid-cols-2 items-center  gap-14 "
    >
      <div className="relative">
        <Image
          src={about}
          alt="Your Image Alt Text  "
          height={500}
          className="mx-auto"
        />
        <Image
          src={dec}
          alt="Your Image Alt Text  "
          height={150}
          width={150}
          className="absolute  -left-14 -top-8"
        />
        <div className="grid grid-cols-2 items-center  px-8  h-28 absolute top-44 -left-20 bg-secondary rounded-md shadow-md">
          <span className="text-5xl font-bold text-green-600 ">18</span>
          <h1 className="text-xl font-bold">
            Years of <br />
            Success
          </h1>
        </div>
      </div>

      <div className="">
        <h1 className="  text-xl font-medium text-red-500 pb-4">
          I'm a Developer
        </h1>
        <h1 className="text-white text-5xl pb-8">
          I Can Design Anything You Want
        </h1>
        <p className="text-gray-400 text-lg">
          Hello there! I'm a web designer, and I'm very passionate and dedicated
          to my work. With 20 years experience as a professional web developer,
          I have acquired the skills and knowledge necessary to make your
          project a success. I enjoy every step of the design process, from
          discussion and collaboration.
        </p>
      </div>
    </div>
  );
}

export default About;
