import TechBlock from "@element/TechBlock/TechBlock";
import Navbar from "@module/Navbar/Navbar";
import { ProjectData } from "./project";

import Link from "next/link";

import styles from "./ProjectPage.module.css";
import Separator from "@element/Separator/Separator";
import ProjectTech from "@element/ProjectTech/ProjectTech";

const ProjectPage = ({ data }: ProjectData) => {
  const { title, about, ghLink, techstack } = data;
  return (
    <div
      className={`flex-between filled ${styles.project}`}
      style={{ alignItems: "start" }}
    >
      <main className={styles.main}>
        <header className={styles.header}>
          <Link href="/">
            <a className={styles.return}>return to home</a>
          </Link>
        </header>

        <article>
          <h2>{title}</h2>
          <Separator />
          <h4>QUICK DESCRIBE</h4>
          <p>{about}</p>

          <h4>TECHSTACK</h4>
          <ul>
            {techstack.map((tech, i) => (
              <ProjectTech key={i} name={tech.name} img={tech.img} />
            ))}
          </ul>

          <ul className={styles.links}>
            <li>
              <a className={styles.seelinks} href={ghLink} target="_blank">
                See on Github
              </a>
            </li>
            <li>
              <a className={styles.seelinks} href="">
                See live demo
              </a>
            </li>
          </ul>
        </article>
      </main>

      <div className={styles.video}>
        <img height={860} src="/img/projects/imac.png" alt="" />
        <video
          height={513}
          loop
          muted
          autoPlay
          playsInline
          src={data.video}
        ></video>
      </div>
    </div>
  );
};

export default ProjectPage;
