import { FC, ReactNode, useState, useEffect } from "react";
import styles from "./CarouselItem.module.css";

type CarouselItemProps = {
  isActive: boolean;
  content: ReactNode;
  author: string;
  about: string;
};

const CarouselItem: FC<CarouselItemProps> = ({
  content,
  author,
  about,
  isActive,
}) => {
  const [visible, setVisible] = useState(isActive);
  const [block, setBlock] = useState(isActive);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(isActive);
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [isActive]);

  useEffect(() => {
    // Too fast rerender breaks animation
    const timer = setTimeout(() => {
      setBlock(isActive);
    }, 5);

    return () => {
      clearInterval(timer);
    };
  }, [isActive]);

  return (
    <li
      className={styles.item}
      style={{
        display: isActive || visible ? "block" : "none",
        opacity: block ? 1 : 0,
        transition: "opacity 0.5s cubic-bezier(0.37, 0.01, 0.63, 1) 0s",
        position: "absolute",
        top: 0,
      }}
    >
      <blockquote>{content}</blockquote>
      <div className={styles.title}>{author}</div>
      <div className={styles.small}>
        <small>{about}</small>
      </div>
    </li>
  );
};

export default CarouselItem;
