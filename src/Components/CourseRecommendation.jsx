import React from "react";
import { Link } from "react-router-dom";
import Image from "../Images/Learning-amico.svg";
import { motion } from "framer-motion";

const CourseRecommendation = () => {

  const isAuthenticated = !!localStorage.getItem("access")

  const path = isAuthenticated? "/quiz" : "/login"
  return (
    <>
      <section className="h-screen overflow-hidden z-10 relative flex flex-col justify-center font-serif items-center">
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
        <div className="my-4">
          <h1 className="bg-purple-100 text-purple-600 px-2 py-1 rounded-full">
            Your success depends on your decisions
          </h1>
        </div>
        <div>
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{once:true}}
            src={Image}
            alt="Image"
            className="w-full h-full"
          />
        </div>
        <div >
          <motion.h1
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{once:true}}
            className="text-6xl text-purple-900"
          >
            Courses Tailored to Your Career Goals
          </motion.h1>
        </div>
        <div >
          <motion.h1
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{once:true}}
            className="text-2xl text-purple-900 mt-4"
          >
           
            Browse courses from top institutions aligned with your dream career.
          </motion.h1>
          <div className="text-center mt-4">
            <Link to={path} className="inline px-4 py-2 bg-gray-100 rounded-full mx-auto text-center text-sm hover:bg-gray-50 shadow-md transition ">Get Started Now &rarr;</Link>
          </div>
          
        </div>
      </section>
    </>
  );
};

export default CourseRecommendation;
