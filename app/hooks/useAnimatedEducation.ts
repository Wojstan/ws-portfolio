import { useEffect, useRef } from "react";
import gsap from "gsap";

const useAnimatedEducation = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

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

  return {
    timelineRef,
  };
};

export default useAnimatedEducation;
