import PosterCardWrapper from "./PosterCardWrapper";
import Link from "next/link";

const LatestMovies = () => {
  return (
    <section aria-labelledby="lm-title">
      <div className="mb-1 flex items-center justify-between">
        <h2
          id="lm-title"
          className="border-l-4 border-l-tg-btn-color pl-1 text-xl font-semibold"
        >
          Latest Movies
        </h2>

        <Link className="text-tg-btn-color" href="/query?q=movies">
          See all
        </Link>
      </div>

      <PosterCardWrapper />
    </section>
  );
};

export default LatestMovies;
