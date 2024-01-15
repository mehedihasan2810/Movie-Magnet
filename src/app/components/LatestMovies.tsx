"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PosterCardWrapper from "./PosterCardWrapper";

const LatestMovies = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  return (
    <section aria-labelledby="lm-title">
      <div className="mb-1 flex items-center justify-between">
        <h2
          id="lm-title"
          className="border-l-4 border-l-tg-btn-color pl-1 text-xl font-semibold"
        >
          Latest Movies
        </h2>
        <button
          onClick={() => {
            if (params.get("isMoviesAll") === "true") {
              params.delete("isMoviesAll");
            } else {
              params.set("isMoviesAll", "true");
            }

            replace(`${pathname}?${params.toString()}`, { scroll: false });
          }}
          className="text-tg-btn-color"
        >
          {params.get("isMoviesAll") ? "See less" : "See all"}
        </button>
      </div>

      <PosterCardWrapper />
    </section>
  );
};

export default LatestMovies;
