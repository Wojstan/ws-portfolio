import useAnimatedTitle from "@hooks/useAnimatedTitle";
import { FC } from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
import styles from "./TitleSection.module.css";
import Navbar from "@components/Navbar/Navbar";
import { TitleType } from "@interfaces/HomeInterface";

type TitleProps = {
  data: TitleType;
};

const TitleSection: FC<TitleProps> = ({ data }) => {
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
          <p ref={aboutTextRef}>{data.text}</p>
        </article>

        <ArrowDownOutlined className={styles.arrow} ref={arrowRef} />
      </header>
    </section>
  );
};

export default TitleSection;
