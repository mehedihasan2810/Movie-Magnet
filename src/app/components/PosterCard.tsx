import { Movie } from "@/models/Movies";
import {
  ArrowDownTrayIcon,
  EyeIcon,
  PlayIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface Props {
  movie: Movie;
  searchParams: string;
}

const PosterCard: FC<Props> = ({ movie, searchParams }) => {
  const { _id, title, poster, released } = movie;

  const year = new Date(released as unknown as Date).getFullYear();

  return (
    <Link
      href={`/details/${_id.toString()}${searchParams && "?q=" + searchParams}`}
      className="block"
    >
      <figure>
        <Image
          src={poster}
          alt={title}
          width={185}
          height={275}
          className="mb-1 block h-auto w-full object-cover hover:brightness-75"
        />
        <figcaption>
          <div title={title} className="mb-1 truncate text-sm">
            {title}
          </div>
          <div className="flex justify-between text-xs text-tg-hint-color">
            <div>{year}</div>{" "}
            <div className="flex items-center gap-3">
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
    </Link>
  );
};

export default PosterCard;
