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
  color?: string | undefined;
};

const Navbar = ({ expand, color }: Props) => {
  const globalMenu = (
    <ul className={styles.global}>
      <li>
        <a
          href="https://github.com/Wojstan"
          target="_blank"
          title="GITHUB"
          style={color ? { color: color } : {}}
        >
          <GithubOutlined />
        </a>
      </li>
      <li>
        <a href="" title="LINKEDIN" style={color ? { color: color } : {}}>
          <LinkedinOutlined />
        </a>
      </li>
      <li>
        <a href="" title="CV" style={color ? { color: color } : {}}>
          <BookOutlined />
        </a>
      </li>
    </ul>
  );

  const onHover = (e: { target: { style: { color: string } } }) => {
    color && (e.target.style.color = color);
  };

  const offHover = (e: { target: { style: { color: string } } }) => {
    color && (e.target.style.color = "");
  };

  return (
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
                <a
                  onMouseOver={(e: any) => onHover(e)}
                  onMouseOut={(e: any) => offHover(e)}
                  title="RETURN TO HOME"
                >
                  RETURN TO HOME
                </a>
              </Link>
            </li>
          </ul>
        </>
      )}
    </nav>
  );
};

export default Navbar;
