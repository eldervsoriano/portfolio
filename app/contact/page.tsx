"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Gamepad2, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gray-900 text-white px-6 py-12 relative overflow-hidden">
            {/* Soft radial glow overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.05),transparent_70%)] -z-10" />

            {/* Page Title */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-6 text-center text-cyan-400 drop-shadow-[0_0_15px_#00ffff]"
            >
                Let’s Connect 💬
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-gray-400 text-center max-w-xl mx-auto mb-12 leading-relaxed"
            >
                I'm always open to new opportunities, collaborations, and game development projects.
                Feel free to reach out through any of my links below — I’d love to hear from you!
            </motion.p>


            {/* Contact Links */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-6 w-full max-w-md mx-auto"
            >
                {/** Contact Item */}
                <ContactItem
                    icon={<Phone className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_#00ffff]" />}
                    title="Contact Number"
                    subtitle="0976 666 3789"
                    href="tel:09766663789"
                />
                <ContactItem
                    icon={<Mail className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_#00ffff]" />}
                    title="Email"
                    subtitle="eldervsoriano@gmail.com"
                    href="mailto:eldervsoriano@gmail.com"
                />
                <ContactItem
                    icon={<Linkedin className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_#00ffff]" />}
                    title="LinkedIn"
                    subtitle="/in/elder-soriano-86892a351"
                    href="https://www.linkedin.com/in/elder-soriano-86892a351"
                />
                <ContactItem
                    icon={<Gamepad2 className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_#00ffff]" />}
                    title="itch.io"
                    subtitle="eldersoriano.itch.io"
                    href="https://eldersoriano.itch.io/"
                />
                <ContactItem
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_#00ffff]"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 .297a12 12 0 00-3.793 23.4c.6.112.82-.26.82-.577v-2.17c-3.338.726-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.49.998.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.382 1.236-3.222-.124-.305-.536-1.527.117-3.184 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 016.003 0c2.292-1.552 3.298-1.23 3.298-1.23.655 1.657.243 2.879.119 3.184.769.84 1.235 1.912 1.235 3.222 0 4.61-2.803 5.624-5.475 5.921.43.372.815 1.102.815 2.222v3.293c0 .319.217.694.825.576A12.004 12.004 0 0012 .297z"
                                clipRule="evenodd"
                            />
                        </svg>
                    }
                    title="GitHub"
                    subtitle="github.com/eldervsoriano"
                    href="https://github.com/eldervsoriano"
                />
            </motion.div>
        </main>
    );
}

function ContactItem({ icon, title, subtitle, href }: { icon: React.ReactNode; title: string; subtitle: string; href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gray-800 p-5 rounded-xl border border-gray-700 hover:border-cyan-400 hover:shadow-[0_0_20px_#00ffff] transition-all duration-300"
        >
            {icon}
            <div>
                <p className="text-lg font-semibold text-white">{title}</p>
                <p className="text-gray-400 text-sm">{subtitle}</p>
            </div>
        </a>
    );
}
