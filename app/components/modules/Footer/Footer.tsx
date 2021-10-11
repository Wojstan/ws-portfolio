import styles from "./Footer.module.css";

import { PhoneOutlined, MailOutlined, RocketOutlined } from "@ant-design/icons";
import FooterItem from "./FooterItem/FooterItem";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.contact}>
      <FooterItem
        icon={<PhoneOutlined />}
        title="Phone"
        value="+48 723 643 871"
      />
      <FooterItem
        icon={<MailOutlined />}
        title="Email"
        value="wpstaniszewski@gmail.com"
      />
      <FooterItem
        icon={<RocketOutlined />}
        title="Location"
        value="Warsaw, Poland"
      />
    </div>

    <p>Copyright © 2021 Wojciech Staniszewski. All rights reserved.</p>
  </footer>
);

export default Footer;
