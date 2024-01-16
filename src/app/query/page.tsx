import { FC } from "react";
import PosterCardWrapper from "../components/PosterCardWrapper";
import { getMoviesSeries } from "@/lib/data";

const Query: FC<{
  searchParams: { [key: string]: string | string[] | undefined };
}> = async ({ searchParams }) => {
  const sParams = typeof searchParams.q === "string" ? searchParams.q : "";

  const { data, error } = await getMoviesSeries(sParams);

  if (error) {
    return <div>Something went wrong! Try again.</div>;
  }

  return (
    <div>
      <div className="mb-2">{data.length} results found</div>
      <PosterCardWrapper movies={data} searchParams={sParams} />
    </div>
  );
};

export default Query;
