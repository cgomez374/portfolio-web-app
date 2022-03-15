import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
  const sendEmail = () => {
    document.location = "mailto:cgomez37484@gmail.com";
  };
  return (
    <footer className={Styles.footer} id={"contact"}>
      <h2>Let's work together!</h2>
      <ul>
        <li>
          <a
            href="https://github.com/cgomez374"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fab fa-github fa-2x"></i>
          </a>
        </li>
        <li onClick={sendEmail}>
          <a href="#">
            <i class="fas fa-envelope fa-2x"></i>
          </a>
        </li>
        {/* <li>
          <a
            href="https://www.linkedin.com/in/carlos-gomez-666662ab/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa-solid fa-circle-user fa-2x"></i>
          </a>
        </li> */}
      </ul>
    </footer>
  );
};

export default Footer;
