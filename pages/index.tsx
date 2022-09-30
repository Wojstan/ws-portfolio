import { getHomeData } from "services/api-services";
import { NextPage } from "next";
import { HomeInterface } from "interfaces/HomeInterface";
import TitleSection from "@containers/TitleSection/TitleSection";
import AboutSection from "@containers/AboutSection/AboutSection";
import WorkSection from "@containers/WorkSection/WorkSection";
import EducationSection from "@containers/EducationSection/EducationSection";
import ContactSection from "@containers/ContactSection/ContactSection";

export function getStaticProps() {
  const homeData = getHomeData();

  return {
    props: {
      data: homeData,
    },
  };
}

const Home: NextPage<HomeInterface> = ({ data }) => {
  return (
    <div className="main-layout">
      <TitleSection />

      <AboutSection />

      <WorkSection />

      <EducationSection />

      <ContactSection />
    </div>
  );
};

export default Home;
