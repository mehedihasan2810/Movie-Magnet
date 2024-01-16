import { FC } from "react";
import LatestMovies from "./components/LatestMovies";
import LatestTVSeries from "./components/LatestTVSeries";

const Home: FC = () => {
  return (
    <main>
      <LatestMovies />
      <LatestTVSeries />
    </main>
  );
};

export default Home;
