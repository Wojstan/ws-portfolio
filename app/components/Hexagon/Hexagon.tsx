import Link from "next/link";
import { FC, useEffect, useState } from "react";

import styles from "./Hexagon.module.css";

type HexagonProps = {
  bgHex: string;
  bgSquare: string;
  width: string;
  height: string;
  link?: string;
};

const Hexagon: FC<HexagonProps> = ({
  bgHex,
  bgSquare,
  width,
  height,
  link,
}) => {
  const [isNormalView, setNormalView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setNormalView(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const background = (
    <div
      className={styles.in2}
      style={{ backgroundImage: `url(${bgHex})` }}
    ></div>
  );

  if (isNormalView) {
    return (
      <div className={styles.hexagon} style={{ width, height }}>
        <div className={styles.in1}>
          {link ? (
            <a href={link} target="_blank" rel="noreferrer">
              {background}
            </a>
          ) : (
            background
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={styles.square}
        style={{ backgroundImage: `url(${bgSquare})` }}
      ></div>
    );
  }
};

export default Hexagon;
