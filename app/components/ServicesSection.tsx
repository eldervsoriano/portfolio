"use client";

import { motion } from "framer-motion";

export default function ServicesSection() {
    const logos = [
        "/Images/Icons/Blender-Logo.png",
        "/Images/Icons/CSharp-Logo.png",
        "/Images/Icons/Github-Logo.png",
        "/Images/Icons/Unity-Logo.png",
        "/Images/Icons/Canva-Logo.png",
    ];

    const services = [
        {
            title: "Game Testing",
            description: "Learning functional testing, bug reporting, and gameplay analysis.",
        },
        {
            title: "Game Development",
            description: "Creating small prototypes to understand mechanics and interactions.",
        },
        {
            title: "UX & Feedback",
            description: "Exploring user experience testing to improve gameplay flow.",
        },
    ];

    return (
        <section id="services" className="py-20 bg-[#020616] text-center text-white">
            {/* Glow Title (same style as WorkSection) */}
            <h2 className="text-3xl font-bold mb-6 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                What I’m Learning & Exploring
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                I’m building my skills in game testing, QA, and game development by experimenting with small projects and analyzing gameplay.
            </p>

            {/* Service Cards */}
            <div className="flex justify-center gap-6 flex-wrap mb-8">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg w-64 cursor-pointer border border-gray-700 hover:shadow-cyan-500/30 transition-shadow duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <h3 className="font-semibold text-xl mb-2 text-cyan-400">
                            {service.title}
                        </h3>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                    </motion.div>
                ))}
            </div>

            {/* Logos */}
            <div className="flex justify-center gap-4 flex-wrap mt-4">
                {logos.map((logo, i) => (
                    <motion.div
                        key={i}
                        className="p-2 bg-white rounded-lg shadow cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <img src={logo} alt={`Logo ${i}`} className="w-8 h-8 object-contain" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
