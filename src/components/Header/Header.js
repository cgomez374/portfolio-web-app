import React from "react";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={Styles.header} id={"home"}>
      <h1 className={Styles.title}>Carlos Gomez</h1>
      <p className={Styles.subtitle}>
        Full-stack developer crafting scalable solutions with React, Python, and
        modern cloud technologies.
      </p>
      <a href="#projects" className={Styles.cta}>
        View My Work
      </a>
    </header>
  );
};

export default Header;
