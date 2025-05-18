"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import {services} from "@/data/cardsData";
const page = ({ text = "root" }) => {
  return (
    <div className=" w-full h-[380vh] flex flex-col items-start  px-[2vw]">
      <div className="w-full h-[20vh]  flex items-center ">
        <h1>Service Section</h1>
      </div>
      <div className="w-full h-full relative">
        {
      services.map((item, i) => {
        const staggerOffset = i * 90;

        return (
          <div
            key={i}
            // md:h-[14.5vw] h-[50vh]
            className="w-full md:h-[14.5vw] h-[50vh]  sticky top-[5vw]"
            style={{ color: "#fff" }}
          >
            <motion.div
              className="flex flex-col relative md:h-[45vh] h-[550px] w-[100%]  md:px-[2vw] border-black/30 border-2 "
              style={{
                backgroundColor: "#E6E6E6",
                translateY: staggerOffset,
                zIndex: 100 - i,
              }}
            >
              <div className="relative flex md:flex-row flex-col justify-between w-full h-full md:p-[1vw] p-[5vw] text-black">
                <h1 style={{fontSize: "5vw", lineHeight:"5vw"}} className="md:w-[33%] lowercase">{item.Name}</h1>
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
      <div className="w-full h-[90vh] ">gfsd</div>
    </div>
  );
}; 

export default page;
