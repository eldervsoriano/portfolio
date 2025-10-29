"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// ✅ Load <model-viewer> safely — define only once globally
if (typeof window !== "undefined" && !customElements.get("model-viewer")) {
    import("@google/model-viewer");
}

export default function WorksPage() {
    const projects = [
        {
            name: "Laro ng Bayan",
            tools: "Unity, C#, Blender, Photoshop",
            description:
                "A 3D mobile multiplayer game modernizing Filipino street games — designing gameplay systems, implementing multiplayer features, and integrating 3D assets to promote Filipino culture.",
            image: "/Images/laro-bayan-images/Laro-Ng-Bayan-cover.png",
            video: "/Videos/Laro-Bayan.mp4",
        },
        {
            name: "Graham Rush",
            tools: "Unity, C#, Blender",
            description:
                "An isometric 3D runner game where players collect graham balls for high scores, inspired by my graham ball business experience.",
            image: "/Images/graham-rush-images/Graham-Rush-cover.png",
            video: "/Videos/Graham-Rush.mp4",
        },
        {
            name: "Bubble Pop Frenzy",
            tools: "Unity, C#",
            description:
                "A fast-paced arcade color-matching game where players swipe swordfish to pop bubbles. Developed during Global Game Jam 2025.",
            image: "/Images/bubble-pop-frenzy-images/Bubble-Pop-Frenzy-cover.png",
            video: "/Videos/Bubble-Pop-Frenzy.mp4",
        },
        {
            name: "Ocean Dash",
            tools: "C#, Unity, Canva",
            description:
                "A 2-player underwater runner navigating obstacles for high scores; created for YGG Play Summit Game Jam 2024.",
            image: "/Images/ocean-dash/Ocean-Dash.jpg",
            video: "/Videos/Ocean-Dash.mp4",
        },
        {
            name: "The Isolated",
            tools: "Roblox, Lua, Canva",
            description:
                "An immersive horror escape game where players solve puzzles and evade sinister entities to escape a haunted house. Created for Game Changers! GoGaming Game Jam 2024.",
            image: "/Images/the-isolated-images/The-Isolated-image.jpg",
        },
    ];

    const models = [
        { src: "/Model/Graham-Rush-Beehive.glb", name: "Low Poly Beehive" },
        { src: "/Model/Graham-Rush-Chicken.glb", name: "Low Poly Chicken" },
        {
            src: "/Model/GrahamRush_Ground-Platform.glb",
            name: "Low Poly Runner Platform (Loopable)",
        },
        { src: "/Model/Graham-Rush-Bee.glb", name: "Low Poly Bee" },
    ];

    return (
        <main className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 text-white overflow-hidden">
            {/* 🌟 Featured Projects */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="max-w-6xl mx-auto px-6 py-16"
            >
                <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 drop-shadow-[0_0_12px_rgba(0,255,255,0.7)]">
                    Featured Projects
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </motion.section>

            {/* 🧊 3D Showcase */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="max-w-6xl mx-auto px-6 py-16"
            >
                <h2 className="text-4xl font-bold mb-12 text-center text-cyan-400 drop-shadow-[0_0_12px_rgba(0,255,255,0.7)]">
                    3D Showcase
                </h2>

                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
                    {models.map((model, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center gap-4 w-[300px] h-[300px] sm:w-[250px] sm:h-[250px] bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-700 hover:border-cyan-400 hover:shadow-[0_0_20px_#00ffff] transition-all duration-300 p-3"
                        >
                            {/* @ts-ignore - Custom element from @google/model-viewer */}
                            <model-viewer
                                src={model.src}
                                alt={model.name}
                                auto-rotate
                                camera-controls
                                ar
                                style={{ width: "100%", height: "100%" }}
                            />
                            <span className="text-cyan-400 text-lg font-medium text-center transition-all duration-300 hover:drop-shadow-[0_0_12px_#00ffff]">
                                {model.name}
                            </span>
                        </div>
                    ))}
                </div>
            </motion.section>
        </main>
    );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
    const [hovered, setHovered] = React.useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="bg-gray-800/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-700 hover:border-cyan-400 hover:shadow-[0_0_20px_#00ffff] transition-all duration-300"
        >
            <div className="relative w-full aspect-square overflow-hidden flex items-center justify-center bg-black">
                {hovered && project.video ? (
                    <video
                        src={project.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 bg-black"
                    />
                ) : (
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-contain transition-transform duration-500"
                        unoptimized
                    />
                )}
            </div>

            <div className="p-6 text-center">
                <h3
                    className={`text-cyan-400 text-xl font-semibold mb-2 transition-all duration-300 ${
                        hovered ? "drop-shadow-[0_0_12px_#00ffff]" : ""
                    }`}
                >
                    {project.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">{project.tools}</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                    {project.description}
                </p>
            </div>
        </motion.div>
    );
}