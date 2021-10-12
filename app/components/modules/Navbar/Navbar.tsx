import styles from "./Navbar.module.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  BookOutlined,
  HomeOutlined,
} from "@ant-design/icons";

import Link from "next/link";

type Props = {
  expand: boolean;
};

const globalMenu = (
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
);

const Navbar = ({ expand }: Props) => (
  <nav>
    {expand ? (
      <>
        {globalMenu}
        <ul className={`${styles.list} ${styles.home}`}>
          <li>
            <Link href="/#about">ABOUT</Link>
          </li>
          <li>
            <Link href="/#projects">PROJECTS</Link>
          </li>
          <li>
            <Link href="/#experience">EXPERIENCE & EDUCATION</Link>
          </li>
          <li>
            <Link href="/#techstack">TECHSTACK</Link>
          </li>
        </ul>
      </>
    ) : (
      <>
        {globalMenu}
        <ul className={styles.list}>
          <li>
            <Link href="/">
              <a title="RETURN TO HOME">RETURN TO HOME</a>
            </Link>
          </li>
        </ul>
      </>
    )}
  </nav>
);

export default Navbar;
