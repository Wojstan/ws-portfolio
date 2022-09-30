import useAnimatedTitle from "@hooks/useAnimatedTitle";
import { FC } from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
import styles from "./TitleSection.module.css";
import Navbar from "@components/Navbar/Navbar";

const TitleSection: FC = () => {
  const { cursorRef, registerTextRef, aboutTextRef, arrowRef } =
    useAnimatedTitle();

  return (
    <section className={styles.title} id="title">
      <header className="bg-light">
        <Navbar />

        <img src="/img/avatar.png" alt="avatar" />

        <h1>Wojciech Staniszewski</h1>

        <h3>
          {"<"}
          <span ref={registerTextRef}></span>
          <span ref={cursorRef}>_</span>
        </h3>

        <article>
          <p ref={aboutTextRef}>
            Constantly growing as a web developer. Backend or frontend?
            Preferably both! But my passion is definitely frontend. Start
            scrolling to know me better!
          </p>
        </article>

        <ArrowDownOutlined className={styles.arrow} ref={arrowRef} />
      </header>
    </section>
  );
};

export default TitleSection;
