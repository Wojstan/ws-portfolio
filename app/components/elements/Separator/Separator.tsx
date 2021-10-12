import styles from "./Separator.module.css";

type Props = {
  width: string;
};

const Separator = ({ width }: Props) => <hr className={styles.separator} />;

export default Separator;
