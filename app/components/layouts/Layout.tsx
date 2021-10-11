import Footer from "@module/Footer/Footer";
import styles from "./Layout.module.css";

type Props = {
  children: React.ReactNode;
};

const HomeLayout = ({ children }: Props) => (
  <div style={{ padding: "1.5rem" }}>
    {children}
    <Footer />
  </div>
);

export default HomeLayout;
