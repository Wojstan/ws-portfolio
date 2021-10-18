import TechBlock from "@element/TechBlock/TechBlock";
import Navbar from "@module/Navbar/Navbar";
import { ProjectData } from "./project";

import styles from "./ProjectPage.module.css";

const ProjectPage = ({ data }: ProjectData) => {
  const filledBtnStyle = {
    backgroundColor: data.theme,
    border: `2px solid ${data.theme}`,
  };

  const outlinedBtnStyle = {
    color: data.theme,
    border: `2px solid ${data.theme}`,
  };

  return (
    <div>
      <header className={styles.header}>
        <Navbar color={data.theme} expand={false} />
        <article>
          <h1>{data.title}</h1>
          <p>{data.about}</p>
          <a href={data.ghLink} target="_blank">
            <button style={filledBtnStyle} className={styles.filled}>
              SEE ON GITHUB
            </button>
          </a>
          <a href="">
            <button style={outlinedBtnStyle} className={styles.outlined}>
              LIVE DEMO
            </button>
          </a>
        </article>
      </header>

      <section className={styles.video}>
        <video loop muted autoPlay playsInline src={data.video}></video>
      </section>

      <section className={styles.techstack}>
        {data.techstack.map((tech, i) => (
          <TechBlock
            key={i}
            color={data.theme}
            tech={tech.position}
            value={tech.name}
            icon={tech.img}
          />
        ))}
      </section>
    </div>
  );
};

export default ProjectPage;
