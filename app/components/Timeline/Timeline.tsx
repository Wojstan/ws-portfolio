import { FC, ReactNode } from "react";
import styles from "./Timeline.module.css";

const Timeline: FC = ({ children }) => (
  <div className={styles.timeline}>
    {children}
    <div>
      <span className={styles.round}></span>
    </div>
  </div>
);

export default Timeline;
