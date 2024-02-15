import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import NavBar from "@/app/components/navBar";
import headerImg from "../../../public/images/headerimg.png";
import { GoTriangleDown } from "react-icons/go";
import node from "../../../public/images/node.png";
import react from "../../../public/images/react.png";
import proficiency from "../../../public/images/proficiency.png";
import skills from "../../../public/images/skills.png";
import detail from "../../../public/images/detail.png";

function Header() {
  return (
    <>
      <NavBar />
      <div id="home" className="section  header  ">
        <div className=" grid grid-cols-2 h-screen items-center gap-4 relative">
          <div className="text-white grid gap-6 ">
            <h4 className="text-2xl font-bold text-red-600">Hello, I'm</h4>
            <h1 className="font-bold text-5xl ">Wejden Chneti</h1>
            <h3 className="text-lg">
              A{" "}
              <span className="text-green-300">
                Junior Full Stack Developer
              </span>{" "}
              From <span className="text-sky-300">Tunis</span>
            </h3>
            <p className="font-medium">
              I'm creative designer based in New York, and I'm very passionate
              and <br /> dedicated to my work.
            </p>
            <div className="flex items-center space-x-4">
              <button className="btn-base btn-custom mr-4">About Me</button>
              <FaGithub />
              <FaLinkedin />
            </div>
          </div>
          <div className=" mx-auto relative">
            <Image
              src={headerImg}
              alt="Your Image Alt Text "
              className=""
              width={320}
              height={300}
            />
            <Image
              src={node}
              alt="Your Image Alt Text "
              className=" absolute top-8 -left-8 animate-img"
              width={80}
              height={80}
            />
            <Image
              src={react}
              alt="Your Image Alt Text "
              className=" absolute top-1/3 -right-14 animate-img "
              width={60}
              height={60}
            />
          </div>
        </div>
        <GoTriangleDown className="text-4xl  text-white absolute bottom-6 left-1/2 -translate-x-1/2" />

        <div className="grid grid-cols-3 gap-6 text-center   pt-14 ">
          <div>
            <Image
              src={proficiency}
              alt="Your Image Alt Text "
              className=" mx-auto mb-6"
              width={80}
              height={60}
            />
            <h1 className="text-2xl font-bold text-white pb-6">
              Technical Proficiency
            </h1>
            <p className="text-lg text-gray-400">
              A strong foundation in programming languages, frameworks, and
              tools relevant to web development is crucial.
            </p>
          </div>
          <div>
            <Image
              src={skills}
              alt="Your Image Alt Text "
              className=" mx-auto mb-6"
              width={60}
              height={60}
            />
            <h1 className="text-2xl font-bold text-white pb-6">
              Problem-Solving Skills
            </h1>
            <p className="text-lg text-gray-400">
              Are essential for troubleshooting issues, debugging code, and
              implementing innovative solutions to challenges.
            </p>
          </div>
          <div>
            <Image
              src={detail}
              alt="Your Image Alt Text "
              className=" mx-auto mb-6"
              width={60}
              height={60}
            />
            <h1 className="text-2xl font-bold text-white pb-6">
              Attention to Detail
            </h1>
            <p className="text-lg text-gray-400">
              Paying attention to detail is crucial for ensuring that websites
              are visually appealing, responsive, and user-friendly.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
