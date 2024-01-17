import { FC } from "react";
import Search from "./Search";
import Link from "next/link";
import Navbar from "./Navbar";

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

const Header: FC = () => {
  return (
    <header className="mx-auto max-w-3xl">
      <Navbar />
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {category.map((c) => (
          <Link
            href={`/query?q=${c.query}&page=1`}
            key={c.id}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-tg-btn-color bg-transparent px-2 py-1 text-sm font-medium text-tg-btn-color shadow-none transition-colors hover:bg-tg-btn-color hover:text-tg-btn-text-color focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
          >
            {c.name}
          </Link>
        ))}
      </div>

      <Search placeholder="Search Movies, TV Series, Web Series..." />
    </header>
  );
};

export default Header;
