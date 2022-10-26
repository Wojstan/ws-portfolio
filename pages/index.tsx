import { getHomeData } from "services/api-services";
import { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { HomeInterface } from "interfaces/HomeInterface";
import TitleSection from "sections/TitleSection";
import AboutSection from "sections/AboutSection";
import WorkSection from "sections/WorkSection";
import EducationSection from "sections/EducationSection";
import ContactSection from "sections/ContactSection";

import { useRef } from "react";
import ScrollTop from "@components/ScrollTop/ScrollTop";

export const getStaticProps: GetStaticProps<{ data: HomeInterface }> = () => {
  const homeData = getHomeData();

  return {
    props: {
      data: homeData,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
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
