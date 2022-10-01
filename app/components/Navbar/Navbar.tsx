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
      <ul className={styles.list}>
        <li style={{textAlign: 'left'}}>
          <a onClick={() => scrollTo("#about")}>about</a>
        </li>
        <li style={{textAlign: 'left'}}>
          <a onClick={() => scrollTo("#projects")}>work</a>
        </li>
        <li style={{ border: "none" }}>
          <img src="/img/logo.svg" alt="logo" />
        </li>
        <li style={{textAlign: 'right'}}>
          <a onClick={() => scrollTo("#experience")}>education</a>
        </li>
        <li style={{textAlign: 'right'}}>
          <a onClick={() => scrollTo("#techstack")}>contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
