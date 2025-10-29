"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-gray-900 text-white px-6 py-12 relative overflow-hidden">
            {/* Soft radial glow overlay (matches HeroSection) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_70%)] -z-10" />

            <section className="max-w-5xl mx-auto mt-8 relative z-10">
                {/* Glowing Title */}
                <h1 className="text-4xl font-bold mb-6 text-center text-cyan-400 drop-shadow-[0_0_15px_#00ffff]">
                    About Me
                </h1>

                {/* Profile Picture */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-6"
                >
                    <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_20px_#00ffff80]">
                        <Image
                            src="/Images/Icons/profile-pic-about.jpg"
                            alt="Elder Soriano"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Short Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-12 text-center text-gray-300 max-w-3xl mx-auto"
                >
                    <p>
                        Hi! I’m <span className="text-cyan-400 font-semibold">Elder Soriano</span>, a 4th-year college student pursuing
                        <span className="font-semibold"> Bachelor of Science in Entertainment and Multimedia Computing, Major in Game Development</span>.
                        I’m an aspiring QA and Game Tester from Makati, Philippines.
                    </p>
                </motion.div>

                {/* Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2 text-cyan-300">
                        Skills
                    </h2>
                    <div className="text-gray-300">
                        <p>
                            C#, Unity, GitHub, Game Development, Game Design, Blender, Game Testing & QA,
                            UI/UX Design, Microsoft PowerPoint, Presentation Skills, Canva, Leadership
                        </p>
                    </div>
                </motion.div>

                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2 text-cyan-300">
                        Education
                    </h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold">Jose Rizal University</h3>
                            <p className="text-gray-300 mt-1">2021 – May 2026</p>
                            <p className="text-gray-300 mt-1">
                                Bachelor of Science in Entertainment and Multimedia Computing<br/>
                                Major in Game Development
                            </p>
                            <p className="text-gray-400 text-sm mt-1">Shaw Blvd., Mandaluyong City</p>
                            <p className="text-gray-400 text-sm mt-1">Aspiring QA & Game Tester</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">Fort Bonifacio High School</h3>
                            <p className="text-gray-300 mt-1">2016 – 2021</p>
                            <p className="text-gray-300 mt-1">
                                J. P. Rizal Ext., West Rembo, Taguig City
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Work Experience */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2 text-cyan-300">
                        Work Experience
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-bold">
                                Fizsmo Beverage Shop - Barista / Cash and Inventory Auditor
                            </h3>
                            <p className="text-gray-400 text-sm">Makati City | June 2025 – Present</p>
                            <ul className="list-disc ml-5 text-gray-300 mt-2">
                                <li>
                                    Prepared and served beverages while managing daily sales, cash flow, and inventory to ensure consistency, efficiency, and excellent customer service.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">
                                Multimedia, Animation, & Games Innovation Circle (MAGIC) – Internal Auditor
                            </h3>
                            <p className="text-gray-400 text-sm">Mandaluyong City | May 2025 – Present</p>
                            <ul className="list-disc ml-5 text-gray-300 mt-2">
                                <li>
                                    Audited financial statements, monitored funds, and collaborated on event planning for multimedia, animation, and game development to ensure transparency and efficiency.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">
                                Dey’s Cookie Business – Owner / CEO
                            </h3>
                            <p className="text-gray-400 text-sm">Taguig City | March 2025 – Present</p>
                            <ul className="list-disc ml-5 text-gray-300 mt-2">
                                <li>
                                    Founded and managed a small-scale cookie business, handling production, sales, marketing, and finances independently to ensure quality and customer satisfaction.
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold">
                                Digital Gaming and Internet Lounge – IT Support Intern
                            </h3>
                            <p className="text-gray-400 text-sm">Makati City | Dec 2018 – Nov 2019</p>
                            <ul className="list-disc ml-5 text-gray-300 mt-2">
                                <li>
                                    Provided technical support for computer systems, gaming peripherals, and networks while performing troubleshooting and maintenance to ensure efficient gaming operations.
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
}
