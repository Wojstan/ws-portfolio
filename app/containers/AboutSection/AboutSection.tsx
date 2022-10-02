import BlockSection from "@components/BlockSection/BlockSection";
import Hexagon from "@components/Hexagon/Hexagon";
import StatBlock from "@components/StatBlock/StatBlock";
import useAnimatedAbout from "@hooks/useAnimatedAbout";
import { AboutType } from "@interfaces/HomeInterface";
import { FC } from "react";

type AboutProps = {
  data: AboutType;
};

const AboutSection: FC<AboutProps> = ({ data }) => {
  const { statRefs, hexRef } = useAnimatedAbout();

  const { privately, work } = data;

  return (
    <section id="about">
      <BlockSection title={work.title} text={work.text} mb header="About me">
        <div className="flex-center pb-final">
          {work.data.map((item, i) => (
            <StatBlock
              key={i}
              ref={statRefs[i]}
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
        <div ref={hexRef} className="hex-images pb-final">
          {privately.data.map((hex, i) => (
            <Hexagon
              key={i}
              width="305px"
              height="360px"
              bgHex={hex.bgHex}
              bgSquare={hex.bgSquare}
              mt={i > 2}
            />
          ))}
        </div>
      </BlockSection>
    </section>
  );
};

export default AboutSection;
