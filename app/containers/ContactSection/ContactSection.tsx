import { MailOutlined } from "@ant-design/icons";
import BlockSection from "@components/BlockSection/BlockSection";
import useAnimatedContact from "@hooks/useAnimatedContact";
import { ContactType } from "@interfaces/HomeInterface";
import { FC } from "react";

type ContactProps = {
  data: ContactType;
};

const ContactSection: FC<ContactProps> = ({ data }) => {
  const { mailTextRef, cursorRef } = useAnimatedContact();

  return (
    <section id="contact">
      <BlockSection header="Contact me" title={data.title} text={data.text} mb>
        <div className="mail-icon">
          <MailOutlined />
        </div>
        <p>Click the link below:</p>
        <h3 style={{ paddingBottom: "10vh" }}>
          <a className="important" href="mailto: wpstaniszewski@gmail.com">
            <span ref={mailTextRef}></span>
            <span ref={cursorRef}>_</span>
          </a>
        </h3>
      </BlockSection>

      <footer className="bg-light flex-between" >
        <div>WOJCIECH STANISZEWSKI &#169;</div>
        <ul>
          <li>
            <a
              href="https://github.com/Wojstan"
              target="_blank"
              rel="noreferrer"
            >
              GITHUB
            </a>
          </li>
          <li className="dot"></li>
          <li>
            <a
              href="https://github.com/Wojstan"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>
          </li>
          <li className="dot"></li>
          <li>
            <a
              href="https://www.linkedin.com/in/wojciech-staniszewski-89ba34223"
              target="_blank"
              rel="noreferrer"
            >
              LINKEDIN
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default ContactSection;
