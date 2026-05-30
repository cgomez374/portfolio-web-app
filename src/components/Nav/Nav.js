import React from "react";
import Styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={Styles.nav}>
      <ul className={Styles.list}>
        <li>
          <a href="#home">home</a>
        </li>
        <li>
          <a href="#about">about me</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
