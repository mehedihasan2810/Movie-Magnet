import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadTGScriptProvider from "@/contexts/LoadTGScriptProvider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Magnet",
  description: "Movie Magnet - A movie streaming platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "bg-tg-bg-color p-2 text-tg-text-color")}
      >
        <LoadTGScriptProvider>{children}</LoadTGScriptProvider>
      </body>
    </html>
  );
}
