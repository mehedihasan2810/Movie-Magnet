import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="mb-6 mt-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-semibold text-tg-btn-color">
        MovieMagnex
      </Link>

      <div className="flex gap-5 text-tg-hint-color">
        <Link href="/" className="hover:text-tg-btn-color hover:underline">
          Home
        </Link>
        <Link
          href="/query?q=all&page=1"
          className="hover:text-tg-btn-color hover:underline"
        >
          All Movies
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
