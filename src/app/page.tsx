import { FC } from "react";
import Header from "./components/Header";
import LatestMovies from "./components/LatestMovies";
import LatestTVSeries from "./components/LatestTVSeries";

const Home: FC = () => {
  return (
    <main>
      <Header />
      <LatestMovies />
      <LatestTVSeries />
    </main>
  );
};

export default Home;
