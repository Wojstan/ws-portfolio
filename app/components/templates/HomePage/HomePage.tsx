import ProjectLink from "@element/ProjectLink/ProjectLink";
import Separator from "@element/Separator/Separator";

import Navbar from "@module/Navbar/Navbar";

import styles from "./HomePage.module.css";
import { monthDiff } from "./dateUtils";

import HomeSection from "@module/HomeSection/HomeSection";
import TechBlock from "@element/TechBlock/TechBlock";
import HomeTabs from "@module/HomeTabs/HomeTabs";
import ScrollTop from "@element/ScrollTop/ScrollTop";
import { HomeData } from "@template/HomePage/home";
import { useRef } from "react";

const HomePage = ({ data }: HomeData) => {
  const homeRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={homeRef}>
      <header id="about" className={styles.about}>
        <Navbar homeRef={homeRef} expand />
        <img src={"/img/about/avatar.png"} className={styles.avatar} alt="" />
        <article>
          <h1>Hi, I'm Wojtek</h1>
          <h3>
            {"<"}FRONT-END DEVELOPER {"/>"}
          </h3>
          <Separator width="300px" />
          <p>{data.about.info}</p>
        </article>
      </header>
      <main>
        <HomeSection
          id="projects"
          title={"PROJECTS"}
          about={data.projects.info}
          style={styles.project}
        >
          <nav className={styles.links}>
            {data.projects.links.map((link) => (
              <ProjectLink key={link.id} bgClass={link.href} id={link.id} />
            ))}
          </nav>
          <nav className={styles.links2}></nav>
        </HomeSection>

        <HomeSection
          id="experience"
          title={"EXPERIENCE & EDUCATION"}
          about={data.qualification.info}
          style={styles.education}
        >
          <HomeTabs
            education={data.qualification.education}
            experience={data.qualification.experience}
          />
        </HomeSection>

        <HomeSection
          id="techstack"
          title={"TECHSTACK"}
          about={data.techstack.info}
          style={styles.techstack}
        >
          <div className={styles.grid}>
            {data.techstack.commercial.map((tech, i) => (
              <TechBlock
                key={i}
                tech={tech.name}
                value={monthDiff(new Date(tech.since), new Date())}
                icon={tech.img}
              />
            ))}
          </div>
          <article className={styles.moreinfo}>
            <p>{data.techstack.moreInfo}</p>
          </article>
        </HomeSection>
      </main>
      <ScrollTop />
    </div>
  );
};

export default HomePage;
