import Styles from "./TechStack.module.css";

const TechStack = ({ category, icons }) => {
  return (
    <li>
      <h3>{category}</h3>
      <ul className={Styles.techList}>
        {icons.map((icon) => (
          <li key={icon.label}>
            <i className={icon.className} aria-label={icon.label}></i>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default TechStack;
