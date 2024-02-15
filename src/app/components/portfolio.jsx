import React from "react";
import { Progress } from "./";
function Portfolio() {
  return (
    <div id="portfolio" className="section ">
      <h1 className="text-center  text-2xl font-medium text-red-500 pb-4">
        Portfolio
      </h1>
      <h1 className="text-white text-5xl text-center ">My Amazing works</h1>

      <div className="grid grid-cols-3 gap-4 my-14">
        <div className=" h-72 bg-red-600"></div>
        <div className="  bg-red-600 row-span-2"></div>
        <div className=" h-72 bg-red-600"></div>
        <div className=" h-72 bg-red-600"></div>
        <div className=" bg-red-600 row-span-2"></div>
        <div className=" h-72 bg-red-600"></div>
        <div className=" h-72 bg-red-600"></div>
      </div>

      <div className="flex flex-col gap-8">
        <h1 className="text-white text-5xl text-center ">
          Technical competence
        </h1>
        <div className="">
          <h1 className="text-xl text-red-600 pb-4">Language</h1>
          <ul className="grid grid-cols-5 gap-4 font-semibold">
            <li className="relative">
              HTML <Progress color="bg-teal-600" percentage={95} />
            </li>
            <li className="relative">
              CSS <Progress color="bg-orange-600" percentage={50} />
            </li>
            <li className="relative">
              Javascript <Progress color="bg-lime-600" percentage={60} />
            </li>
            <li className="relative">
              PHP <Progress color="bg-amber-600" percentage={40} />
            </li>
            <li className="relative">
              C/C++ <Progress color="bg-green-600" percentage={50} />
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl text-red-600 pb-4">Framework</h1>
          <ul className="grid grid-cols-5 gap-4  font-semibold">
            <li className="relative">
              React.js / Next.js <Progress color="bg-emerald-600" percentage={65} />
            </li>
            <li className="relative">
              Node.js / express.js{" "}
              <Progress color="bg-red-600" percentage={60} />
            </li>
            <li className="relative">
              Tailwind CSS  <Progress color="bg-yellow-600" percentage={80} />
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="text-xl text-red-600 pb-4">Database</h1>
          <ul className="grid grid-cols-5 gap-4  font-semibold">
            <li className="relative">
              MongoDB <Progress color="bg-cyan-600" percentage={47} />
            </li>

            <li className="relative">
              MySql <Progress color="bg-indigo-600" percentage={50} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
