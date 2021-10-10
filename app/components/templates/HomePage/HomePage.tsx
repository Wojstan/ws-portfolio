import ProjectLink from "@element/ProjectLink/ProjectLink";
import Separator from "@element/Separator/Separator";
import Timeline from "@element/Timeline/Timeline";
import TimelineItem from "@element/Timeline/TimelineItem/TimelineItem";
import Navbar from "@module/Navbar/Navbar";
import { useState } from "react";
import styles from "./HomePage.module.css";
import { about } from "./text";

import { BookOutlined, BankOutlined } from "@ant-design/icons";

const HomePage = () => {
  const [timelineTab, setTimelineTab] = useState<"exp" | "edu">("exp");

  return (
    <>
      <header className={styles.about}>
        <Navbar />
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
        <section className={styles.project}>
          <article>
            <h2>PROJECTS</h2>

            <p>{about}</p>
            <Separator width="300px" />
          </article>
          <nav className={styles.links} style={{ marginTop: "-8rem" }}>
            <ProjectLink title="I" bgClass="bgPr1" id={1} />
            <ProjectLink title="II" bgClass="bgPr2" id={2} />
            <ProjectLink title="III" bgClass="bgPr3" id={3} />
          </nav>
          <nav className={styles.links} style={{ marginTop: "-14rem" }}>
            <ProjectLink title="I" bgClass="bgPr1" id={1} />
            <ProjectLink title="II" bgClass="bgPr2" id={2} />
          </nav>
        </section>

        <section className={styles.education}>
          <article>
            <h2>EDUCATION & EXPERIENCE</h2>

            <p>{about}</p>
            <Separator width="300px" />

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
          </article>
        </section>
      </main>
    </>
  );
};

export default HomePage;
