import { HomeData } from "@template/HomePage/home";
import Layout from "@layout/Layout";
import HomePage from "@template/HomePage/HomePage";
import { getHomeData } from "services/api-services";

export function getStaticProps() {
  const homeData = getHomeData();

  return {
    props: {
      data: homeData,
    },
  };
}

const Home = ({ data }: HomeData) => {
  return (
    <Layout footer>
      <HomePage data={data} />
    </Layout>
  );
};

export default Home;
