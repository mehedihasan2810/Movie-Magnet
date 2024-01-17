import PosterCardWrapper from "./PosterCardWrapper";
import Link from "next/link";
import { fetchLatestMovieSeries } from "@/lib/data";
import { FC } from "react";

interface Props {
  searchParams: string;
}

const LatestMovies: FC<Props> = async ({ searchParams }) => {
  const { data, error } = await fetchLatestMovieSeries("movie");

  return (
    <section aria-labelledby="lm-title" className="max-w-5xl mx-auto">
      <div className="mb-1 flex items-center justify-between">
        <h2
          id="lm-title"
          className="border-l-4 border-l-tg-btn-color pl-1 text-xl font-semibold"
        >
          Latest Movies
        </h2>

        <Link className="text-tg-btn-color" href="/query?q=movie&page=1">
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

export default LatestMovies;
