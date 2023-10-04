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
        <ul className={Styles.techListContainer}>
          <li>
            <h3>front-end web technologies</h3>
            <ul className={Styles.techList}>
              <li>
                <i class="fab fa-html5 fa-2x"></i>
              </li>
              <li>
                <i class="fab fa-css3-alt fa-2x"></i>
              </li>
              <li>
                <i class="fab fa-js fa-2x"></i>
              </li>
              <li>
                <i class="fab fa-react fa-2x"></i>
              </li>
            </ul>
          </li>
          <li>
            <h3>backend web technologies</h3>
            <ul className={Styles.techList}>
              <li>
                <i class="fab fa-python fa-2x"></i>
              </li>
              <li>
                <i class="fas fa-flask fa-2x"></i>
              </li>
              <li>
                <i class="fas fa-database fa-2x"></i>
              </li>
            </ul>
          </li>
          <li>
            <h3>other technologies</h3>
            <ul className={Styles.techList}>
              <li>
                <i class="fab fa-git fa-2x"></i>
              </li>
              <li>
                <i class="fab fa-aws fa-2x"></i>
              </li>
            </ul>
          </li>
        </ul>
        <div className={Styles.imgContainer}>
          <img src={profile_pic} alt="carlos gomez" />
        </div>
      </div>
    </div>
  );
};

export default About;
