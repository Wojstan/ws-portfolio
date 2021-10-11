import Layout from "@layout/Layout";
import ProjectPage from "@template/ProjectPage/ProjectPage";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout>
      <ProjectPage />
    </Layout>
  );
};

export default Home;
