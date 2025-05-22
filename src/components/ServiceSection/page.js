"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import {services} from "@/data/cardsData";

const useWindowSize = () => {
  const [mounted, setMounted] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 0,
  });

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return { mounted, windowSize };
};

export default function Page() {
  const { mounted, windowSize } = useWindowSize();
  const isSmallScreen = mounted && windowSize.width < 1440;

  return (
    <div className="w-full h-[380vh] relative">
      <div className="w-full md:h-[99%] h-[80%] flex flex-col items-start px-[2vw] text-[var(--text-color)]">
      <div className="w-full md:h-[20vh] h-[50vh]  flex items-center">
        <h1>Service Section</h1>
      </div>
      <div className="w-full h-full relative">
        {services.map((item, i) => {
          const staggerOffset = i * 90;

          return (
            <div
              key={i}
              className="w-full md:h-[14.5vw] h-[50vh] sticky top-[5vw] "
              style={{ color: "#fff" }}
            >
              <motion.div
                className="flex flex-col relative md:h-[45vh] h-[550px] w-full md:px-[2vw] rounded-4xl shadow-2xl bg-white/60 backdrop-blur-lg border-4"
                style={{
                  borderColor: item.borderColor,
                  backgroundColor: "rgba(255,255,255,0.6)",
                  translateY: staggerOffset,
                  zIndex: 100 - i,
                }}
              >
                <div className="relative flex md:flex-row flex-col justify-between w-full h-full md:p-8 p-6 text-gray-800">
                  <div className="md:w-[33%] flex flex-col justify-center">
                    <h2 className="lowercase font-extrabold text-3xl md:text-5xl mb-2 relative">
                      {item.Name}
                      <span className="block w-10 h-1 bg-yellow-300 rounded-full mt-2"></span>
                    </h2>
                  </div>
                  <p className="md:w-[33%] text-justify text-base md:text-lg font-medium flex items-center">
                    {item.Desc}
                  </p>
                  <div className="md:w-[20%] w-full h-full flex items-center justify-center">
                    <Image
                      width={500}
                      height={300}
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                      src="/img.png"
                      alt=""
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
      {mounted && isSmallScreen && <div className="w-full h-[10vh] "></div>}
      <div className="w-full h-[100vh] "></div>
    </div>
    </div>
  );
};


