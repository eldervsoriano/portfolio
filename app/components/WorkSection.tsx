"use client";

import Card from "./Card";

export default function WorkSection() {
    const items = [
        {
            image: "/Images/laro-bayan-images/Laro-Ng-Bayan-cover.png",
            name: "Laro ng Bayan",
            description:
                "A 3D mobile multiplayer game that modernizes Filipino street games using Unity and Blender to promote local culture.",
        },
        {
            image: "/Images/graham-rush-images/Graham-Rush-cover.png",
            name: "Graham Rush",
            description:
                "An isometric runner game where players collect graham balls to earn points while avoiding obstacles and reaching high scores.",
        },
        {
            image: "/Images/bubble-pop-frenzy-images/Bubble-Pop-Frenzy-cover.png",
            name: "Bubble Pop Frenzy",
            description:
                "A colorful and fast-paced bubble popping game that challenges players to match colors, create combos, and aim for the highest score.",
        },
    ];

    return (
        <section id="work" className="py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-6 text-center">
                {/* Glowing Title */}
                <h2 className="text-4xl font-bold mb-10 text-cyan-400 drop-shadow-[0_0_15px_#22d3ee]">
                    Featured Works
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
                    {items.map((item, index) => (
                        <Card
                            key={index}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
