import { Link } from "react-router-dom";
import Image from "../Images/Book lover-bro (1).svg";
import { motion } from "framer-motion";

const CareerAssessement = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center p-4 lg:p-6">
            <div className="h-full w-full bg-purple-900 rounded-[4em] p-6 text-white font-serif flex flex-col lg:flex-row justify-center items-center">
                <div className="flex flex-col gap-6 w-full lg:w-1/2">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{once:true}}
                        className="text-6xl font-bold text-center md:text-left max-w-[22ch] p-2"
                    >
                        Find the Career That
                        <span className="text-black mx-1 font-mono">Fits</span>
                        You
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{once:true}}
                        className="text-2xl max-w-[26ch] mx-auto lg:mx-0 text-center lg:text-left md:text-left lg:max-w-[46ch] p-2"
                    >
                        Answer a few questions and get personalized suggestions
                        based on your strengths, interests, and goals.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{once:true}}
                        className="flex mx-auto lg:mx-0 text-center lg:text-left gap-4"
                    >
                        
                        <Link
                            className="font-serif bg-black shadow-lg hover:shadow-2xl hover:bg-black/60 transition duration-300 text-white rounded px-2 py-1 text-xl font-serif"
                            to="/quiz"
                        >
                            Take Quiz
                        </Link>
                        <Link
                            className="font-serif shadow-lg hover:shadow-2xl transition duration-300 pointer rounded transition duration-300 text-black ring-1 ring-black px-6 py-1 text-xl font-serif"
                            to=""
                        >
                            Watch How It Works
                        </Link>
                    </motion.div>
                </div>
                <div className="w-1/2 h-full p-6">
                    <motion.img
                        initial={{ opacity: 0, y: -22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{once:true}}
                        src={Image}
                        loading="lazy"
                        className="object-cover w-[32em] h-[30em]"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default CareerAssessement;
