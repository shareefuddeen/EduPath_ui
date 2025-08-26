import React from 'react'
import {Link} from "react-router-dom"
import {motion} from "framer-motion"

export const Life = () => {

    const isAuthenticated = !!localStorage.getItem("access")

  const path = isAuthenticated? "/quiz" : "/login"
  return (
    <section className="min-h-screen relative pt-24 z-20 flex justify-center items-center relative">
    	 <div className="flex gap-[16em] absolute h-full w-full top-0 -z-20 justify-center items-center">
          <div className="h-full w-[1px] bg-gray-300 "></div>
          <div className="h-full w-[1px] bg-gray-300"></div>
          <div className="h-full w-[1px] bg-gray-300"></div>
        </div>
        <div className="flex flex-col gap-[10em] absolute h-full w-2/3 top-0 -z-10 justify-center items-center">
          <div className="w-full h-[1px] bg-gray-300 "></div>
          <div className="w-full h-[1px] bg-gray-300"></div>
          <div className="w-full h-[1px] bg-gray-300"></div>
        </div>
      <motion.h1
    		initial={{y:12,scale:.1,opacity:0}}
    		whileInView={{y:0,scale:1,opacity:1}}
    		transition={{duration:.8, ease:"easeInOut"}}
        viewport={{once:true}}
    	 className="text-[4em] lg:text-[5em] max-w-[15ch] text-center text-purple-900 leading-tight tracking-[1.5px]">Ready for your life changing career guidance?</motion.h1>
    	<div className="absolute bottom-4 flex flex-col gap-6">
    		<motion.p
    			initial={{y:12,scale:.1,opacity:0}}
    		whileInView={{y:0,scale:1,opacity:1}}
    		transition={{duration:.8, ease:"easeInOut",delay:.1}}
        viewport={{once:true}}
    		 className="max-w-[78ch] text-center text-lg text-purple-900">Discover your strengths, explore tailored paths, and take the first step toward a future you’ll love.</motion.p>
    		<Link to={path} className="inline mx-auto px-4 py-2 bg-black text-white hover:text-black rounded-full text-center text-sm shadow-md hover:bg-gray-50 transition">Get Started Now &rarr;</Link>
    	</div>
    	
    </section>
  )
}
export default Life;