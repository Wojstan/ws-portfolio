import styles from "./TimelineItem.module.css";

import { CalendarOutlined } from "@ant-design/icons";

type Props = {
  title: string;
  place: string;
  date: string;
  even: boolean;
};

const TimelineItem = ({ title, place, date, even }: Props) => {
  const mainContent = (
    <div>
      <h5 className={styles.title}>{title}</h5>
      <span className={styles.subtitle}>{place}</span>
      <div className={styles.date}>
        <CalendarOutlined /> {date}
      </div>
    </div>
  );

  const subContent = (
    <div>
      <span className={styles.round}></span>
      <span className={styles.line}></span>
    </div>
  );

  return (
    <div className={styles.item}>
      {even ? (
        <>
          <div></div>
          {subContent}
          {mainContent}
        </>
      ) : (
        <>
          {mainContent}
          {subContent}
        </>
      )}
    </div>
  );
};

export default TimelineItem;
