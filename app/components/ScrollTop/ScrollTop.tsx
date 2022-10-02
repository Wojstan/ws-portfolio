import { UpOutlined } from "@ant-design/icons";

import styles from "./ScrollTop.module.css";
import { useCallback, useEffect, useState, FC } from "react";

const ScrollTop: FC = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY >= 200) {
      setVisible(true);
    } else {
      isVisible && setFadeOut(true);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!fadeOut) return;

    const timer = setTimeout(() => {
      setVisible(false);
      setFadeOut(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [fadeOut]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      {isVisible && (
        <a
          className="scroller"
          onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
        >
          <aside
            className={`${styles.button} ${fadeOut ? styles.fadeout : ""}`}
          >
            <UpOutlined style={{ color: "white" }} />
          </aside>
        </a>
      )}
    </>
  );
};

export default ScrollTop;
