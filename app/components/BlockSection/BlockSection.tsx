import H4 from "@components/H4/H4";
import { FC, ReactNode } from "react";

type BlockSectionProps = {
  title: ReactNode;
  text: ReactNode;
  mb?: boolean;
  header?: string;
};

const BlockSection: FC<BlockSectionProps> = ({
  children,
  title,
  text,
  mb,
  header,
}) => {
  return (
    <div className={`bg-light ${mb ? "mb-1" : ""}`}>
      <article>
        <h1>{header}</h1>
        <H4>{title}</H4>

        <p>{text}</p>
      </article>

      {children}
    </div>
  );
};

export default BlockSection;
