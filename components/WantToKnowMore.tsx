"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Stethoscope, HeartPulse, Users } from "lucide-react";

const cards = [
    {
        label: "I am a healthcare provider",
        href: "/solutions",
        icon: Stethoscope,
    },
    {
        label: "I am a patient",
        href: "/contact",
        icon: HeartPulse,
    },
    {
        label: "I would like to join the team",
        href: "/about#join",
        icon: Users,
    },
];

export default function WantToKnowMore() {
    return (
        <section className="bg-amka-deep py-24 px-6">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center text-white text-4xl md:text-5xl font-bold mb-16"
                >
                    Want to know more?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Link
                                href={card.href}
                                className="group flex flex-col items-center text-center gap-6 p-10 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm hover:bg-white hover:border-white transition-all duration-300 cursor-pointer"
                            >
                                <div className="w-16 h-16 rounded-full bg-white/15 group-hover:bg-amka-deep/10 flex items-center justify-center transition-colors duration-300">
                                    <card.icon
                                        size={28}
                                        className="text-white group-hover:text-amka-deep transition-colors duration-300"
                                    />
                                </div>

                                <p className="text-xl font-semibold text-white group-hover:text-gray-900 transition-colors duration-300">
                                    {card.label}
                                </p>

                                <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/70 group-hover:text-amka-deep transition-colors duration-300">
                                    Learn more
                                    <ArrowRight
                                        size={16}
                                        className="group-hover:translate-x-1 transition-transform duration-300"
                                    />
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
