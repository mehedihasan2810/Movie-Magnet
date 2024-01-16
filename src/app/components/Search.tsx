"use client";

import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";
import { useDebouncedCallback } from "use-debounce";
import Input from "./Input";

const Search: FC<{ placeholder: string }> = ({ placeholder }) => {
  const searchParams = useSearchParams();
  const { replace, push } = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);

  const handleSearch = useDebouncedCallback((term) => {
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="mx-auto flex w-full max-w-lg items-center gap-1">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <Input
        type="text"
        id="search"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            push(`/query?${params.toString()}`);
          }
        }}
        defaultValue={searchParams.get("q")?.toString()}
      />
      <Link
        href={`/query?${params.toString()}`}
        className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md bg-tg-btn-color px-3 py-2 text-sm font-medium text-tg-btn-text-color transition-colors hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
      >
        Search
      </Link>
    </div>
  );
};

export default Search;