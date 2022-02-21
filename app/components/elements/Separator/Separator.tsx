import styles from "./Separator.module.css";

type Props = {
  center?: boolean;
  id?: string;
};

const Separator = ({ center, id }: Props) => (
  <div
    id={id}
    className={styles.separator}
    style={{ margin: center ? "4rem auto" : "" }}
  />
);

export default Separator;
