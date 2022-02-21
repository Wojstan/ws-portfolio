import Separator from "@element/Separator/Separator";

import { Fragment, useEffect, useRef, useState } from "react";
import styles from "./HomeBlock.module.css";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

type Props = {
  center?: boolean;
  info: Array<{ quote: string; text: string }>;
  title?: string;
  children: React.ReactNode;
  reverse?: boolean;
  addAnimation?: any;
};

const HomeBlock = ({
  center,
  info,
  reverse,
  title,
  children,
  addAnimation,
}: Props) => {
  const animationWrapper = useRef(null);

  const classes = `container ${center ? "text-center" : "flex-between"}`;

  useEffect(() => {
    if (!animationWrapper.current) return;

    const wrapper: HTMLElement = animationWrapper.current;

    const title = wrapper.querySelector("h2 span");
    const subtitltes = wrapper.querySelectorAll("h4 span");
    const paragraphs = wrapper.querySelectorAll("p span");
    const line = wrapper.querySelector("#line");
    const addContent = wrapper.querySelectorAll(".add-content");
    const image = wrapper.querySelector(".img-holder img");
    const imageHolder = wrapper.querySelector(".img-holder");

    gsap.registerPlugin(ScrollTrigger);

    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: vw > 560 ? "center bottom" : "top bottom",
      },
    });
    imageHolder &&
      tl.fromTo(
        imageHolder,
        { yPercent: 100 },
        { duration: 1, ease: "power2.in", yPercent: 0 },
        "img"
      );
    image &&
      tl.fromTo(
        image,
        { yPercent: -100 },
        { duration: 1, ease: "power2.in", yPercent: 0 },
        "img"
      );
    line &&
      tl.from(
        line,
        {
          duration: 0.7,
          scaleX: 0,
          ease: "power2.in",
          transformOrigin: "right center",
        },
        "img"
      );
    title && tl.to(title, { duration: 1, y: "0%" }, "-=0.5");
    subtitltes.length &&
      tl.to(subtitltes, { duration: 1, y: "0%", stagger: 0.2 }, "-=0.75");
    paragraphs.length &&
      tl.to(paragraphs, { duration: 1, y: "0%", stagger: 0.4 }, "-=1");

    addContent.length && tl.from(addContent, addAnimation, "-=0.2");
  }, []);

  return (
    <div className={classes} ref={animationWrapper}>
      {reverse && children}
      <article>
        {title && (
          <>
            <h2>
              <span>{title}</span>
            </h2>
            <Separator id="line" center={center} />
          </>
        )}

        {info.map((row, i) => (
          <Fragment key={i}>
            <h4>
              <span>{row.quote}</span>
            </h4>
            <p>
              <span>{row.text}</span>
            </p>
          </Fragment>
        ))}
      </article>

      {!reverse && children}
    </div>
  );
};

export default HomeBlock;
