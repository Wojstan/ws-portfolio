import { useState } from "react";
import { BookOutlined, BankOutlined } from "@ant-design/icons";
import Timeline from "@element/Timeline/Timeline";
import TimelineItem from "@element/Timeline/TimelineItem/TimelineItem";

import styles from "./HomeTabs.module.css";

const HomeTabs = () => {
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
          <TimelineItem
            even={false}
            title="Web Developer"
            place="MDBootstrap"
            date="Jan 2021 - now"
          />
        </Timeline>
      ) : (
        <Timeline>
          <TimelineItem
            even={false}
            title="IT - Bachelor's degree"
            place="Military University of Technology"
            date="Sep 2017 - Feb 2021"
          />
          <TimelineItem
            even
            title="IT - Master's degree"
            place="Warsaw University of Technology"
            date="Seb 2021 - now"
          />
        </Timeline>
      )}
    </>
  );
};

export default HomeTabs;
