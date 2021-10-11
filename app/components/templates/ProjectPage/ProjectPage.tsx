import TechBlock from "@element/TechBlock/TechBlock";
import Navbar from "@module/Navbar/Navbar";
import { about } from "@template/HomePage/text";

import styles from "./ProjectPage.module.css";

const ProjectPage = () => (
  <div>
    <header className={styles.header}>
      <Navbar expand={false} />
      <article>
        <h1>Application presenting recipes</h1>
        <p>{about}</p>
        <button className={styles.filled}>SEE ON GITHUB</button>
        <button className={styles.outlined}>LIVE DEMO</button>
      </article>
    </header>

    <section className={styles.video}>
      <video loop muted autoPlay playsInline src={"/video/food.mp4"}></video>
    </section>

    <section className={styles.techstack}>
      <TechBlock tech="React" value={7} icon="/img/tech/react-icon.svg" />
      <TechBlock tech="Next" value={3} icon="/img/tech/next-icon.svg" />
      <TechBlock tech="Git" value={9} icon="/img/tech/git-icon.svg" />
    </section>
  </div>
);

export default ProjectPage;
