import Navbar from "@module/Navbar/Navbar";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { useEffect, useRef } from "react";
import styles from "./TitleBlock.module.css";

type Props = {
  homeRef?: { current: HTMLDivElement | null };
};

const TitleBlock = ({ homeRef }: Props) => {
  const animationWrapper = useRef(null);

  useEffect(() => {
    if (!animationWrapper.current) return;

    const wrapper: HTMLElement = animationWrapper.current;

    const title = wrapper.querySelector("#title");
    const text = wrapper.querySelector("#text");
    const list = wrapper.querySelectorAll("li a");

    gsap.registerPlugin(TextPlugin);
    gsap.to("#cursor", { opacity: 0, ease: "power2.inOut", repeat: -1 });

    const tl = gsap.timeline();
    tl.to(title, { duration: 0.5, y: "0%" });
    tl.to(text, { duration: 2, text: "FRONT-END DEVELOPER />", delay: 0.5 });
    tl.from(
      list,
      {
        duration: 0.5,
        ease: "power3.in",
        stagger: 0.25,
        opacity: 0,
      },
      "-=0.5"
    );
  }, []);

  return (
    <div className="container" ref={animationWrapper}>
      <Navbar homeRef={homeRef} expand />

      <h1 className={styles.title}>
        <span id="title">Hi, I'm Wojtek</span>
      </h1>

      <h3>
        {"<"}
        <span id="text"></span>
        <span id="cursor">_</span>
      </h3>
    </div>
  );
};

export default TitleBlock;
