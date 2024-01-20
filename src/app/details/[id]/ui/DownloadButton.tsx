"use client";

import Button from "@/app/components/Button";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { FC, useState } from "react";

const DownloadButton: FC<{ className: string }> = ({ className }) => {
  const [error, setError] = useState<string>("");

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      return axios.post("/api/tl-webapp", data);
    },
  });

  return (
    <>
      <Button
        onClick={() => {
          const webApp = window.Telegram.WebApp;

          if (webApp.initData !== "") {
            mutation.mutate(
              {
                message:
                  "Hi there! Thank you for being with MovieMagnex. \n\nThe download feature is under development right now. \n\nSorry for the inconvenience.",
                initDataHash: webApp.initData,
              },
              {
                onSuccess: (newData) => {
                  if (newData.data.error) {
                    webApp.showAlert(newData.data.error);
                  } else {
                    webApp.close();
                  }
                },
              },
            );
            // webApp.sendData("test sendData webApp method");
          } else {
            setError(
              "This feature is under development right now. Sorry for the inconvenience.",
            );
          }
        }}
        className={cn(
          "w-full border border-tg-btn-color text-sm shadow-none hover:bg-transparent hover:text-tg-btn-color",
          className,
        )}
      >
        Download
      </Button>
      {error !== "" && <div className={cn("text-sm", className)}>{error}</div>}
    </>
  );
};

export default DownloadButton;
