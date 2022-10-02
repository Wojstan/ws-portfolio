import styles from "./Navbar.module.css";

type NavbarProps = {
  indexRef?: { current: HTMLDivElement | null };
};

const Navbar = ({ indexRef }: NavbarProps) => {
  const scrollTo = (selector: string) => {
    const homeElement = indexRef?.current;

    const scrollElement = homeElement?.querySelector(selector);

    scrollElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav>
      <div className={styles.mobile} style={{ border: "none" }}>
        <img src="/img/logo.svg" alt="logo" />
      </div>
      <ul className={styles.list}>
        <li style={{ textAlign: "left" }}>
          <a onClick={() => scrollTo("#about")}>about</a>
        </li>
        <li style={{ textAlign: "left" }}>
          <a onClick={() => scrollTo("#work")}>work</a>
        </li>
        <li className={styles.logo} style={{ border: "none" }}>
          <img src="/img/logo.svg" alt="logo" />
        </li>
        <li style={{ textAlign: "right" }}>
          <a onClick={() => scrollTo("#education")}>education</a>
        </li>
        <li style={{ textAlign: "right" }}>
          <a onClick={() => scrollTo("#contact")}>contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
