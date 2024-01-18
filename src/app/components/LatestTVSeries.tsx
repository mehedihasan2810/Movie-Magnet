import { fetchLatestMovieSeries } from "@/lib/data";
import PosterCardWrapper from "./PosterCardWrapper";
import Link from "next/link";
import { FC } from "react";

interface Props {
  searchParams: string;
}

const LatestTVSeries: FC<Props> = async ({ searchParams }) => {
  const { data, error } = await fetchLatestMovieSeries("series");
  return (
    <section className="mt-8 max-w-5xl mx-auto" aria-labelledby="tvs-title">
      <div className="mb-2 flex items-center justify-between">
        <h2
          id="tvs-title"
          className="border-l-4 border-l-tg-btn-color pl-1 text-xl font-semibold"
        >
          Latest TV & Web Series
        </h2>

        <Link className="text-tg-btn-color" href="/query?q=series&page=1">
          See all
        </Link>
      </div>

      {error ? (
        <div className="mt-2">Something went wrong! Try again.</div>
      ) : (
        <PosterCardWrapper movies={data} searchParams={searchParams} />
      )}
    </section>
  );
};

export default LatestTVSeries;
