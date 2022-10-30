import type { GetStaticProps, NextPage } from "next";
import LandingPage from "../src/components/LandingPage/Index";

const Home: NextPage = () => {
  return <LandingPage />;
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      mainPage: true,
    },
  };
};

export default Home;
