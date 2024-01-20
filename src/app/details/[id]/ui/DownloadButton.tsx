"use client";

import Button from "@/app/components/Button";
import { cn } from "@/lib/utils";
import React, { FC } from "react";

const DownloadButton: FC<{ className: string }> = ({ className }) => {
  return (
    <Button
      onClick={() => {
        window.Telegram.WebApp.sendData("foobar");
      }}
      className={cn(
        "w-full border border-tg-btn-color text-sm shadow-none hover:bg-transparent hover:text-tg-btn-color",
        className,
      )}
    >
      Download
    </Button>
  );
};

export default DownloadButton;
