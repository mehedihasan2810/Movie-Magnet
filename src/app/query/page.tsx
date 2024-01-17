import { FC } from "react";
import PosterCardWrapper from "../components/PosterCardWrapper";
import { fetchMoviesPages, fetchMoviesSeries } from "@/lib/data";
import Pagination from "../components/Pagination";

const Query: FC<{
  searchParams: { [key: string]: string | string[] | undefined };
}> = async ({ searchParams }) => {
  const sParams = typeof searchParams.q === "string" ? searchParams.q : "";

  const { data: totalPages } = await fetchMoviesPages(sParams);

  const pageCount =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;

  const { data, error } = await fetchMoviesSeries(sParams, pageCount);

  if (error || totalPages === null) {
    return <div>Something went wrong! Try again.</div>;
  }

  const sortedData = data.sort((a, b) => {
    const year1 = new Date(a.released as unknown as Date).getFullYear();
    const year2 = new Date(b.released as unknown as Date).getFullYear();
    if (year1 < year2) return 1;
    else if (year1 > year2) return -1;
    else return 0;
  });

  return (
    <div>
      <div className="mb-2">{data.length} results found</div>
      <PosterCardWrapper movies={sortedData} searchParams={sParams} />
      <Pagination totalPages={totalPages} />
    </div>
  );
};

export default Query;
