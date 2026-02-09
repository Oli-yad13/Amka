"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Stethoscope, HeartPulse, Users } from "lucide-react";

const cards = [
    {
        number: "01",
        label: "Healthcare Provider",
        description: "Explore our HMIS and MRS solutions built for clinics, hospitals, and health centers across Ethiopia.",
        href: "/solutions",
        icon: Stethoscope,
    },
    {
        number: "02",
        label: "Patient",
        description: "Learn how AMKA protects your records and improves your care experience at partner facilities.",
        href: "/contact",
        icon: HeartPulse,
    },
    {
        number: "03",
        label: "Join the Team",
        description: "We're building the future of healthcare technology in Ethiopia. Come build with us.",
        href: "/about#join",
        icon: Users,
    },
];

export default function WantToKnowMore() {
    return (
        <section className="bg-gray-950 py-24 md:py-32">
            <div className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-amka-cyan mb-4 block">
                            Get Started
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                            How can we help?
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-gray-400 text-lg max-w-md"
                    >
                        Choose what describes you best and we&apos;ll point you in the right direction.
                    </motion.p>
                </div>

                {/* Cards as rows */}
                <div className="border-t border-white/10">
                    {cards.map((card, i) => (
                        <motion.div
                            key={card.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            <Link
                                href={card.href}
                                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-0 py-8 md:py-10 border-b border-white/10 hover:border-amka-cyan/40 transition-all duration-300"
                            >
                                {/* Number + Icon */}
                                <div className="flex items-center gap-4 md:w-16">
                                    <span className="text-sm font-bold text-gray-600 group-hover:text-amka-cyan transition-colors">
                                        {card.number}
                                    </span>
                                </div>

                                {/* Icon */}
                                <div className="hidden md:flex w-16 items-center">
                                    <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-amka-deep flex items-center justify-center transition-all duration-300">
                                        <card.icon size={20} className="text-gray-500 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>

                                {/* Label */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-amka-cyan transition-colors duration-300 md:w-72 md:ml-4">
                                    {card.label}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-500 group-hover:text-gray-400 text-base leading-relaxed transition-colors duration-300 flex-1 md:ml-8">
                                    {card.description}
                                </p>

                                {/* Arrow */}
                                <div className="md:ml-8 self-start md:self-center">
                                    <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-amka-cyan group-hover:bg-amka-cyan flex items-center justify-center transition-all duration-300">
                                        <ArrowUpRight size={18} className="text-gray-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
