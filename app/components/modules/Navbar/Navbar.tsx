import styles from "./Navbar.module.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  BookOutlined,
} from "@ant-design/icons";

const Navbar = () => (
  <nav>
    <ul className={styles.global}>
      <li>
        <a href="" title="GITHUB">
          <GithubOutlined />
        </a>
      </li>
      <li>
        <a href="" title="LINKEDIN">
          <LinkedinOutlined />
        </a>
      </li>
      <li>
        <a href="" title="CV">
          <BookOutlined />
        </a>
      </li>
    </ul>
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
