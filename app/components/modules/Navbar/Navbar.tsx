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
  homeRef?: { current: HTMLDivElement | null };
};

type MouseEvent = {
  target: { style: { color: string } };
};

const Navbar = ({ expand, color, homeRef }: Props) => {
  const onHover = (e: MouseEvent) => {
    color && (e.target.style.color = color);
  };

  const offHover = (e: MouseEvent) => {
    color && (e.target.style.color = "");
  };

  const scrollTo = (selector: string) => {
    const homeElement = homeRef?.current;

    const scrollElement = homeElement?.querySelector(selector);

    scrollElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      {expand ? (
        <>
          <ul className={`${styles.list} ${styles.home}`}>
            <li>
              <a className="li-animation" onClick={() => scrollTo("#about")}>
                about
              </a>
            </li>
            <li>
              <a className="li-animation" onClick={() => scrollTo("#projects")}>
                projects
              </a>
            </li>
            <li>
              <a
                className="li-animation"
                onClick={() => scrollTo("#experience")}
              >
                experience & education
              </a>
            </li>
            <li>
              <a
                className="li-animation"
                onClick={() => scrollTo("#techstack")}
              >
                techstack
              </a>
            </li>
          </ul>
        </>
      ) : (
        <>
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
