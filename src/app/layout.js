"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/page";
import { useLenisScroll } from "@/hooks/useLenisScroll";
import Footer from "@/components/Footer/page";

export default function RootLayout({ children }) {
  useLenisScroll();

  const blurLayers = [
    {
      blur: 0.5,
      mask: "linear-gradient(rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 25%, rgba(0,0,0,0) 37.5%)",
    },
    {
      blur: 0.5625,
      mask: "linear-gradient(rgba(0,0,0,0) 12.5%, rgb(0,0,0) 25%, rgb(0,0,0) 37.5%, rgba(0,0,0,0) 50%)",
    },
    {
      blur: 1.125,
      mask: "linear-gradient(rgba(0,0,0,0) 25%, rgb(0,0,0) 37.5%, rgb(0,0,0) 50%, rgba(0,0,0,0) 62.5%)",
    },
    {
      blur: 2.25,
      mask: "linear-gradient(rgba(0,0,0,0) 37.5%, rgb(0,0,0) 50%, rgb(0,0,0) 62.5%, rgba(0,0,0,0) 75%)",
    },
    {
      blur: 4.5,
      mask: "linear-gradient(rgba(0,0,0,0) 50%, rgb(0,0,0) 62.5%, rgb(0,0,0) 75%, rgba(0,0,0,0) 87.5%)",
    },
    {
      blur: 9,
      mask: "linear-gradient(rgba(0,0,0,0) 62.5%, rgb(0,0,0) 75%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)",
    },
    {
      blur: 18,
      mask: "linear-gradient(rgba(0,0,0,0) 75%, rgb(0,0,0) 87.5%, rgb(0,0,0) 100%)",
    },
    { blur: 36, mask: "linear-gradient(rgba(0,0,0,0) 87.5%, rgb(0,0,0) 100%)" },
  ];

  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "10vw",
            borderRadius: "12px",
            bottom: 0,
            zIndex: 9999999,
          }}
        >
          {blurLayers.map((layer, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                inset: 0,
                zIndex: index + 1,
                backdropFilter: `blur(${layer.blur}px)`,
                WebkitBackdropFilter: `blur(${layer.blur}px)`,
                maskImage: layer.mask,
                WebkitMaskImage: layer.mask,
                borderRadius: "12px",
                pointerEvents: "none",
              }}
            />
          ))}
        </div>
        <Footer />
      </body>
    </html>
  );
}
