import { useEffect, useRef } from "react";
import gsap from "gsap";

const useAnimatedWork = () => {
  const tech1Ref = useRef<HTMLDivElement>(null);
  const tech2Ref = useRef<HTMLDivElement>(null);
  const tech3Ref = useRef<HTMLDivElement>(null);
  const tech4Ref = useRef<HTMLDivElement>(null);

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
  }, [tech1Ref]);

  return {
    tech1Ref,
    tech2Ref,
    tech3Ref,
    tech4Ref,
  };
};

export default useAnimatedWork;
