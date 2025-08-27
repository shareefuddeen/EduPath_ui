import React from "react";
import { Link } from "react-router-dom";
import image from "../Images/positive-college-student-has-dark-skin-carries-folders-book-points-with-cheerful-expression-aside-has-toothy-smile (1).webp";
import { motion } from "framer-motion";
const Hero1 = () => {
      const isAuthenticated = !!localStorage.getItem("access")

  const path = isAuthenticated? "/quiz" : "/login"
    return (
        <section className="h-screen flex items-center justify-center relative">
            <div className="h-full w-full absolute bg-black/30 z-20"></div>
            <img
                src={image}
                alt="hero image"
                className="object-fit w-full h-full relative"
            />
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{once:true}}
                className="absolute z-40 top-[6em] right-2"
            >
                <h1 className="lg:text-6xl text-2xl lg:max-w-[16ch] max-w-[25ch] text-white font-serif p-6">
                    Plan Your Future with Clarity and Confidence
                </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{once:true}}
                className="absolute z-40 right-2 top-[11em] lg:top-[18em] lg:right-10"
            >
                <p className="lg:text-3xl text-xl text-white font-serif max-w-[30ch] p-6">
                    EduPath helps you break down your career goals into
                    actionable steps. From choosing the right course to mapping
                    your long-term career plan.
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{once:true}}
                className="absolute z-40 text-gray-600 lg:top-[30em] flex right-8 lg:right-[8.9em] gap-4"
            >
                <Link
                    className="font-serif rounded shadow-lg hover:shadow-2xl hover:bg-black text-white transition duration-300 ring-1 ring-black px-2 py-1 text-sm lg:text-xl font-serif"
                    to={path}
                >
                    Get Started
                </Link>
                <Link
                    className="font-serif rounded bg-black hover:bg-black/60 shadow-lg text-white hover:shadow-2xl transition duration-300 cursor-pointer transition duration-300 px-6 py-1 text-sm lg:text-xl font-serif"
                    to="/programs"
                >
                    Browse Available Programs
                </Link>
            </motion.div>
        </section>
    );
};

export default Hero1;
