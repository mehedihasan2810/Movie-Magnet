import React from "react";
import PosterCard from "./PosterCard";

const PosterCardWrapper = () => {
  return (
    <div className="grid grid-cols-3 gap-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <PosterCard key={i} />
      ))}
    </div>
  );
};

export default PosterCardWrapper;
