import { useState } from "react";
import { BookOutlined, BankOutlined } from "@ant-design/icons";
import Timeline from "@element/Timeline/Timeline";
import TimelineItem from "@element/Timeline/TimelineItem/TimelineItem";

import styles from "./HomeTabs.module.css";

type Props = {
  experience: Array<{ title: string; place: string; period: string }>;
  education: Array<{ title: string; place: string; period: string }>;
};

const HomeTabs = ({ experience, education }: Props) => {
  const [timelineTab, setTimelineTab] = useState<"exp" | "edu">("exp");

  return (
    <>
      <a className={styles.tab} onClick={() => setTimelineTab("exp")}>
        <BankOutlined /> Experience
      </a>
      <a className={styles.tab} onClick={() => setTimelineTab("edu")}>
        <BookOutlined /> Education
      </a>

      {timelineTab === "exp" ? (
        <Timeline key={Math.random()}>
          {experience.map((position, i) => (
            <TimelineItem
              key={i}
              even={i % 2 === 1}
              title={position.title}
              place={position.place}
              date={position.period}
            />
          ))}
        </Timeline>
      ) : (
        <Timeline>
          {education.map((position, i) => (
            <TimelineItem
              key={i}
              even={i % 2 === 1}
              title={position.title}
              place={position.place}
              date={position.period}
            />
          ))}
        </Timeline>
      )}
    </>
  );
};

export default HomeTabs;
