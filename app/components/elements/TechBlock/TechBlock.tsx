import CountUp from "react-countup";

import styles from "./TechBlock.module.css";

type Props = {
  value: number;
  tech: string;
  icon: string;
  height?: number;
} & typeof defaultProps;

const defaultProps = {
  height: 60,
};

const TechBlock = ({ value, tech, icon, height }: Props) => (
  <div className={styles.card}>
    <div>
      <h6>{tech}</h6>
      <h2 style={{ marginBottom: "1rem" }}>
        <CountUp end={value} duration={1} /> months
      </h2>
      <p style={{ textAlign: "left" }}>
        <small>commercial experience</small>
      </p>
    </div>
    <img height={height} src={icon} alt="" />
  </div>
);

TechBlock.defaultProps = defaultProps;

export default TechBlock;
