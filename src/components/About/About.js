import React from "react";
import Styles from "./About.module.css";
import profile_pic from "../../assets/profile_pic.jpg";

const About = () => {
  return (
    <div className={Styles.about}>
      <h2>meet me</h2>
      <div className={Styles.aboutInfo}>
        <p>
          I'm Carlos, a first-generation college graduate with a passion for
          software development and a background in customer-facing roles.
          Holding a Master's degree in Computer Science, I am equipped with both
          technical expertise and a deep appreciation for fostering meaningful
          interactions. I am excited to leverage my diverse experiences and
          education to create impactful solutions in the field of software
          development.
        </p>
        <div className={Styles.imgContainer}>
          <img src={profile_pic} alt="me" />
        </div>
      </div>
    </div>
  );
};

export default About;
