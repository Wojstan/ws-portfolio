import Link from "next/link";
import { FC, useEffect, useState } from "react";

import styles from "./Hexagon.module.css";

type HexagonProps = {
  bgClass: string;
  width: string;
  height: string;
};

const Hexagon: FC<HexagonProps> = ({ bgClass, width, height }) => {
  const [isNormalView, setNormalView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setNormalView(window.innerWidth >= 992);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isNormalView) {
    return (
      <div className={styles.hexagon} style={{ width, height }}>
        <div className={styles.in1}>
          <div className={`${styles.in2} ${bgClass}`}></div>
        </div>
      </div>
    );
  } else {
    return <div className={`${styles.square} ${bgClass}`}></div>;
  }
};

export default Hexagon;
