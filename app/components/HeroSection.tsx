"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function HeroSection() {
    const skills = [
        { name: "Play Testing", level: 8.5 },
        { name: "3D", level: 4 },
        { name: "Programming", level: 6.5 },
        { name: "Debugging", level: 5 },
        { name: "Documentation", level: 7 },
        { name: "Game Designing", level: 7.5 },
        { name: "UX & Feedback", level: 6 },
        { name: "2D", level: 3 },
    ];

    const cardsArray = [
        "🍎","🍎","🍌","🍌","🍇","🍇","🍓","🍓",
        "🍒","🍒","🥝","🥝","🍍","🍍","🍉","🍉",
        "🥥","🥥","🍋","🍋","🍊","🍊","🍈","🍈",
        "🥭","🥭","🍐","🍐","🍑","🍑","🍏","🍏",
        "🍅","🍅","🥕","🥕"
    ].map((name, i) => ({ id: i, name }));

    const [cards, setCards] = useState<typeof cardsArray>([]);
    const [flipped, setFlipped] = useState<number[]>([]);
    const [matched, setMatched] = useState<number[]>([]);
    const [init, setInit] = useState(false);

    useEffect(() => {
        setCards([...cardsArray].sort(() => Math.random() - 0.5));

        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setInit(true));
    }, []);

    const handleClick = (index: number) => {
        if (flipped.includes(index) || matched.includes(index) || flipped.length === 2) return;
        setFlipped([...flipped, index]);
    };

    useEffect(() => {
        if (flipped.length === 2) {
            const [first, second] = flipped;
            if (cards[first]?.name === cards[second]?.name) {
                setMatched((prev) => [...prev, first, second]);
                setFlipped([]);
            } else {
                const timeout = setTimeout(() => setFlipped([]), 800);
                return () => clearTimeout(timeout);
            }
        }
    }, [flipped, cards]);

    const resetGame = () => {
        setCards([...cardsArray].sort(() => Math.random() - 0.5));
        setFlipped([]);
        setMatched([]);
    };

    const particlesOptions = {
        fullScreen: { enable: false },
        background: { color: "#020617" },
        fpsLimit: 120,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" },
            },
            modes: {
                repulse: { distance: 120, duration: 0.4 },
                push: { quantity: 4 },
            },
        },
        particles: {
            color: { value: ["#00ffff", "#ff00ff", "#ffffff"] },
            links: { color: "#00ffff", distance: 140, enable: true, opacity: 0.3, width: 1 },
            move: { enable: true, speed: 1.2, direction: "none" as const, outModes: { default: "bounce" } },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
    };

    return (
        <section className="relative py-24 bg-gray-900 text-white overflow-hidden">
            {/* Particles */}
            {init && (
                <Particles id="tsparticles" options={particlesOptions} className="absolute inset-0 -z-10" />
            )}

            {/* Radial Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_70%)] -z-10" />

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-6 relative z-10">
                {/* Left: Intro & Skills */}
                <div className="md:w-1/2 flex flex-col justify-center gap-8">
                    <div>
                        <h1 className="text-5xl font-bold mb-4 text-cyan-400 drop-shadow-[0_0_10px_#00ffff]">
                            Hi, I’m Elder Soriano
                        </h1>
                        <p className="text-gray-300 mb-6">
                            I’m an aspiring game tester and developer exploring the world of games through testing, learning, and creating small projects.
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                            <Link href="/works" className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg transform transition-all duration-300 hover:scale-110 hover:bg-cyan-400 shadow-lg hover:shadow-cyan-400/30">
                                See My Projects
                            </Link>
                            <Link href="https://github.com/eldervsoriano" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-400 transition-all hover:scale-110 hover:drop-shadow-[0_0_8px_#22d3ee]">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
                                    <path fillRule="evenodd" d="M12 .297a12 12 0 00-3.793 23.4c.6.112.82-.26.82-.577v-2.17c-3.338.726-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.49.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.382 1.236-3.222-.124-.305-.536-1.527.117-3.184 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 016.003 0c2.292-1.552 3.298-1.23 3.298-1.23.655 1.657.243 2.879.119 3.184.769.84 1.235 1.912 1.235 3.222 0 4.61-2.803 5.624-5.475 5.921.43.372.815 1.102.815 2.222v3.293c0 .319.217.694.825.576A12.004 12.004 0 0012 .297z" clipRule="evenodd" />
                                </svg>
                                <span className="hidden sm:inline text-sm font-medium">GitHub</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold mb-4 text-cyan-300">My Skills & Ratings</h2>
                        <div className="flex flex-col gap-2 text-sm">
                            {skills.map((skill, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <span className="w-28 flex-shrink-0 text-cyan-400">• {skill.name}</span>
                                    <div className="w-full">
                                        <div className="flex justify-end mb-1 text-xs">
                                            <span>{skill.level}/10</span>
                                        </div>
                                        <div className="w-full bg-gray-700 h-1 rounded">
                                            <div className="bg-cyan-400 h-1 rounded transition-all duration-500" style={{ width: `${(skill.level / 10) * 100}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Mini Memory Game */}
                <div className="md:w-1/2 flex justify-center items-center">
                    <div className="p-4 bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg w-full max-w-[400px] flex flex-col items-center border border-cyan-400/30">
                        <h3 className="text-lg font-bold text-center mb-3 text-cyan-300">Mini Memory Game</h3>
                        <div className="grid gap-2 w-full aspect-square" style={{ gridTemplateColumns: "repeat(6, 1fr)" }}>
                            {cards.map((card, index) => {
                                const isFlipped = flipped.includes(index) || matched.includes(index);
                                return (
                                    <div key={index} onClick={() => handleClick(index)} className="relative cursor-pointer perspective">
                                        <div className={`transition-transform duration-500 transform-style-preserve-3d aspect-square ${isFlipped ? "rotate-y-180" : ""}`}>
                                            {/* Back Face */}
                                            <div className="absolute inset-0 bg-gray-700 rounded-md backface-hidden hover:scale-[1.03] transition-transform duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>
                                            {/* Front Face */}
                                            <div className="absolute inset-0 flex items-center justify-center bg-cyan-400 text-black rounded-md backface-hidden rotate-y-180 text-2xl hover:scale-[1.03] transition-transform duration-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                                                {card.name}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <button onClick={resetGame} className="mt-4 px-4 py-2 bg-cyan-500 rounded text-black text-sm hover:bg-cyan-400 transition">Reset Game</button>
                        <p className="text-center text-gray-300 mt-1 text-xs">Matched: {matched.length / 2} / {cardsArray.length / 2}</p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .perspective { perspective: 1000px; }
                .transform-style-preserve-3d { transform-style: preserve-3d; }
                .backface-hidden { backface-visibility: hidden; }
                .rotate-y-180 { transform: rotateY(180deg); }
            `}</style>
        </section>
    );
}
