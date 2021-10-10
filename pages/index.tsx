import HomeLayout from "@layout/HomeLayout/HomeLayout";
import HomePage from "@template/HomePage/HomePage";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <HomePage />
    </HomeLayout>
  );
};

export default Home;
