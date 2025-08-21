import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ama Owusu",
    text: "EduPath helped me discover my passion for nursing. Now I’m studying at UEW!",
    image: "/images/ama.jpg",
  },
  {
    name: "Kwame Mensah",
    text: "Thanks to EduPath, I applied to AAMUSTED with confidence and clarity.",
    image: "/images/kwame.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-200">
      <motion.h2
        className="text-[6em] bg-gradient-to-r from-purple-800 to-gray-400 bg-clip-text text-transparent font-bold text-center mb-10"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{once:true}}
      >
        What Students Say
      </motion.h2>
      <div className="flex text-white flex-col md:flex-row gap-8 justify-center items-center px-6">
        {testimonials.map((t, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl p-6 hover:bg-black/60 shadow-md text-black hover:text-white w-full md:w-1/3 transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{once:true}}
          >
            <img
              src={t.image}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
            />
            <p className="text-sm italic">“{t.text}”</p>
            <h4 className="mt-4 text-sm font-semibold ">- {t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
