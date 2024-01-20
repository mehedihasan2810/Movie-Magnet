import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LoadTGScriptProvider from "@/contexts/LoadTGScriptProvider";
import { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReactQueryClientProvider from "@/contexts/ReactQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Magnet",
  description: "Movie Magnet - A movie streaming platform",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-tg-bg-color p-2 text-tg-text-color`}
      >
        <ReactQueryClientProvider>
          <LoadTGScriptProvider>
            <Header />
            {children}
            <Footer />
          </LoadTGScriptProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
