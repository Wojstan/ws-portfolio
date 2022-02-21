import CountUp from "react-countup";

import styles from "./TechBlock.module.css";

type Props = {
  value: number | string;
  tech: string;
  icon: string;
  color?: string;
};

const TechBlock = ({ value, tech, icon, color }: Props) => (
  <div className={`${styles.tech} add-content`}>
    <div className={styles.card}>
      <div>
        <h6 style={color ? { color: color } : {}}>{tech}</h6>
        <h3 className={styles.time} style={{ marginBottom: "1rem" }}>
          <span className="counter">{value}</span> months
        </h3>
        <p style={{ textAlign: "left", marginBottom: 0 }}>
          <small>commercial experience</small>
        </p>
      </div>
      <img height={60} src={icon} alt="" />
    </div>
  </div>
);

export default TechBlock;
