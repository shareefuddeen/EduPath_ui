import React from "react";
import heroImage from "../Images/study-group-learning-library.webp";
import {motion} from "framer-motion"
import { Link } from "react-router-dom";
const Hero2 = () => {

    const isAuthenticated = !!localStorage.getItem("access")

  const path = isAuthenticated? "/quiz" : "/login"
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="h-full w-full absolute bg-black/30 z-20"></div>
      <img
        src={heroImage}
        alt="hero image"
        className="object-fit w-full h-full relative"
      />
      <div className="absolute flex z-40 flex-col gap-6 justify-center items-center">
        <motion.h1
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.6, delay: 0.2 }}
         viewport={{once:true}}
         className="font-serif text-white text-center text-6xl ">
          Discover the Right Path for Your Future
        </motion.h1>
        <div className="flex gap-4">
          <Link className="font-serif rounded bg-black shadow-lg hover:shadow-2xl hover:bg-black/60 transition duration-300 text-white px-2 py-1 text-xl font-serif"
            to={path}
          >
            Get Started
          </Link>
          <Link className="font-serif rounded shadow-lg hover:shadow-2xl transition duration-300 pointer transition duration-300 text-black ring-1 ring-black px-6 py-1 text-xl font-serif"
            to=""
          >
            Watch How It Works
          </Link>
        </div>
      </div>
      <div className="absolute text-white font-serif bottom-0 gap-2 z-40 flex justify-center items-center">
        <motion.h1
        initial={{ opacity: 0 ,y:6}}
        whileInView={{ opacity: 1,y:0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{once:true}}
        className=" p-12 text-2xl">User-Friendly Decision Support</motion.h1>
        <div className="mx-auto w-[2px] h-16 bg-white"></div>
        <motion.h1 
        initial={{ opacity: 0 ,y:6}}
        whileInView={{ opacity: 1,y:0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{once:true}}
        className=" p-12 text-2xl">Smart Course Matching</motion.h1>
        <div className="mx-auto w-[2px] h-16 bg-white"></div>
        <motion.h1
        initial={{ opacity: 0 ,y:6}}
        whileInView={{ opacity: 1,y:0 }}
        transition={{ duration: 0.6, delay: 1 }}
        viewport={{once:true}}
         className=" p-12 text-2xl">Personalized Career Guidance</motion.h1>
      </div>
    </section>
  );
};

export default Hero2;
