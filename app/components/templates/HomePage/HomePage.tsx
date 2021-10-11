import ProjectLink from "@element/ProjectLink/ProjectLink";
import Separator from "@element/Separator/Separator";
import Timeline from "@element/Timeline/Timeline";
import TimelineItem from "@element/Timeline/TimelineItem/TimelineItem";
import Navbar from "@module/Navbar/Navbar";
import { useState } from "react";
import styles from "./HomePage.module.css";
import { about } from "./text";

import {
  BookOutlined,
  BankOutlined,
  AppleOutlined,
  TwitterOutlined,
  GitlabOutlined,
  SketchOutlined,
} from "@ant-design/icons";
import HomeSection from "@module/HomeSection/HomeSection";
import TechBlock from "@element/TechBlock/TechBlock";

const HomePage = () => {
  const [timelineTab, setTimelineTab] = useState<"exp" | "edu">("exp");

  return (
    <>
      <header className={styles.about}>
        <Navbar expand />
        <img src={"/img/about/avatar.png"} alt="" />
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
        <HomeSection title={"PROJECTS"} about={about} style={styles.project}>
          <nav className={styles.links} style={{ marginTop: "-8rem" }}>
            <ProjectLink bgClass="bgPr1" id={1} />
            <ProjectLink bgClass="bgPr2" id={2} />
            <ProjectLink bgClass="bgPr3" id={3} />
          </nav>
          <nav className={styles.links} style={{ marginTop: "-14rem" }}>
            <ProjectLink bgClass="bgPr4" id={4} />
            <ProjectLink bgClass="bgPr5" id={5} />
          </nav>
        </HomeSection>

        <HomeSection
          title={"EXPERIENCE & EDUCATION"}
          about={about}
          style={styles.education}
        >
          <a className={styles.tab} onClick={() => setTimelineTab("exp")}>
            <BankOutlined /> Experience
          </a>
          <a className={styles.tab} onClick={() => setTimelineTab("edu")}>
            <BookOutlined /> Education
          </a>

          {timelineTab === "exp" ? (
            <Timeline key={Math.random()}>
              <TimelineItem
                even={false}
                title="Web Developer"
                place="MDBootstrap"
                date="Jan 2021 - now"
              />
            </Timeline>
          ) : (
            <Timeline>
              <TimelineItem
                even={false}
                title="IT - Bachelor's degree"
                place="Military University of Technology"
                date="Sep 2017 - Feb 2021"
              />
              <TimelineItem
                even
                title="IT - Master's degree"
                place="Warsaw University of Technology"
                date="Seb 2021 - now"
              />
            </Timeline>
          )}
        </HomeSection>

        <HomeSection title={"TECHSTACK"} about={about} style={styles.techstack}>
          <div className={styles.grid}>
            <TechBlock tech="React" value={7} icon="/img/tech/react-icon.svg" />
            <TechBlock tech="Next" value={3} icon="/img/tech/next-icon.svg" />
            <TechBlock tech="Git" value={9} icon="/img/tech/git-icon.svg" />
            <TechBlock
              tech="TypeScript"
              value={7}
              icon="/img/tech/ts-icon.svg"
            />
          </div>
        </HomeSection>
      </main>
    </>
  );
};

export default HomePage;
