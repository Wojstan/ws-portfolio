import Link from "next/link";
import { useEffect, useState } from "react";

import styles from "./ProjectLink.module.css";

type Props = {
  id: number;
  bgClass: string;
};

const ProjectLink = ({ id, bgClass }: Props) => {
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
      <Link href={`/project/${id}`}>
        <div className={styles.hexagon}>
          <div className={styles.in1}>
            <div className={`${styles.in2} ${bgClass}`}></div>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <Link href={`/project/${id}`}>
        <div className={`${styles.square} ${bgClass}`}></div>
      </Link>
    );
  }
};

export default ProjectLink;
