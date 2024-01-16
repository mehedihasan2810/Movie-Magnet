import React, { FC } from "react";
import PosterCard from "./PosterCard";

interface Props {
  movies: any[],
  searchParams: string;
}

const PosterCardWrapper: FC<Props> = ({movies, searchParams}) => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-x-2 gap-y-3">
      {movies.map((movie) => (
        <PosterCard key={movie._id} movie={movie} searchParams={searchParams} />
      ))}
    </div>
  );
};

export default PosterCardWrapper;
