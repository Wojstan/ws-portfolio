import Footer from "@module/Footer/Footer";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
  padding: boolean;
};

const Layout = ({ children, padding }: Props) => (
  <div className={padding ? styles.layout : styles.project}>
    {children}
    <Footer />
  </div>
);

export default Layout;
