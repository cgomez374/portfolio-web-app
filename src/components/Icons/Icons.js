import Styles from "./Icons.module.css";

const Icons = () => {
  const sendEmail = () => {
    document.location = "mailto:cgomez37484@gmail.com";
  };
  return (
    <section className={Styles.icons} id={"contact"}>
      <h2>let's connect</h2>
      <ul>
        <li>
          <a
            href="https://github.com/cgomez374"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </li>
        <li onClick={sendEmail}>
          <i className="fas fa-envelope fa-2x"></i>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/cgomez374/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://drive.google.com/file/d/1pIGVk8GhWEf3DJfDgIxGFekHsJ4U06T-/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-file fa-2x"></i>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Icons;
