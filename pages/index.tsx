import { HomeData } from "@template/HomePage/home";
import Layout from "@layout/Layout";
import HomePage from "@template/HomePage/HomePage";
import { getHomeData } from "services/api-services";

export async function getStaticProps() {
  const homeData = await getHomeData();

  return {
    props: {
      data: homeData,
    },
  };
}

const Home = ({ data }: HomeData) => {
  return (
    <Layout padding>
      <HomePage data={data} />
    </Layout>
  );
};

export default Home;
