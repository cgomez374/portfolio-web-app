import Styles from "./About.module.css";
import profile_pic from "../../assets/profile_pic.jpg";

const TECH_CATEGORIES = [
  {
    category: "front-end",
    icons: [
      { className: "fab fa-html5 fa-2x", label: "HTML5" },
      { className: "fab fa-css3-alt fa-2x", label: "CSS3" },
      { className: "fab fa-js fa-2x", label: "JavaScript" },
      { className: "fab fa-react fa-2x", label: "React" },
    ],
  },
  {
    category: "back-end",
    icons: [
      { className: "fab fa-python fa-2x", label: "Python" },
      { className: "fas fa-flask fa-2x", label: "Flask" },
      { className: "fas fa-database fa-2x", label: "Database" },
    ],
  },
  {
    category: "tools & cloud",
    icons: [
      { className: "fab fa-git fa-2x", label: "Git" },
      { className: "fab fa-aws fa-2x", label: "AWS" },
    ],
  },
];

const About = () => {
  return (
    <section className={Styles.about} id={"about"}>
      <h2>About</h2>
      <div className={Styles.aboutInfo}>
        <div className={Styles.profileSection}>
          <div className={Styles.imgContainer}>
            <img src={profile_pic} alt="Carlos Gomez headshot" />
          </div>
        </div>
        <div className={Styles.contentSection}>
          <p>
            I'm Carlos, a first-generation college graduate with a Master's
            degree in Computer Science and a proven passion for software
            development. With a background in customer-facing roles and
            technical expertise, I bring both communication skills and deep
            technical knowledge to every project.
          </p>
          <p style={{ marginTop: "1rem" }}>
            I'm excited to leverage my diverse experiences to create impactful
            solutions in full-stack development, combining frontend finesse with
            backend robustness.
          </p>
        </div>
      </div>
      <div className={Styles.techStackContainer}>
        {TECH_CATEGORIES.map((tech) => (
          <div key={tech.category} className={Styles.techCategory}>
            <h3>{tech.category}</h3>
            <div className={Styles.techGrid}>
              {tech.icons.map((icon) => (
                <div key={icon.label} className={Styles.techBadge}>
                  <i className={icon.className}></i>
                  <span>{icon.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
