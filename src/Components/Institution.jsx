import React from "react";
import AamustedLogo from "../Icons/AAMUSTED-Full-shot.webp";
import UewdLogo from "../Icons/dji_0972_sm_sm.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Institution = () => {
	const institutions = [
		{
			name: "University of Education, Winneba (UEW)",
			image: UewdLogo,
			description:
				"A leading university in teacher education and educational research in Ghana.",
		},
		{
			name: "AAMUSTED",
			image: AamustedLogo,
			description:
				"Focused on technical and vocational teacher education and training.",
		},
	];
	return (
		<section className="py-16 bg-gray-200">
			<div className="max-w-6xl mx-auto px-6 text-center">
				<motion.h2
					initial={{ opacity: 0, scale: 0.6, y: 20 }}
					whileInView={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{once:true}}
					className="text-[6em] text-center bg-gradient-to-r from-purple-800 to-gray-400 bg-clip-text text-transparent leading-tight font-bold mb-4"
				>
					Explore Institutions
				</motion.h2>
				<motion.p
					initial={{ opacity: 0, scale: 0.6, y: 20 }}
					whileInView={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{once:true}}
					className="text-purple-900 text-lg mb-10 max-w-2xl mx-auto"
				>
					Discover top institutions in Ghana that can help you reach
					your academic and career goals.
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
					{institutions.map((inst, index) => (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{once:true}}
							key={index}
							className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
						>
							<img
								src={inst.image}
								alt={inst.name}
								loading="lazy"
								className="h-48 w-full object-cover"
							/>
							<div className="p-6 text-left">
								<h3 className="text-xl font-semibold text-gray-800">
									{inst.name}
								</h3>
								<p className="text-sm text-gray-600 mt-2">
									{inst.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				<Link
					to="/program"
					className="inline-block bg-black text-white hover:text-black shadow-xl text-xl px-6 py-3 rounded-full text-sm hover:bg-gray-50 transition"
				>
					Explore All Institutions &rarr;
				</Link>
			</div>
		</section>
	);
};

export default Institution;
