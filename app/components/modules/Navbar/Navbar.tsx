import styles from "./Navbar.module.css";

type Props = {
  homeRef?: { current: HTMLDivElement | null };
};

const Navbar = ({ homeRef }: Props) => {
  const scrollTo = (selector: string) => {
    const homeElement = homeRef?.current;

    const scrollElement = homeElement?.querySelector(selector);

    scrollElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
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
          <a className="li-animation" onClick={() => scrollTo("#experience")}>
            experience & education
          </a>
        </li>
        <li>
          <a className="li-animation" onClick={() => scrollTo("#techstack")}>
            techstack
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
