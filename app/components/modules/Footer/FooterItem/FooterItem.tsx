import styles from "./FooterItem.module.css";

type Props = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

const FooterItem = ({ icon, title, value }: Props) => (
  <div className={styles.item}>
    <div className={styles.circle}>
      <span className={styles.icon}>{icon}</span>
    </div>

    <h6 style={{ textAlign: "center" }}>{title}</h6>
    <h5>{value}</h5>
  </div>
);

export default FooterItem;
