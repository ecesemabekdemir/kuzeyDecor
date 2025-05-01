"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer/footer";
import { incrementNumberAction } from "@/server/test";
import { useState } from "react";
import { useServerAction } from "zsa-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [counter, setCounter] = useState(0);
  const { data, isPending, error, execute } = useServerAction(
    incrementNumberAction
  );
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <button
          onClick={async () => {
            const [data, err] = await execute({
              number: counter,
            });

            if (err) {
              throw err;
              return;
            }
            // handle success
            setCounter(data);
          }}
        >
          {isPending ? "..." : "Increment: " + counter}
        </button>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
