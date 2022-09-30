import { FC, ReactNode } from "react";
import styles from "./Timeline.module.css";

type TimelineProps = {
  children: ReactNode;
};

const Timeline: FC<TimelineProps> = ({ children }) => (
  <div className={styles.timeline}>
    {children}
    <div>
      <span className={styles.round}></span>
    </div>
  </div>
);

export default Timeline;
