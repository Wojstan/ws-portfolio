import { FC } from "react";
import H4 from "@components/H4/H4";
import Hexagon from "@components/Hexagon/Hexagon";
import Timeline from "@components/Timeline/Timeline";
import TimelineItem from "@components/Timeline/TimelineItem/TimelineItem";
import StatBlock from "@components/StatBlock/StatBlock";
import useAnimatedWork from "@hooks/useAnimatedWork";

const WorkSection: FC = () => {
  const { tech1Ref, tech2Ref, tech3Ref, tech4Ref } = useAnimatedWork();
  return (
    <section id="work">
      <div className="bg-light mb-1">
        <article>
          <h1>My work</h1>
          <H4>PROFESSIONAL EXPERIENCE?</H4>

          <p>
            Even before graduation, I took a full-time job at MDBootstrap. There
            I actively participate in the development of the React UI KIT, by
            creating components and unit tests, releasing the new versions, and
            respond to customer problems on the forum (similar to Stack
            Overflow). For some time I also take part in creating projects for
            clients, not connected with the UI KIT.
          </p>
        </article>

        <div className="flex-center mt-4 pb-final">
          <Hexagon width="208px" height="250px" bgClass="bgWork1" />
          <Hexagon width="208px" height="250px" bgClass="bgWork2" />
        </div>
      </div>

      <div className="bg-light mb-1">
        <article>
          <H4>About My work?</H4>
          <p>
            I use technologies such as React, TypeScript, Git, Jest, HTML &
            CSS/SCSS at work every day. I had also the opportunity to come
            across technologies like Next, Node and Wordpress.
          </p>
        </article>
      </div>

      <div className="bg-light mb-1">
        <article>
          <H4>Timeline?</H4>
          <p>
            I had also the opportunity to come across technologies like Next,
            Node and Wordpress.
          </p>
        </article>

        <div className="pb-final">
          <Timeline key={Math.random()}>
            <TimelineItem
              even={false}
              title="Web Developer"
              place="MDBootstrap"
              date="Jan 2021 - now"
            />
          </Timeline>
        </div>
      </div>

      <div className="bg-light">
        <article>
          <H4>Techstack?</H4>
          <p>
            I use technologies such as React, TypeScript, Git, Jest, HTML &
            CSS/SCSS at work every day.
          </p>
        </article>

        <div className="flex-center pb-final">
          <StatBlock
            ref={tech1Ref}
            content={<img src="/img/work/react-icon.svg" alt="" />}
            title="REACT"
            describe="About my lorem ipsumers!"
            orange={false}
          />
          <StatBlock
            ref={tech2Ref}
            content={<img src="/img/work/redux-icon.svg" alt="" />}
            title="REDUX"
            describe="Still young curious and waiting for challenges!"
            orange={false}
          />
          <StatBlock
            ref={tech3Ref}
            content={<img src="/img/work/node-icon.svg" alt="" />}
            title="NODE.JS"
            describe="Essa perke to be sentar ses es!"
            orange={false}
          />
          <StatBlock
            ref={tech4Ref}
            content={<img src="/img/work/ts-icon.svg" alt="" />}
            title="TYPESCRIPT"
            describe="Essa perke to be sentar ses es!"
            orange={false}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
