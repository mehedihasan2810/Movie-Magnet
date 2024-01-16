import { FC } from "react";
import Search from "./Search";
import Link from "next/link";

const category = [
  { id: 1, name: "All", query: "all" },
  { id: 2, name: "Movies", query: "movies" },
  { id: 3, name: "TV & Web Series", query: "series" },
  { id: 4, name: "Action", query: "action" },
  { id: 5, name: "Drama", query: "drama" },
];

const Header: FC = () => {
  return (
    <div className="my-4">
      <div className="mb-4 flex flex-wrap justify-center gap-2">
        {category.map((c) => (
          <Link
            href={`/query?q=${c.query}`}
            key={c.id}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md border border-tg-btn-color bg-transparent px-2 py-1 text-sm font-medium text-tg-btn-color shadow-none transition-colors hover:bg-tg-btn-color hover:text-tg-btn-text-color focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
          >
            {c.name}
          </Link>
        ))}
      </div>

      <Search placeholder="Search Movies, TV Series, Web Series..." />
    </div>
  );
};

export default Header;
