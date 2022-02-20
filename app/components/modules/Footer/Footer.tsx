import styles from "./Footer.module.css";

import {
  GithubOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Footer = () => {
  const animationWrapper = useRef(null);

  useEffect(() => {
    if (!animationWrapper.current) return;

    const wrapper: HTMLElement = animationWrapper.current;

    gsap.registerPlugin(ScrollTrigger);

    const listElements = wrapper.querySelectorAll("li");
    const important = wrapper.querySelectorAll(".important");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "center bottom",
      },
    });

    tl.from(listElements, {
      duration: 0.5,
      x: "-60%",
      opacity: 0,
      ease: "power2.in",
      stagger: 0.3,
    }).from(important, {
      duration: 0.5,
      x: "60%",
      opacity: 0,
      ease: "power2.in",
      stagger: 0.3,
    });
  }, []);

  return (
    <footer ref={animationWrapper} className={styles.footer}>
      <div className="container flex-between">
        <ul>
          <li>
            <a target="_blank" href="https://github.com/Wojstan">
              <GithubOutlined /> github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/wojciech-staniszewski-89ba34223"
            >
              <LinkedinOutlined /> linkedin
            </a>
          </li>

          <li>
            <a href="">
              <InstagramOutlined /> instagram
            </a>
          </li>
        </ul>
        <div className={styles.important}>
          <a className="important" href="/files/" download="cv.pdf">
            CV
          </a>
          <a className="important" href="mailto: wpstaniszewski@gmail.com">
            Contact me
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

/*

<div className={styles.contact}>
      <FooterItem
        icon={<PhoneFilled />}
        title="Phone"
        value="+48 723 643 871"
      />
      <FooterItem
        icon={<MailFilled />}
        title="Email"
        value="wpstaniszewski@gmail.com"
      />
      <FooterItem
        icon={<RocketFilled />}
        title="Location"
        value="Warsaw, Poland"
      />
    </div>

    <p>
      <small>
        Copyright © 2021 Wojciech Staniszewski. All rights reserved.
      </small>
    </p>
*/
