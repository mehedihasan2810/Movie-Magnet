"use client";

import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { TGWebApp } from "@/lib/tg-webapp";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import Script from "next/script";
import { ReactNode } from "react";

const LoadTGScriptProvider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: async (data: any) => {
      return axios.post("/api/validate-hash", data);
    },
    onSuccess: (newData) => {
      console.log(newData);
    },
  });

  useIsomorphicLayoutEffect(() => {
    const backButton = window.Telegram.WebApp.BackButton;
    if (pathname === "/") {
      backButton.hide();
    } else {
      backButton.hide();
      backButton.show();
    }

    const foo = () => {
      backButton.hide();
      backButton.show();

      router.back();
    };

    backButton.onClick(foo);

    return () => {
      backButton.offClick(foo);
    };
  }, [pathname]);

  // useIsomorphicLayoutEffect(() => {
  //   const setThemeClass = () => {
  //     document.documentElement.className = window.Telegram.WebApp.colorScheme;
  //   };

  //   window.Telegram.WebApp.onEvent("themeChanged", setThemeClass);
  //   setThemeClass();

  //   return () => {
  //     window.Telegram.WebApp.offEvent("themeChanged", setThemeClass);
  //   };
  // }, []);

  useIsomorphicLayoutEffect(() => {
    const webApp = new TGWebApp();

    if (webApp.initData !== "") {
      mutation.mutate({ initData: webApp.initData });
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    document.getElementById("init-data")!.innerHTML = mutation.data?.data
      ? JSON.stringify(mutation.data?.data, null, 2)
      : "No initData";
  }, [mutation.data]);

  return (
    <>
      {children}
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />

      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script id="tl-ready" strategy="beforeInteractive">
        {`

        window.Telegram.WebApp.ready();

        const setThemeClass = () => {
          document.documentElement.className = window.Telegram.WebApp.colorScheme;
        };
    
        window.Telegram.WebApp.onEvent("themeChanged", setThemeClass);
        setThemeClass();
        `}
      </Script>
    </>
  );
};

export default LoadTGScriptProvider;
