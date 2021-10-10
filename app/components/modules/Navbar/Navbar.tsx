import styles from "./Navbar.module.css";

const Navbar = () => (
  <nav>
    <ul className={styles.list}>
      <li>
        <a href="">ABOUT</a>{" "}
      </li>
      <li>
        <a href="">PROJECTS</a>
      </li>
      <li>
        <a href="">EXPERIENCE & EDUCATION</a>
      </li>
      <li>
        <a href="">TECHSTACK</a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
