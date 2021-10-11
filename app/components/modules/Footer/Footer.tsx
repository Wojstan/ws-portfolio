import styles from "./Footer.module.css";

import { PhoneFilled, MailFilled, RocketFilled } from "@ant-design/icons";
import FooterItem from "./FooterItem/FooterItem";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.contact}>
      <FooterItem
        icon={<PhoneFilled />}
        title="Phone"
        value="+48 723 643 871"
      />
      <FooterItem
        icon={<MailFilled />}
        title="Email"
        value="wpstaniszewski@gmail.com"
      />
      <FooterItem
        icon={<RocketFilled />}
        title="Location"
        value="Warsaw, Poland"
      />
    </div>

    <p>
      <small>
        Copyright © 2021 Wojciech Staniszewski. All rights reserved.
      </small>
    </p>
  </footer>
);

export default Footer;
