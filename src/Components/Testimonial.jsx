import React from "react";
import { motion } from "framer-motion";


const Testimonials = () => {
  const testimonials = [
  {
    id: 1,
    text: "Before using EduPath, I was completely unsure about what course to study after high school. The platform guided me step by step, and the recommendations matched my interests so well. Now I feel confident about pursuing a career in ICT, and I finally have a clear direction.",
    author: "liu kang",
    bg: "bg-black text-white",
  },
  {
    id: 2,
    text: "As a student, choosing the right path can be stressful. EduPath made things easier by showing me options that fit both my strengths and passions. It felt like the system really understood me, and that gave me the confidence to make the right decision.",
    author: "Shao Khan.",
    bg: "bg-white text-black border",
  },
  {
    id: 3,
    text: "I always thought I wanted to study business, but after trying EduPath’s quiz and exploring the careers it suggested, I realized I’m better suited for Human Resource Management. That discovery has changed how I see my future.",
    author: "Johnny Cage.",
    bg: "bg-indigo-400 text-white",
  },
  {
    id: 4,
    text: "EduPath was like having a personal career coach. It showed me courses and career paths that matched my skills and personality. For the first time, I feel motivated about what lies ahead.",
    author: "Kung Lao",
    bg: "bg-purple-300 text-black",
  },
  {
    id: 5,
    text: "I recently used these guys for our company conference. They were excellent and very professional.",
    author: "Sonya Blade",
    bg: "bg-gray-100 text-black",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotate: -6 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    rotate: i % 2 === 0 ? -6 : 6,
    transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
  }),
};
  return (
    <section className="py-20 flex flex-col items-center">
      <h2 className="text-6xl bg-gradient-to-r from-purple-800 to-gray-400 bg-clip-text text-transparent leading-tight  font-bold mb-12 text-center">Trusted by students</h2>

      <div className="relative flex justify-center p-12 items-center gap-1 flex-wrap">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            className={`max-w-xs p-6 rounded-xl shadow-lg ${t.bg}`}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            custom={i}
          >
            <div className="flex mb-4 text-yellow-400">
              {"★★★★★".split("").map((star, idx) => (
                <span key={idx}>{star}</span>
              ))}
            </div>
            <p className="mb-4 text-sm leading-relaxed">{t.text}</p>
            <p className="text-sm font-semibold">{t.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
