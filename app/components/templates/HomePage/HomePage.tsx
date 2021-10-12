import ProjectLink from "@element/ProjectLink/ProjectLink";
import Separator from "@element/Separator/Separator";

import Navbar from "@module/Navbar/Navbar";

import styles from "./HomePage.module.css";
import { about } from "./text";

import HomeSection from "@module/HomeSection/HomeSection";
import TechBlock from "@element/TechBlock/TechBlock";
import HomeTabs from "@module/HomeTabs/HomeTabs";
import ScrollTop from "@element/ScrollTop/ScrollTop";

const HomePage = () => (
  <>
    <header id="about" className={styles.about}>
      <Navbar expand />
      <img src={"/img/about/avatar.png"} className={styles.avatar} alt="" />
      <article>
        <h1>Hi, I'm Wojtek</h1>
        <h3>
          {"<"}FRONT-END DEVELOPER {"/>"}
        </h3>
        <Separator width="300px" />
        <p>{about}</p>
      </article>
    </header>
    <main>
      <HomeSection
        id="projects"
        title={"PROJECTS"}
        about={about}
        style={styles.project}
      >
        <nav className={styles.links}>
          <ProjectLink bgClass="bgPr1" id={1} />
          <ProjectLink bgClass="bgPr2" id={2} />
          <ProjectLink bgClass="bgPr4" id={4} />
          <ProjectLink bgClass="bgPr5" id={5} />
        </nav>
        <nav className={styles.links2}></nav>
      </HomeSection>

      <HomeSection
        id="experience"
        title={"EXPERIENCE & EDUCATION"}
        about={about}
        style={styles.education}
      >
        <HomeTabs />
      </HomeSection>

      <HomeSection
        id="techstack"
        title={"TECHSTACK"}
        about={about}
        style={styles.techstack}
      >
        <div className={styles.grid}>
          <TechBlock tech="React" value={7} icon="/img/tech/react-icon.svg" />
          <TechBlock tech="Next" value={3} icon="/img/tech/next-icon.svg" />
          <TechBlock tech="Git" value={9} icon="/img/tech/git-icon.svg" />
          <TechBlock tech="TypeScript" value={7} icon="/img/tech/ts-icon.svg" />
        </div>
      </HomeSection>
    </main>
    <ScrollTop />
  </>
);

export default HomePage;
