import BlockSection from "@components/BlockSection/BlockSection";
import H4 from "@components/H4/H4";
import Hexagon from "@components/Hexagon/Hexagon";
import StatBlock from "@components/StatBlock/StatBlock";
import useAnimatedAbout from "@hooks/useAnimatedAbout";
import { AboutType } from "@interfaces/HomeInterface";
import { FC } from "react";

type AboutProps = {
  data: AboutType;
};

const AboutSection: FC<AboutProps> = ({ data }) => {
  const { statRefs, hex1Ref, hex2Ref } = useAnimatedAbout();

  const { privately, work } = data;

  return (
    <section id="about">
      <BlockSection title={work.title} text={work.text} mb header="About me">
        <div className="flex-center pb-final">
          {work.data.map((item, i) => (
            <StatBlock
              key={i}
              ref={statRefs.at(i)}
              value={item.value}
              prefix={item.prefix}
              postfix={item.postfix}
              title={item.title}
              describe={item.describe}
            />
          ))}
        </div>
      </BlockSection>

      <BlockSection title={privately.title} text={privately.text}>
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
      </BlockSection>
    </section>
  );
};

export default AboutSection;
