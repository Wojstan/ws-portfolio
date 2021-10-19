import styles from "./Navbar.module.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  BookOutlined,
} from "@ant-design/icons";

import Link from "next/link";

type Props = {
  expand: boolean;
  color?: string | undefined;
  homeRef: { current: HTMLDivElement | null };
};

const Navbar = ({ expand, color, homeRef }: Props) => {
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

  const scrollTo = (selector: string) => {
    const homeElement = homeRef.current;

    const scrollElement = homeElement?.querySelector(selector);

    scrollElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      {expand ? (
        <>
          {globalMenu}
          <ul className={`${styles.list} ${styles.home}`}>
            <li>
              <a onClick={() => scrollTo("#about")}>ABOUT</a>
            </li>
            <li>
              <a onClick={() => scrollTo("#projects")}>PROJECTS</a>
            </li>
            <li>
              <a onClick={() => scrollTo("#experience")}>
                EXPERIENCE & EDUCATION
              </a>
            </li>
            <li>
              <a onClick={() => scrollTo("#techstack")}>TECHSTACK</a>
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
