import { useEffect, useRef } from "react";
import gsap from "gsap";

const useAnimatedWork = () => {
  const tech1Ref = useRef<HTMLDivElement>(null);
  const tech2Ref = useRef<HTMLDivElement>(null);
  const tech3Ref = useRef<HTMLDivElement>(null);
  const tech4Ref = useRef<HTMLDivElement>(null);

  const hexRef = useRef<HTMLDivElement>(null);

  const timelineRef = useRef<HTMLDivElement>(null);

  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fadeOptions = {
      duration: 0.3,
      opacity: 0,
      y: -30,
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: tech1Ref.current,
        start: "bottom bottom",
      },
    });

    tl.from(tech1Ref.current, fadeOptions);
    tl.from(tech2Ref.current, fadeOptions);
    tl.from(tech3Ref.current, fadeOptions);
    tl.from(tech4Ref.current, fadeOptions);
  }, [tech1Ref, tech2Ref, tech3Ref, tech4Ref]);

  useEffect(() => {
    const fadeOptions = {
      duration: 0.5,
      opacity: 0,
      y: -50,
      delay: 1,
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hexRef.current,
        start: "top bottom",
      },
    });

    tl.from(hexRef.current, fadeOptions);
  }, [hexRef]);

  useEffect(() => {
    const fadeOptions = {
      duration: 0.5,
      opacity: 0,
      y: -50,
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: "bottom bottom",
      },
    });

    tl.from(timelineRef.current, fadeOptions);
  }, [timelineRef]);

  useEffect(() => {
    const fadeOptions = {
      duration: 0.5,
      opacity: 0,
      y: -50,
    };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: carouselRef.current,
        start: "bottom bottom",
      },
    });

    tl.from(carouselRef.current, fadeOptions);
  }, [carouselRef]);

  return {
    techRefs: [tech1Ref, tech2Ref, tech3Ref, tech4Ref],
    hexRef,
    timelineRef,
    carouselRef,
  };
};

export default useAnimatedWork;
