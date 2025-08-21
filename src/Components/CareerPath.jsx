import React from "react";
import { Link } from "react-router-dom";
import nurse from '../Icons/beautiful-black-nurse-portrait.webp'
import construction from '../Icons/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept.webp'
import teaching from '../Icons/medium-shot-smiley-woman-teaching.webp'
import female from '../Icons/young-black-woman-painting-clay-pot-art-studio-craftswoman-painting-ceramic-bowl-workbench-girl-wearing-blue-apron.webp'
import sofwareDeveloper from '../Icons/sofware-developer-thinking-while-touching-beard-while-typing-laptop-sitting-desk-with-multiple-screens-parsing-code-focused-database-admin-working-with-team-coding-background.webp'
import housing from '../Icons/african-business-male-people-shaking-hands.webp'
import { motion } from "framer-motion";

const careers = [
  { src: construction, title: ' Engineering', size: 'col-span-2 row-span-1' },
  { src: nurse, title: 'Healthcare', size: 'col-span-1 row-span-2' },
  { src: teaching, title: 'Education', size: 'col-span-1 row-span-1' },
  { src:sofwareDeveloper , title: 'Technology ', size: 'col-span-1 row-span-1' },
  { src:housing , title: 'Business', size: 'col-span-2 row-span-1' },
  { src: female, title: ' Arts & Design', size: 'col-span-1 row-span-1' },
];

const CareerPaths = () => {
	return (
		 <section className="p-12 bg-gray-200 font-serif z-10">
     <h2 className="text-[6em] text-center bg-gradient-to-r from-purple-800 to-gray-400 bg-clip-text text-transparent font-bold leading-tight">Discover Your Future</h2>
     <div className='flex'>
      <div className="grid grid-cols-3 grid-rows-3 gap-4 z-10 col-span-2 p-12 h-[600px] w-3/4">
        {careers.map((career, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-2xl ${career.size} group`}
          >
            <img
              src={career.src}
              alt={career.title}
              loading="lazy"
              className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">{career.title}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center w-1/2 mb-4  p-6 space-y-4">
        <p className="text-2xl tracking-wide leading-tighter">
          Explore a wide range of career paths tailored to your strengths and interests.
          Whether you're creative, analytical, or hands-on, there's a path for you.
        </p>
        <div className=''>
        <Link to="/careers" className="text-center bg-gray-100 shadow-xl px-4 py-2 rounded text-xl hover:bg-gray-50 transition duration-300">
          Explore Careers &rarr;
        </Link> 
      </div> 
      </div>
          </div>
    </section>
	);
};

export default CareerPaths;
