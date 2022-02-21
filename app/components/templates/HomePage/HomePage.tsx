import ProjectLink from "@element/ProjectLink/ProjectLink";

import styles from "./HomePage.module.css";
import { monthDiff } from "./dateUtils";

import TechBlock from "@element/TechBlock/TechBlock";
import HomeTabs from "@module/HomeTabs/HomeTabs";
import ScrollTop from "@element/ScrollTop/ScrollTop";
import { HomeData } from "@template/HomePage/home";
import { useRef } from "react";
import TitleBlock from "@module/TitleBlock/TitleBlock";
import HomeBlock from "@module/HomeBlock/HomeBlock";

const HomePage = ({ data }: HomeData) => {
  const homeRef = useRef<HTMLDivElement | null>(null);

  const { about, qualification, projects, techstack } = data;

  return (
    <div ref={homeRef}>
      <header className={styles.title}>
        <TitleBlock homeRef={homeRef} />
      </header>
      <main>
        <section id="about">
          <HomeBlock title="ABOUT ME" info={about.info1}>
            <div className={`${styles.image} img-holder`}>
              <img src="/img/about/img1.png" alt="" />
            </div>
          </HomeBlock>
        </section>

        <section className="filled">
          <HomeBlock reverse info={about.info2}>
            <div className={`${styles.image} img-holder`}>
              <img src="/img/about/img2.png" alt="" />
            </div>
          </HomeBlock>
        </section>

        <section id="projects">
          <HomeBlock
            title="PROJECTS"
            center
            info={projects.info}
            addAnimation={{
              duration: 1,
              ease: "power.in",
              y: "-20%",
              opacity: 0,
            }}
          >
            <nav className={`${styles.links} add-content`}>
              {projects.links.map((link) => (
                <ProjectLink key={link.id} bgClass={link.href} id={link.id} />
              ))}
            </nav>
            <nav className={styles.links2}></nav>
          </HomeBlock>
        </section>

        <section id="experience" className="filled">
          <HomeBlock
            title="EXPERIENCE & EDUCATION"
            info={qualification.info}
            center
            addAnimation={{
              duration: 0.6,
              ease: "power2.in",
              y: "-20%",
              opacity: 0,
            }}
          >
            <HomeTabs
              experience={qualification.experience}
              education={qualification.education}
            />
          </HomeBlock>
        </section>

        <section id="techstack">
          <HomeBlock
            center
            title="TECHSTACK"
            info={techstack.info}
            addAnimation={{
              duration: 0.5,
              x: "-20%",
              opacity: 0,
              stagger: 0.2,
            }}
          >
            <div className={styles.tech}>
              {techstack.commercial.map((tech, i) => (
                <TechBlock
                  key={i}
                  tech={tech.name}
                  value={monthDiff(new Date(tech.since), new Date())}
                  icon={tech.img}
                />
              ))}
            </div>
          </HomeBlock>
        </section>
      </main>

      <ScrollTop />
    </div>
  );
};

export default HomePage;
