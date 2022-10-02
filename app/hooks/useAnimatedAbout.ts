import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const useAnimatedAbout = () => {
  const stat1Ref = useRef<HTMLDivElement>(null);
  const stat2Ref = useRef<HTMLDivElement>(null);
  const stat3Ref = useRef<HTMLDivElement>(null);

  const hexRef = useRef<HTMLDivElement>(null);

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
      delay: 0.5,
    };

    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: hexRef.current,
        start: "top bottom",
      },
    });

    tl1.from(hexRef.current, fadeOptions);
  }, [hexRef]);

  return {
    statRefs: [stat1Ref, stat2Ref, stat3Ref],
    hexRef,
  };
};

export default useAnimatedAbout;
