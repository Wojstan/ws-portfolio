import styles from "./HomeLayout.module.css";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => (
  <div className={styles.layout}>{children}</div>
);

export default HomeLayout;
