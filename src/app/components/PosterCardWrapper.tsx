import React, { FC } from "react";
import PosterCard from "./PosterCard";

interface Props {
  movies: any[];
  searchParams: string;
}

const PosterCardWrapper: FC<Props> = ({ movies, searchParams }) => {
  return (
    <div className="grid grid-cols-3 gap-x-2 gap-y-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
      {movies.map((movie) => (
        <PosterCard key={movie._id} movie={movie} searchParams={searchParams} />
      ))}
    </div>
  );
};

export default PosterCardWrapper;
