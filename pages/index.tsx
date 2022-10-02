import { getHomeData } from "services/api-services";
import { NextPage } from "next";
import { HomeInterface } from "interfaces/HomeInterface";
import TitleSection from "@containers/TitleSection/TitleSection";
import AboutSection from "@containers/AboutSection/AboutSection";
import WorkSection from "@containers/WorkSection/WorkSection";
import EducationSection from "@containers/EducationSection/EducationSection";
import ContactSection from "@containers/ContactSection/ContactSection";

import { useRef } from "react";
import ScrollTop from "@components/ScrollTop/ScrollTop";

export function getStaticProps() {
  const homeData = getHomeData();

  return {
    props: {
      data: homeData,
    },
  };
}

const Home: NextPage<HomeInterface> = ({ data }) => {
  const { title, about, work, education, contact } = data;
  const indexRef = useRef(null);

  return (
    <div ref={indexRef} className="main-layout">
      <TitleSection data={title} indexRef={indexRef} />

      <AboutSection data={about} />

      <WorkSection data={work} />

      <EducationSection data={education} />

      <ContactSection data={contact} />
      
      <ScrollTop />
    </div>
  );
};

export default Home;
