"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react'

const page = ({text="root"}) => {

   

  return (
    <div className="bg-zinc-50 w-full h-[200vh] flex items-center justify-center flex-col">
      <div className="w-full flex items-center pb-[5vh]">
         <h1>Service Section</h1>
      </div>
        {
  [1, 2, 3, 4, 5, 6].map((_, i) => {
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
            backgroundColor: "#FF4E27",
            translateY: staggerOffset,
            zIndex: 100 - i,
          }}
        >
          <div className="relative flex md:flex-row flex-col justify-between w-full h-full md:p-[1vw] p-[5vw] text-black">
            <h2 className="md:w-[33%] lowercase">project Name</h2>
            <p className="md:w-[33%] text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere
              doloremque esse suscipit eveniet exercitationem iusto atque nisi?
              Id, corrupti voluptatum minus quidem aut perferendis, aliquid sit
              quos officiis ut perspiciatis.
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
  })
}


       
    </div>
  )
}

export default page
