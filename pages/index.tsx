import Layout from "@layout/Layout";
import HomePage from "@template/HomePage/HomePage";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout padding>
      <HomePage />
    </Layout>
  );
};

export default Home;
