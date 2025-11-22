"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Works", href: "/works" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="
                w-full
                flex justify-between items-center
                px-8 sm:px-6     /* bigger padding on mobile */
                py-4
                backdrop-blur-md bg-gray-950/80 border-b border-gray-800
                sticky top-0 z-50 shadow-md
            "
        >
            {/* Logo */}
            <h1
                className="
                    text-xl sm:text-2xl font-bold text-blue-400 tracking-wide
                    drop-shadow-[0_0_5px_rgba(34,211,238,0.7)]
                    hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.9)]
                    transition-all duration-300
                    mr-10 sm:mr-0       /* more space before Home on mobile */
                "
            >
                Elder Soriano
            </h1>

            {/* Nav links */}
            <div
                className="
                    flex
                    gap-6 sm:gap-8      /* more gap on mobile */
                    text-gray-300
                    text-sm sm:text-base
                "
            >
                {navLinks.map((link) => {
                    const active = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`relative group transition-colors duration-300 ${
                                active
                                    ? "text-blue-400 font-semibold drop-shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                                    : "hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
                            }`}
                        >
                            {link.name}

                            <span
                                className={`
                                    absolute left-0 -bottom-1 h-[2px] bg-blue-400 
                                    transition-all duration-300
                                    ${active ? "w-full" : "w-0 group-hover:w-full"}
                                `}
                            />
                        </Link>
                    );
                })}
            </div>
        </motion.nav>
    );
}
