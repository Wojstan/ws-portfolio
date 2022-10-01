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
        <h3 className="pb-final">
          <a className="important" href="mailto: wpstaniszewski@gmail.com">
            <span ref={mailTextRef}></span>
            <span ref={cursorRef}>_</span>
          </a>
        </h3>
      </BlockSection>

      <footer className="bg-light flex-between">
        <div>WOJCIECH STANISZEWSKI &#169;</div>
        <ul>
          <li>GITHUB</li>
          <li className="dot"></li>
          <li>INSTAGRAM</li>
          <li className="dot"></li>
          <li>LINKEDIN</li>
        </ul>
      </footer>
    </section>
  );
};

export default ContactSection;
