"use client"
import { motion } from 'framer-motion';
import React from 'react'

const page = ({text="root"}) => {

   

  return (
    <div className="bg-zinc-950 w-full h-[250vh] flex items-center justify-center flex-col">

        {
  [1, 2, 3, 4, 5, 6].map((_, i) => {
    const staggerOffset = i * 100;

    return (
      <div
        key={i}
        className="md:h-[14.5vw] h-[50vh] sticky top-[20vh]"
        style={{ color: "#fff" }}
      >
        <motion.div
          className="flex flex-col relative md:h-[40vh] h-[550px] w-[100%] origin-top md:px-[1vw]"
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
              <img
                className="w-full h-full object-cover rounded-[.8vw]"
                src="https://plus.unsplash.com/premium_photo-1746637466031-c74900b2ccb8?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
