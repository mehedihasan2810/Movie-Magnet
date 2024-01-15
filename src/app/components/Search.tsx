import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

const Search: FC<{ placeholder: string }> = ({ placeholder }) => {
  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-tg-hint-color py-[8px] pl-10 text-xs outline-2 placeholder:text-tg-hint-color bg-tg-secondary-bg-color"
        placeholder={placeholder}
        // onChange={(e) => {
        //   handleSearch(e.target.value);
        // }}
        // defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-tg-hint-color" />
    </div>
  );
};

export default Search;
