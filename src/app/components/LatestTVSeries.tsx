"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import PosterCardWrapper from "./PosterCardWrapper";

const LatestTVSeries = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  return (
    <section className="mt-6" aria-labelledby="tvs-title">
      <div className="mb-1 flex items-center justify-between">
        <h2
          id="tvs-title"
          className="border-l-4 border-l-tg-btn-color pl-1 text-xl font-semibold"
        >
          Latest TV & Web Series
        </h2>
        <button
          onClick={() => {
            if (params.get("isTVSAll") === "true") {
              params.delete("isTVSAll");
            } else {
              params.set("isTVSAll", "true");
            }

            replace(`${pathname}?${params.toString()}`, { scroll: false });
          }}
          className="text-tg-btn-color"
        >
          {params.get("isTVSAll") ? "See less" : "See all"}
        </button>
      </div>

      <PosterCardWrapper />
    </section>
  );
};

export default LatestTVSeries;
