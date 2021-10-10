import Link from "next/link";

import styles from "./ProjectLink.module.css";

type Props = {
  id: number;
  bgClass: string;
  title: string;
};

const ProjectLink = ({ id, bgClass }: Props) => (
  <Link href={`/project?id=${id}`}>
    <div className={styles.hexagon}>
      <div className={styles.in1}>
        <div className={`${styles.in2} ${bgClass}`}></div>
      </div>
    </div>
  </Link>
);

export default ProjectLink;
