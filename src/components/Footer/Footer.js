import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
  const sendEmail = () => {
    document.location = "mailto:cgomez37484@gmail.com";
  };
  return <footer className={Styles.footer} id={"contact"}></footer>;
};

export default Footer;
