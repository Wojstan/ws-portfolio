import TechBlock from "@element/TechBlock/TechBlock";
import Navbar from "@module/Navbar/Navbar";
import { ProjectData } from "./project";

import styles from "./ProjectPage.module.css";

const ProjectPage = ({ data }: ProjectData) => (
  <div>
    <header className={styles.header}>
      <Navbar expand={false} />
      <article>
        <h1>{data.title}</h1>
        <p>{data.about}</p>
        <button className={styles.filled}>SEE ON GITHUB</button>
        <button className={styles.outlined}>LIVE DEMO</button>
      </article>
    </header>

    <section className={styles.video}>
      <video loop muted autoPlay playsInline src={data.video}></video>
    </section>

    <section className={styles.techstack}>
      {data.techstack.map((tech) => (
        <TechBlock tech={tech.position} value={tech.name} icon={tech.img} />
      ))}
    </section>
  </div>
);

export default ProjectPage;
