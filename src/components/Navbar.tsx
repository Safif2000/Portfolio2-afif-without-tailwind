import React, { useState, useEffect } from 'react';
import styles from '../app/styles/navbar.module.css'; // Correct relative path

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add(styles.stickyNavbar);  // Use styles object
          navbar.classList.remove(styles.bgTransparent);
        } else {
          navbar.classList.add(styles.bgTransparent);
          navbar.classList.remove(styles.stickyNavbar);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav id="navbar" className={styles.navbar}>  {/* Apply CSS module classes here */}
      <div className={styles.navbarContainer}>
        <a
          className={styles.navbarLogo}
          href="#home-section"
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("home-section");
          }}
        >
          S.M AFIF
        </a>

        {/* Hamburger icon for mobile */}
        <div
          className={styles.hamburgerContainer}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <button className={styles.hamburgerBtn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={styles.hamburgerIcon}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Desktop Navbar links */}
        <div className={styles.desktopMenu}>
          <a
            href="#home-section"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("home-section");
            }}
          >
            Home
          </a>
          <a
            href="#about-section"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("about-section");
            }}
          >
            About
          </a>
          <a
            href="#project-section"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("project-section");
            }}
          >
            Projects
          </a>
          <a
            href="#contact-section"
            onClick={(e) => {
              e.preventDefault();
              handleScrollToSection("contact-section");
            }}
          >
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ""}`}
      >
        <a
          href="#home-section"
          className={styles.mobileMenuLink}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("home-section");
          }}
        >
          Home
        </a>
        <a
          href="#about-section"
          className={styles.mobileMenuLink}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("about-section");
          }}
        >
          About
        </a>
        <a
          href="#project-section"
          className={styles.mobileMenuLink}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("project-section");
          }}
        >
          Projects
        </a>
        <a
          href="#contact-section"
          className={styles.mobileMenuLink}
          onClick={(e) => {
            e.preventDefault();
            handleScrollToSection("contact-section");
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
