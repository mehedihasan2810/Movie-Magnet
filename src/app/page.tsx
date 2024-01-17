import { FC } from "react";
import LatestMovies from "./components/LatestMovies";
import LatestTVSeries from "./components/LatestTVSeries";

interface Props {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Home: FC<Props> = ({ searchParams }) => {
  const sParams = typeof searchParams.q === "string" ? searchParams.q : "";

  return (
    <main>
      <LatestMovies searchParams={sParams} />
      <LatestTVSeries searchParams={sParams} />
    </main>
  );
};

export default Home;
