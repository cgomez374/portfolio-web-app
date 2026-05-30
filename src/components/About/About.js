import Styles from "./About.module.css";
import profile_pic from "../../assets/profile_pic.jpg";
import TechStack from "../TechStack/TechStack";

const TECH_CATEGORIES = [
  {
    category: "front-end web technologies",
    icons: [
      { className: "fab fa-html5 fa-2x", label: "HTML5" },
      { className: "fab fa-css3-alt fa-2x", label: "CSS3" },
      { className: "fab fa-js fa-2x", label: "JavaScript" },
      { className: "fab fa-react fa-2x", label: "React" },
    ],
  },
  {
    category: "backend web technologies",
    icons: [
      { className: "fab fa-python fa-2x", label: "Python" },
      { className: "fas fa-flask fa-2x", label: "Flask" },
      { className: "fas fa-database fa-2x", label: "Database" },
    ],
  },
  {
    category: "other technologies",
    icons: [
      { className: "fab fa-git fa-2x", label: "Git" },
      { className: "fab fa-aws fa-2x", label: "AWS" },
    ],
  },
];

const About = () => {
  return (
    <section className={Styles.about} id={"about"}>
      <h2>Meet Me</h2>
      <div className={Styles.imgContainer}>
        <img src={profile_pic} alt="Carlos Gomez headshot" />
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
          {TECH_CATEGORIES.map((tech) => (
            <TechStack
              key={tech.category}
              category={tech.category}
              icons={tech.icons}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
