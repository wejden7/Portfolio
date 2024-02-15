"use client";
import React from "react";
import { useEffect, useState } from "react";
import Link from "next/link";

function NavBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + 96;
      const sections = document.querySelectorAll(".section");
      let activeSectionSelect = null;
      setScrollPosition(position);

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (position >= sectionTop && position < sectionTop + sectionHeight) {
          activeSectionSelect = section.id;
        }
      });
      setActiveSection(activeSectionSelect);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` w-full z-10 flex items-center justify-between px-28 py-6 fixed top-0 transition-colors duration-300 ${
        scrollPosition > 150 ? "bg-primary shadow-md shadow-white/5 " : ""
      }`}
    >
      <h1 className="text-white text-xl font-bold font-serif">
        Wej<span className="text-red-600">Dev</span>
      </h1>
      <nav>
        <ul className="flex items-center gap-8 font-semibold text-white">
          <li>
            <Link
              href="#home"
              className={`transition-colors duration-500 ${
                activeSection == "home" && "text-red-500"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className={`transition-colors duration-500 ${
                activeSection == "about" && "text-red-500"
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#portfolio"
              className={`transition-colors duration-500 ${
                activeSection == "portfolio" && "text-red-500"
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="#service"
              className={`transition-colors duration-500 ${
                activeSection == "service" && "text-red-500"
              }`}
            >
              Service
            </Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <button className="btn-base">Download CV</button>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
