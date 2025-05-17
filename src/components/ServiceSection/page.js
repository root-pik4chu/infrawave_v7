"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {services} from "@/data/cardsData";
const page = ({ text = "root" }) => {
  return (
    <div className=" w-full h-[340vh]">
      <div className="w-full flex items-center ">
        <h1>Service Section</h1>
      </div>
      {
      services.map((item, i) => {
        const staggerOffset = i * 90;

        return (
          <div
            key={i}
            className="md:h-[14.5vw] h-[50vh] sticky top-[10vh]"
            style={{ color: "#fff" }}
          >
            <motion.div
              className="flex flex-col relative md:h-[45vh] h-[550px] w-[100%] origin-top md:px-[1vw] border-black/30 border-2"
              style={{
                backgroundColor: "#FF5151",
                translateY: staggerOffset,
                zIndex: 100 - i,
              }}
            >
              <div className="relative flex md:flex-row flex-col justify-between w-full h-full md:p-[1vw] p-[5vw] text-black">
                <h2 className="md:w-[33%] lowercase">{item.Name}</h2>
                <p className="md:w-[33%] text-justify">
                  {item.Desc}
                </p>
                <div className="md:w-[20%] w-full h-full">
                  <Image
                    width={500}
                    height={500}
                    className="w-full h-full object-cover "
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
  );
};

export default page;
