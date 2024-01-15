import {
  ArrowDownTrayIcon,
  EyeIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";

const PosterCard = () => {
  return (
    <figure role="button" className="cursor-pointer">
      <Image
        src="/images/movie-poster.jpg"
        alt=""
        width={185}
        height={275}
        className="mb-1 block h-auto w-full object-cover hover:brightness-50"
        aria-labelledby="poster-caption"
      />
      <figcaption>
        <div className="truncate text-sm" id="poster-caption">
          Reacher: Season foobar foobar
        </div>
        <div className="flex justify-between text-xs text-tg-hint-color">
          <div>2023</div>{" "}
          <div className="flex items-center gap-2">
            <button className="hover:text-tg-text-color">
              <ArrowDownTrayIcon className="size-4" />
            </button>

            <button className="hover:text-tg-text-color">
              <EyeIcon className="size-4" />
            </button>

            <button className="hover:text-tg-text-color">
              <PlayIcon className="size-4" />
            </button>
          </div>
        </div>
      </figcaption>
    </figure>
  );
};

export default PosterCard;
