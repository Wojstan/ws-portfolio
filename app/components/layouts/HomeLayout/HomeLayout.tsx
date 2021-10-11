import Footer from "@module/Footer/Footer";
import styles from "./HomeLayout.module.css";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => (
  <div className={styles.layout}>
    {children}
    <Footer />
  </div>
);

export default HomeLayout;
