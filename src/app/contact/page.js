import Copy from '@/commonComponent/textEffect/Copy';
import React  from 'react';



const Contact = () => {
 
  // const ParallaxImage = dynamic(() => import("../parallaxImage/ParallaxImage"), {
  //   ssr: false,
  //   loading: () => <div className="h-[300px] bg-gray-900 animate-pulse" />,
  // });
  return (
    <>
    


    <div className=" h-screen px-6 py-12 flex items-center">
      <div className="  w-full grid grid-cols-12 gap-y-8 gap-x-6">
        {/* Heading */}
        <Copy><h1 className="col-start-1 col-end-13 text-7xl md:text-8xl font-bold text-black">
          Get in touch
        </h1></Copy>

        {/* Name input */}
        <div className="col-start-1 col-end-13 md:col-end-7">
          <Copy><input
            type="text"
            placeholder="Enter your name"
            className="w-full bg-transparent border-b border-black text-black placeholder-black text-xl focus:outline-none py-2"
          /></Copy>
        </div>

        {/* Email input */}
        <div className="col-start-1 col-end-13 md:col-start-7 md:col-end-13">
          <Copy><input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent border-b border-black text-black placeholder-black text-xl focus:outline-none py-2"
          /></Copy>
        </div>

        {/* Message input */}
        <div className="col-start-1 col-end-13">
            <Copy><textarea
            placeholder="How can we help?"
            rows={4}
            className="w-full bg-transparent border-b border-black text-black placeholder-black text-xl focus:outline-none py-2"
          /></Copy>
        </div>

        {/* Submit button */}
        <div className="col-start-1 col-end-13">
          <Copy><button className="w-full bg-zinc-200 text-black text-xl font-medium py-4 cursor-pointer">
            Get in touch
          </button></Copy>
        </div>
      </div>
    </div>
     

  
    </>
    
  );
};

export default Contact; 