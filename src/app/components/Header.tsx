import { FC } from "react";
import { Button } from "./Button";
import Search from "./Search";

const Header: FC = () => {
  return (
    <div className="my-4">
      <div className="flex gap-2 flex-wrap justify-center mb-4">
        {Array.from({ length: 10 }).map((_, i) => (
          //   <button
          //     className="border border-tg-btn-color rounded-full px-2 text-tg-btn-color text-sm"
          //     key={i}
          //   >
          //     hello
          //   </button>
          <Button key={i}>Web Series</Button>
        ))}
      </div>

      <Search placeholder="Search Movies, TV Series, Web Series..." />
    </div>
  );
};

export default Header;
