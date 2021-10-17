import CountUp from "react-countup";

import styles from "./TechBlock.module.css";

type Props = {
  value: number | string;
  tech: string;
  icon: string;
};

const TechBlock = ({ value, tech, icon }: Props) => (
  <div className={styles.card}>
    <div>
      <h6>{tech}</h6>
      <h2 style={{ marginBottom: "1rem" }}>
        {typeof value === "number" ? (
          <>
            <CountUp end={value} duration={1} /> months
          </>
        ) : (
          <>{value}</>
        )}
      </h2>
      <p style={{ textAlign: "left" }}>
        <small>commercial experience</small>
      </p>
    </div>
    <img height={60} src={icon} alt="" />
  </div>
);

export default TechBlock;
