import { FC, ForwardedRef, forwardRef, ReactNode } from "react";

import styles from "./StatBlock.module.css";

type StatBlockProps = {
  value?: number;
  content?: ReactNode;
  title: string;
  describe: string;
  prefix?: ReactNode;
  postfix?: ReactNode;
  ref?: ForwardedRef<HTMLDivElement>;
  orange?: boolean;
};

const StatBlock: FC<StatBlockProps> = forwardRef<
  HTMLDivElement,
  StatBlockProps
>(({ value, title, describe, postfix, prefix, content, orange }, ref) => (
  <div ref={content ? ref : undefined} className={styles.stat}>
    <div
      className={styles.value}
      style={{ border: orange ? "2px solid #e9984f" : "none" }}
    >
      {value ? (
        <>
          {prefix}
          <span ref={ref}>{value}</span>
          {postfix}
        </>
      ) : (
        content
      )}
    </div>
    <div className={styles.title}>{title}</div>
    {orange && <div className={styles.separator} />}
    <div className={styles.describe}>
      <small>{describe}</small>
    </div>
  </div>
));

StatBlock.defaultProps = {
  orange: true,
};

export default StatBlock;
