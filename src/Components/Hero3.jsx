import React from "react";
import HeroImage from "../Images/smiling-portrait-young-afro-american-young-man-carrying-bag-shoulder-books-hand-standing-against-wall.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero3 = () => {
  const word = "Edu-Path".split("");
  return (
    <div className="h-screen bg-book relative flex flex-col justify-center items-center">
      <div className="h-full w-full absolute bg-black/30 z-20"></div>
      <img
        src={HeroImage}
        alt="hero image"
        className="object-cover w-full h-full relative"
      />
      <div className="absolute z-40 top-0 flex flex-col justify-center items-center">
        <h1 className="p-2 font-bold uppercase text-white text-[11em]">
          {word.map((letter, i) => (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeIn", delay: 0.1 * i }}
              viewport={{ once: true }}
              key={i}
            >
              {letter}
            </motion.span>
          ))}
        </h1>
      </div>
      <div className="absolute bottom-4 z-40 flex gap-[20em] justify-center items-center">
        <div className=""
        >
          <motion.h1
            initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 1, ease: "easeIn", delay: .6 }}
              viewport={{ once: true }}
           className="text-2xl text-white font-serif  font-bold">
            Courses That Actually Match Your Dream Career
          </motion.h1>
        </div>
        <motion.div
          initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 1, ease: "easeIn", delay: .8 }}
              viewport={{ once: true }}
         className="flex gap-4 z-40 "
        >
          <Link
            className="font-serif rounded bg-black hover:bg-black/60 shadow-lg hover:shadow-2xl hover:bg-black transition duration-300 text-white px-2 py-1 text-xl font-serif"
            to="/program"
          >
            View courses
          </Link>
          <Link
            className="font-serif rounded shadow-lg hover:bg-black hover:shadow-2xl transition duration-300 pointer transition duration-300 text-white ring-1 ring-black px-6 py-1 text-xl font-serif"
            to="/careers"
          >
            Career paths
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero3;
