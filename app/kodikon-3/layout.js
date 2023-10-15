"use client";
import { useEffect } from "react";
import '../globals.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";



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
      <body>
        {children} 
        <Analytics />
      </body>
    </html>
  );
}
