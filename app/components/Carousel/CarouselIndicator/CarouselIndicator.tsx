import { FC, useRef } from "react";
import styles from "./CarouselIndicator.module.css";

type CarouselIndicatorProps = {
  isActive: boolean;
  onClick: () => void;
};

const CarouselIndicator: FC<CarouselIndicatorProps> = ({
  isActive,
  onClick,
}) => (
  <li
    onClick={onClick}
    className={styles.indicator}
    style={{
      background: isActive ? "none" : undefined,
      border: isActive ? "2px solid #E9984F" : "none",
      transition: isActive ? "background 0.4s ease-in" : undefined,
    }}
  />
);

export default CarouselIndicator;
