"use client";

import Script from "next/script";
import { ReactNode } from "react";

const LoadTGScriptProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script
        src="https://telegram.org/js/telegram-web-app.js"
        strategy="beforeInteractive"
      />

      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script id="show-banner" strategy="beforeInteractive">
        {`
        function setThemeClass() {
          document.documentElement.className = Telegram.WebApp.colorScheme;
        }
  
        Telegram.WebApp.onEvent("themeChanged", setThemeClass);
        setThemeClass();
        `}
      </Script>
    </>
  );
};

export default LoadTGScriptProvider;
