import Footer from "@module/Footer/Footer";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
  footer?: boolean;
};

const Layout = ({ children, footer }: Props) => (
  <div className={styles.layout}>
    {children}
    {footer && <Footer />}
  </div>
);

export default Layout;
