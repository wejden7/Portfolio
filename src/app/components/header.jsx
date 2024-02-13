"use client";
import React from "react";
import { useEffect, useState } from "react";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full z-10 flex items-center justify-between px-24 py-6 fixed top-0 transition-colors duration-300 ${
        scrollPosition > 10 ? "bg-primary " : ""
      }`}
    >
      <h1 className="text-white text-xl font-bold font-serif">
        Wej<span className="text-red-600">Dev</span>
      </h1>
      <nav>
        <ul className="flex items-center gap-8 font-semibold text-white">
          <li>
            <a href="#" className="text-red-600">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Service</a>
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

export default Header;
