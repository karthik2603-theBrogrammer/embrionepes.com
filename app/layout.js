"use client";
import { useEffect } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        {children} 
        <Analytics />
      </body>
    </html>
  );
}
