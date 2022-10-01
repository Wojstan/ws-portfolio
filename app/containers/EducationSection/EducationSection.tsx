import BlockSection from "@components/BlockSection/BlockSection";
import H4 from "@components/H4/H4";
import Timeline from "@components/Timeline/Timeline";
import TimelineItem from "@components/Timeline/TimelineItem/TimelineItem";
import { EducationType } from "@interfaces/HomeInterface";
import { FC } from "react";

type EducationProps = {
  data: EducationType;
};

const EducationSection: FC<EducationProps> = ({ data }) => {
  return (
    <section id="education">
      <BlockSection title={data.title} text={data.text}  header="My education">
        <div className="pb-final">
          <Timeline>
            {data.data.map((item, i) => (
              <TimelineItem
                key={i}
                even={i % 2 !== 0}
                title={item.title}
                place={item.place}
                date={item.period}
              />
            ))}
          </Timeline>
        </div>
      </BlockSection>
    </section>
  );
};

export default EducationSection;
