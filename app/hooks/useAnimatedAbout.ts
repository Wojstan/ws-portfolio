import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const useAnimatedAbout = () => {
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const stat3Ref = useRef<HTMLDivElement>(null);

  const hex1Ref = useRef<HTMLDivElement>(null);
  const hex2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stat1Ref.current,
        start: "bottom bottom",
      },
    });

    const animationOptions = {
      textContent: 0,
      duration: 3,
      snap: { textContent: 0.1 },
    };

    tl.add("count");
    tl.from(
      stat1Ref.current,
      {
        ...animationOptions,
        snap: { textContent: 0.1 },
      },
      "count"
    );
    tl.from(
      stat2Ref.current,
      {
        ...animationOptions,
        snap: { textContent: 1 },
      },
      "count"
    );
    tl.from(
      stat3Ref.current,
      {
        ...animationOptions,
        snap: { textContent: 0.1 },
      },
      "count"
    );
  }, [stat1Ref, stat2Ref, stat3Ref]);

  useEffect(() => {
    const fadeOptions = {
      duration: 0.5,
      opacity: 0,
      y: -80,
    };

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: hex1Ref.current,
        start: "bottom bottom",
      },
    });

    tl1.from(hex1Ref.current, fadeOptions);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hex2Ref.current,
        start: "bottom bottom",
      },
    });

    tl.from(hex2Ref.current, fadeOptions);
  }, [hex1Ref]);

  return {
    statRefs: [stat1Ref, stat2Ref, stat3Ref],
    hex1Ref,
    hex2Ref,
  };
};

export default useAnimatedAbout;
