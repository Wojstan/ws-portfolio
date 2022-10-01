import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

const useAnimatedContact = () => {
  const mailTextRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mailTextRef.current,
        start: "bottom bottom",
      },
    });
    tl.to(cursorRef.current, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });
    tl.to(mailTextRef.current, {
      duration: 2,
      text: "wpstaniszewski@gmail.com",
      delay: 1,
    });
  }, []);

  return {
    mailTextRef,
    cursorRef,
  };
};

export default useAnimatedContact;
