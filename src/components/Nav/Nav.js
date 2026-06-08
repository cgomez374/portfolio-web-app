import React, { useState, useEffect } from "react";
import Styles from "./Nav.module.css";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <nav className={Styles.nav}>
      <button
        className={Styles.hamburger}
        onClick={handleToggleMenu}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <span className={Styles.hamburgerIcon}></span>
      </button>
      <ul
        className={`${Styles.list} ${isMenuOpen ? Styles.listOpen : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <li>
          <a href="#home" onClick={handleNavClick}>
            home
          </a>
        </li>
        <li>
          <a href="#about" onClick={handleNavClick}>
            about me
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleNavClick}>
            projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleNavClick}>
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
