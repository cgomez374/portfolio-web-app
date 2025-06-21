import Styles from "./About.module.css";
import profile_pic from "../../assets/profile_pic.jpg";

const About = () => {
  return (
    <div className={Styles.about}>
      <h2>Meet Me</h2>
      <div className={Styles.imgContainer}>
        <img src={profile_pic} alt="carlos gomez" />
      </div>
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
                <i className="fab fa-html5 fa-2x"></i>
              </li>
              <li>
                <i className="fab fa-css3-alt fa-2x"></i>
              </li>
              <li>
                <i className="fab fa-js fa-2x"></i>
              </li>
              <li>
                <i className="fab fa-react fa-2x"></i>
              </li>
            </ul>
          </li>
          <li>
            <h3>backend web technologies</h3>
            <ul className={Styles.techList}>
              <li>
                <i className="fab fa-python fa-2x"></i>
              </li>
              <li>
                <i className="fas fa-flask fa-2x"></i>
              </li>
              <li>
                <i className="fas fa-database fa-2x"></i>
              </li>
            </ul>
          </li>
          <li>
            <h3>other technologies</h3>
            <ul className={Styles.techList}>
              <li>
                <i className="fab fa-git fa-2x"></i>
              </li>
              <li>
                <i className="fab fa-aws fa-2x"></i>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
