"use client";

import { useState } from "react";

export default function CertificatesAwardsSection() {
    const [selected, setSelected] = useState<string | null>(null);

    const items = [
        {
            src: "/Images/Certificates/Laro-ng-Bayan-Thesis-Defended.jpg",
            title: "Laro ng Bayan - Thesis Defended",
            organizer: "Jose Rizal University",
            date: "Nov 2025",
        },
        {
            src: "/Images/Certificates/Social-Significance-Award-Laro-ng-Bayan.jpg",
            title: "Social Significance Award: Laro ng Bayan",
            organizer: "Awarding Event",
            date: "Nov 2025",
        },

        {
            src: "/Images/Certificates/Award.jpg",
            title: "Nostalgic-Aware: Laro ng Bayan",
            organizer: "Award Event",
            date: "Oct 2025",
        },
        {
            src: "/Images/Certificates/Global-Game-Jam.jpg",
            title: "Global Game Jam",
            organizer: "De La Salle-College of Saint Benilde",
            date: "Jan 2025",
        },
        {
            src: "/Images/Certificates/Trinity-My-Team.jpg",
            title: "My Team at Global Game Jam",
            organizer: "Team Participation",
            date: "Jan 2025",
        },
        {
            src: "/Images/Certificates/Game-Jam.jpg",
            title: "YGG Play Summit Game Jam",
            organizer: "YGG Pilipinas",
            date: "Dec 2024",
        },
        {
            src: "/Images/Certificates/Game-Changers.jpg",
            title: "Game Changers! GoGaming Game Jam",
            organizer: "Globe Telecom",
            date: "Mar 2024",
        },
        {
            src: "/Images/Certificates/Top-Performing-Student.jpg",
            title: "Top Performing Student",
            organizer: "Achieving Excellence Through Emerging Technologies",
            date: "2024",
        },
    ];

    const monthOrder: Record<string, number> = {
        Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
        Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12
    };

    const sortedItems = items.sort((a, b) => {
        const yearA = parseInt(a.date.match(/\d{4}/)?.[0] || "0");
        const yearB = parseInt(b.date.match(/\d{4}/)?.[0] || "0");

        const monthA = a.date.match(/[A-Za-z]{3}/)?.[0] || "";
        const monthB = b.date.match(/[A-Za-z]{3}/)?.[0] || "";

        if (yearA !== yearB) return yearB - yearA;
        return (monthOrder[monthB] || 0) - (monthOrder[monthA] || 0);
    });

    return (
        <section className="py-20 bg-gray-900 text-white">
            <h2 className="text-3xl font-bold text-center mb-10 text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                Events & Participations
            </h2>

            <div className="flex justify-center gap-6 flex-wrap">
                {sortedItems.map((item, i) => (
                    <div
                        key={i}
                        className="relative w-64 h-40 overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-all duration-300 hover:shadow-cyan-400/60 hover:scale-105"
                        onClick={() => setSelected(item.src)}
                    >
                        <img
                            src={item.src}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
                            <h3 className="text-lg font-semibold text-cyan-400">{item.title}</h3>
                            <p className="text-sm text-gray-300">{item.organizer}</p>
                            <p className="text-sm text-gray-300">{item.date}</p>
                            <span className="mt-2 text-sm text-blue-400 font-medium">
                                🔍 Click to View
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selected && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={() => setSelected(null)}
                >
                    <img
                        src={selected}
                        alt="Selected certificate"
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                    />
                </div>
            )}
        </section>
    );
}
