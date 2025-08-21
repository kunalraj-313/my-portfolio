import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Name */}
          <div>
            <h1 className="text-orange-500 text-2xl font-bold typewriter-text">
              {"{ Kunal }"}
            </h1>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <a
                href="#home"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <ul className="pb-4 space-y-2">
            <li>
              <a
                href="#home"
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-gray-700 hover:text-primary transition-colors py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
