import React from "react";
import Styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={Styles.header} id={"home"}>
      <h1
        style={{
          fontSize: "3.5rem",
          marginBottom: "1rem",
          color: "var(--color-accent-primary)",
        }}
      >
        Carlos Gomez
      </h1>
      <p
        style={{
          fontSize: "1.2rem",
          color: "var(--color-text-secondary)",
          marginBottom: "2rem",
          maxWidth: "600px",
        }}
      >
        Full-stack developer crafting scalable solutions with React, Python, and
        modern cloud technologies.
      </p>
      <a
        href="#projects"
        style={{
          display: "inline-block",
          padding: "0.75rem 2rem",
          backgroundColor: "var(--color-accent-primary)",
          color: "var(--color-bg-primary)",
          borderRadius: "4px",
          fontWeight: "600",
          transition: "all 0.3s ease",
          textTransform: "uppercase",
          fontSize: "0.9rem",
          letterSpacing: "1px",
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "var(--color-accent-secondary)";
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 8px 20px rgba(208, 208, 208, 0.25)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "var(--color-accent-primary)";
          e.target.style.transform = "translateY(0)";
          e.target.style.boxShadow = "none";
        }}
      >
        View My Work
      </a>
    </header>
  );
};

export default Header;
