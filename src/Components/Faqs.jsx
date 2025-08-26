import React from "react";
import { motion } from "framer-motion";
import question from "../Icons/question_17235310.png"

const faqs = [
  {
    question: "How does EduPath work?",
    answer:
      "EduPath guides you through career exploration, matching you with institutions and programs based on your interests.",
  },
  {
    question: "Is it free to use EduPath?",
    answer:
      "Yes! EduPath is completely free for students and institutions alike.",
  },
  {
    question: "Can I apply to schools directly from EduPath?",
    answer:
      "You’ll be redirected to the official application portals of the institutions for a safe and accurate application process.",
  },
];

const FAQs = () => {
  return (
    <section className="py-16 bg-gray-200 px-6 bg-gray-200">
      <motion.h2
        className="text-[4em] bg-gradient-to-r from-purple-800 to-gray-400 bg-clip-text text-transparent font-bold text-center mb-8"
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{once:true}}
      >
        Frequently Asked Questions
      </motion.h2>
      <div className="flex md:flex-row justify-center items-center flex-col gap-6 p-6">
        <div className="">
          <img src={question} className="w-[20em] h-[20em]"/>
        </div>
 
        <div className="flex flex-col gap-4 my-auto">
          <div className="relative top-[12em] flex items-center justify-center">
              <div className="absolute z-0 w-[26em] h-[26em] rounded-full bg-purple-50 mix-blend-multiply filter blur-xl opacity-70 animate-blob "></div>
            </div>
          {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="ring-1 ring-gray-400 p-3  rounded-md shadow-md hover:shadow-xl transition flex flex-col gap-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{once:true}}
          >
            <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
            <p className="text-sm text-gray-600">{faq.answer}</p>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
