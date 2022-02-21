import { ProjectData } from "./project";

import Link from "next/link";

import styles from "./ProjectPage.module.css";
import Separator from "@element/Separator/Separator";
import ProjectTech from "@element/ProjectTech/ProjectTech";
import { useEffect, useRef } from "react";

import gsap from "gsap";

const ProjectPage = ({ data }: ProjectData) => {
  const { title, about, ghLink, techstack } = data;
  const animationWrapper = useRef(null);

  useEffect(() => {
    if (!animationWrapper.current) return;

    const wrapper: HTMLElement = animationWrapper.current;

    const title = wrapper.querySelector("h2 span");
    const subtitltes = wrapper.querySelectorAll("h4 span");
    const paragraphs = wrapper.querySelectorAll("p span");
    const line = wrapper.querySelector("#line");
    const li = wrapper.querySelectorAll("li");
    const video = wrapper.querySelector("#video");

    const tl = gsap.timeline({ delay: 0.3 });

    line &&
      tl.from(line, {
        duration: 0.7,
        scaleX: 0,
        ease: "power2.in",
        transformOrigin: "right center",
      });
    title && tl.to(title, { duration: 1, y: "0%" }, "-=0.3");
    subtitltes.length &&
      tl.to(subtitltes, { duration: 1, y: "0%", stagger: 0.2 }, "-=0.75");
    paragraphs.length &&
      tl.to(paragraphs, { duration: 1, y: "0%", stagger: 0.4 }, "-=1");
    video &&
      tl.from(
        video,
        {
          duration: 0.5,
          x: "20%",
          opacity: 0,
        },
        "-=0.6"
      );
    li &&
      tl.from(
        li,
        {
          duration: 0.5,
          x: "-20%",
          opacity: 0,
          stagger: 0.2,
        },
        "-=0.4"
      );
  }, [animationWrapper]);

  return (
    <div
      ref={animationWrapper}
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
          <h2>
            <span>{title}</span>
          </h2>
          <Separator id="line" />
          <h4>
            <span>QUICK DESCRIBE</span>
          </h4>
          <p>
            <span>{about}</span>
          </p>

          <h4>
            <span>TECHSTACK</span>
          </h4>
          <ul>
            {techstack.map((tech, i) => (
              <ProjectTech key={i} name={tech.name} img={tech.img} />
            ))}
          </ul>
        </article>

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
      </main>

      <div className={styles.video}>
        <div id="video" className={styles.monitor}>
          <img src="/img/projects/imac.png" alt=""></img>
          <video loop muted autoPlay playsInline src={data.video} />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
