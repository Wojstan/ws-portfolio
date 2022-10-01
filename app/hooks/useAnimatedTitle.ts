import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

const useAnimatedTitle = () => {
  const registerTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const aboutTextRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.to(cursorRef.current, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });

    const tl = gsap.timeline();
    tl.to(registerTextRef.current, {
      duration: 2,
      text: "FRONT-END DEVELOPER />",
      delay: 0.5,
    });
    tl.from(aboutTextRef.current, {
      duration: 0.5,
      opacity: 0,
      y: -30,
    });
    tl.from(arrowRef.current, {
      duration: 0.5,
      opacity: 0,
      y: -30,
    }, "-=0.3");
  }, [registerTextRef, cursorRef, aboutTextRef, arrowRef]);

  return {
    registerTextRef,
    cursorRef,
    aboutTextRef,
    arrowRef,
  };
};

export default useAnimatedTitle;
