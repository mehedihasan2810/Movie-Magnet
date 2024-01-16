import PosterCardWrapper from "./PosterCardWrapper";
import Link from "next/link";

const LatestTVSeries = () => {
  return (
    <section className="mt-6" aria-labelledby="tvs-title">
      <div className="mb-1 flex items-center justify-between">
        <h2
          id="tvs-title"
          className="border-l-4 border-l-tg-btn-color pl-1 text-xl font-semibold"
        >
          Latest TV & Web Series
        </h2>

        <Link className="text-tg-btn-color" href="/query?q=series">
          See all
        </Link>
      </div>

      <PosterCardWrapper />
    </section>
  );
};

export default LatestTVSeries;
