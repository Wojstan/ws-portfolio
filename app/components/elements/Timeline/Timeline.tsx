import styles from "./Timeline.module.css";

type Props = {
  children: React.ReactNode;
};

const Timeline = ({ children }: Props) => (
  <div className={styles.timeline}>
    {children}
    <div>
      <span className={styles.round}></span>
    </div>
  </div>
);

export default Timeline;
