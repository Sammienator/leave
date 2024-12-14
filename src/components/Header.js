import React, { useState, useEffect } from "react";

import { Link  } from "react-router-dom"; // Renamed for clarity
import { FaSun, FaMoon } from "react-icons/fa";
const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" || false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="fixed top-0 w-full bg-transparent z-50 transition-colors duration-300 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <img src="/assets/logo.png" alt="Logo" className="h-8" />
        <nav className="flex items-center space-x-4">
          <Link to="hero" smooth={true} duration={500} className="cursor-pointer">
            Home
          </Link>
          <Link to="about" smooth={true} duration={500} className="cursor-pointer">
            About
          </Link>
          <Link to="projects" smooth={true}duration={500} className="cursor-pointer">
            Projects
          </Link>
          <Link to="contact" smooth={true}duration={500} className="cursor-pointer">
            Contact
          </Link>
       
          <button
            onClick={toggleDarkMode}
            className="text-xl p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
