import H4 from "@components/H4/H4";
import Hexagon from "@components/Hexagon/Hexagon";
import StatBlock from "@components/StatBlock/StatBlock";
import useAnimatedAbout from "@hooks/useAnimatedAbout";
import { FC, useRef } from "react";

const AboutSection: FC = () => {
  const { stat1Ref, stat2Ref, stat3Ref, hex1Ref, hex2Ref } = useAnimatedAbout();

  return (
    <section id="about">
      <div className="bg-light mb-1">
        <article>
          <h1>About me</h1>
          <H4>How I work?</H4>
          <p>
            I work well in groups and keep my code clean and simple. Always
            looking to improve my skills and learn new things. I have more than
            one-year professional experience working with JavaScript, React,
            TypeScript, Git. I am also familiar with the concept of the REST
            API.
          </p>
        </article>

        <div className="flex-center pb-final">
          <StatBlock
            ref={stat1Ref}
            value={2}
            prefix="+"
            postfix="Y"
            title="PROFESSIONAL EXP"
            describe="About my lorem ipsumers!"
          />
          <StatBlock
            ref={stat2Ref}
            value={24}
            title="YEARS OLD"
            describe="Still young curious and waiting for challenges!"
          />
          <StatBlock
            ref={stat3Ref}
            value={1.5}
            prefix="+"
            postfix="Y"
            title="EXP WITH REACT"
            describe="Essa perke to be sentar ses es!"
          />
        </div>
      </div>

      <div className="bg-light">
        <article>
          <H4>Privately?</H4>

          <p>
            Mainly, I love British football, exploring marvelous UX, Tarantino
            movies, Breaking Bad and Dire Straits! Absolutely passionate about
            frontend, creating beautiful layouts, and modern software.
          </p>
        </article>

        <div ref={hex1Ref} className="flex-center mt-4">
          <Hexagon width="305px" height="360px" bgClass="bgAbout1" />
          <Hexagon width="305px" height="360px" bgClass="bgAbout2" />
          <Hexagon width="305px" height="360px" bgClass="bgAbout3" />
        </div>

        <div
          ref={hex2Ref}
          className="flex-center pb-final"
          style={{ marginTop: "-8rem" }}
        >
          <Hexagon width="305px" height="360px" bgClass="bgAbout4" />
          <Hexagon width="305px" height="360px" bgClass="bgAbout5" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
