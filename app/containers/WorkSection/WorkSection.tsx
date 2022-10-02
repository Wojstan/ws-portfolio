import { FC } from "react";
import H4 from "@components/H4/H4";
import Hexagon from "@components/Hexagon/Hexagon";
import Timeline from "@components/Timeline/Timeline";
import TimelineItem from "@components/Timeline/TimelineItem/TimelineItem";
import StatBlock from "@components/StatBlock/StatBlock";
import useAnimatedWork from "@hooks/useAnimatedWork";
import Carousel from "@components/Carousel/Carousel";
import { WorkType } from "@interfaces/HomeInterface";
import BlockSection from "@components/BlockSection/BlockSection";

type WorkProps = {
  data: WorkType;
};

const WorkSection: FC<WorkProps> = ({ data }) => {
  const { hexRef, techRefs, timelineRef, carouselRef } = useAnimatedWork();

  const { experience, quotes, techstack, timeline } = data;

  return (
    <section id="work">
      <BlockSection
        header="My work"
        title={experience.title}
        text={experience.text}
        mb
      >
        <div ref={hexRef} className="mt-4 pb-final">
          {experience.data.map((item, i) => (
            <Hexagon
              key={i}
              width="208px"
              height="250px"
              bgHex={item.bgHex}
              bgSquare={item.bgSquare}
              link={item.link}
            />
          ))}
        </div>
      </BlockSection>

      <BlockSection title={quotes.title} text={quotes.text} mb>
        <div
          ref={carouselRef}
          className="pb-final"
          style={{ maxWidth: "1050px", margin: "auto" }}
        >
          <Carousel data={quotes.data} />
        </div>
      </BlockSection>

      <BlockSection title={timeline.title} text={techstack.text} mb>
        <div ref={timelineRef} className="pb-final">
          <Timeline>
            {timeline.data.map((item, i) => (
              <TimelineItem
                key={i}
                even={false}
                title={item.title}
                place={item.place}
                date={item.period}
              />
            ))}
          </Timeline>
        </div>
      </BlockSection>

      <BlockSection title={techstack.title} text={techstack.text}>
        <div className="flex-center pb-final">
          {techstack.data.map((item, i) => (
            <StatBlock
              key={i}
              ref={techRefs[i]}
              content={<img src={item.img} alt="" />}
              title={item.title}
              describe={item.about}
              orange={false}
            />
          ))}
        </div>
      </BlockSection>
    </section>
  );
};

export default WorkSection;
