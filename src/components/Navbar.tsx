"use client"; // Ensures this component runs only on the client side

import { useEffect, useState } from 'react';

const Navbar = () => {
  // State to handle the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");

      if (navbar) {
        if (window.scrollY > 100) {
          // Add black background and shadow when scrolled down
          navbar.classList.add("bg-black", "shadow-lg", "sticky", "top-0");
          navbar.classList.remove("bg-transparent");
        } else {
          // Remove black background and shadow when at the top
          navbar.classList.add("bg-transparent");
          navbar.classList.remove("bg-black", "shadow-lg", "sticky", "top-0");
        }
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  // Smooth scroll function
  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling effect
        block: 'start', // Scroll to the top of the element
      });
    }
  };

  return (
    <nav id="navbar" className="bg-transparent absolute top-0 left-0 right-0 z-30 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex items-center justify-between px-4 py-5">
        <a
          className="font-bold text-xl text-white"
          href="#home-section"
          onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleScrollToSection('home-section');
          }}
        >
          S.M AFIF
        </a>

        {/* Hamburger icon for mobile */}
        <div className="lg:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <button className="text-white focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navbar links */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="#home-section"
            className="text-white hover:text-yellow-400 transition"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('home-section');
            }}
          >
            Home
          </a>
          <a
            href="#about-section"
            className="text-white hover:text-yellow-400 transition"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('about-section');
            }}
          >
            About
          </a>
          <a
            href="#project-section"
            className="text-white hover:text-yellow-400 transition"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('project-section');
            }}
          >
            Projects
          </a>
          <a
            href="#contact-section"
            className="text-white hover:text-yellow-400 transition"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection('contact-section');
            }}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu - only displayed when 'isMenuOpen' is true */}
      <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} bg-black text-white p-4`}>
        <a
          href="#home-section"
          className="block py-2 text-lg hover:text-yellow-400"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection('home-section');
          }}
        >
          Home
        </a>
        <a
          href="#about-section"
          className="block py-2 text-lg hover:text-yellow-400"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection('about-section');
          }}
        >
          About
        </a>
        <a
          href="#project-section"
          className="block py-2 text-lg hover:text-yellow-400"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection('project-section');
          }}
        >
          Projects
        </a>
        <a
          href="#contact-section"
          className="block py-2 text-lg hover:text-yellow-400"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection('contact-section');
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
