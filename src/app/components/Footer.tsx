import Link from "next/link";
import React from "react";

const category = [
  { id: 1, name: "All", query: "all" },
  { id: 2, name: "Movies", query: "movie" },
  { id: 3, name: "TV & Web Series", query: "series" },
  { id: 4, name: "Action", query: "action" },
  { id: 5, name: "Thriller", query: "thriller" },
  { id: 6, name: "Crime", query: "crime" },
  { id: 7, name: "Fantasy", query: "fantasy" },
  { id: 8, name: "History", query: "history" },
  { id: 9, name: "Romance", query: "romance" },
  { id: 10, name: "Comedy", query: "comedy" },
  { id: 11, name: "War", query: "war" },
  { id: 12, name: "Adventure", query: "adventure" },
  { id: 13, name: "Drama", query: "drama" },
];

const Footer = () => {
  return (
    <footer className="mx-auto mt-8 flex justify-between py-5 max-w-5xl">
      <div>
        <div className="text-lg font-semibold">Category</div>
        <div className="grid grid-cols-2 gap-x-4 text-sm text-tg-hint-color">
          {category.map((c) => (
            <Link
              className="hover:text-tg-btn-color hover:underline"
              key={c.id}
              href={`/query?q=${c.query}&page=1`}
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="self-end">
        <Link href="/" className="text-xl font-semibold text-tg-btn-color">
          MovieMagnex
        </Link>
        <div className="text-tg-hint-color text-sm">Made with ❤️</div>
      </div>
    </footer>
  );
};

export default Footer;
