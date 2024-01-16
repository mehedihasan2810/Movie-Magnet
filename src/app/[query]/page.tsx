"use client";

import { usePathname } from "next/navigation";
import { FC } from "react";

const Query: FC<{
  //   params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}> = ({
  //   params,
  searchParams,
}) => {
  const pathname = usePathname();

  console.log(pathname);

  return <div>Query {searchParams.q}</div>;
};

export default Query;
