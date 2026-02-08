"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const solutions = [
    {
        number: "01",
        title: "Smart HMIS",
        tagline: "Operations, Autopilot.",
        description: "Stop managing paperwork. Start managing your business with intelligent automation for billing, inventory, and staff.",
        href: "/solutions"
    },
    {
        number: "02",
        title: "Advanced MRS",
        tagline: "The Complete Patient Story.",
        description: "A longitudinal record that travels with the patient, ensuring continuity of care across every touchpoint.",
        href: "/solutions"
    }
];

export default function SolutionsShowcase() {
    return (
        <section className="py-32 bg-white text-gray-900">

            {/* Solutions Grid - Clean & Minimal */}
            <div className="px-20 md:px-40 lg:px-56">

                {/* Section Label */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Our Solutions</span>
                </motion.div>

                {/* Solutions List */}
                <div className="space-y-0">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link
                                href={solution.href}
                                className="group block py-16 border-t border-gray-200 hover:bg-gray-50/50 transition-all duration-300"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">

                                    {/* Number */}
                                    <div className="md:col-span-1">
                                        <span className="text-sm font-bold text-gray-400 group-hover:text-amka-deep transition-colors">
                                            {solution.number}
                                        </span>
                                    </div>

                                    {/* Title & Tagline */}
                                    <div className="md:col-span-5">
                                        <h3 className="text-4xl md:text-5xl font-bold mb-3 group-hover:text-amka-deep transition-colors">
                                            {solution.title}
                                        </h3>
                                        <p className="text-xl text-gray-500">
                                            {solution.tagline}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <div className="md:col-span-5">
                                        <p className="text-base text-gray-600 leading-relaxed mb-6">
                                            {solution.description}
                                        </p>
                                    </div>

                                    {/* Arrow */}
                                    <div className="md:col-span-1 flex items-start justify-end">
                                        <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-amka-deep group-hover:border-amka-deep transition-all duration-300">
                                            <ArrowRight
                                                size={20}
                                                className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Divider */}
                <div className="border-t border-gray-200 mt-0"></div>
            </div>

            {/* Company Message Section */}
            <div className="px-20 md:px-40 lg:px-56 mt-32">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-sans font-medium tracking-tight max-w-4xl mb-20"
                >
                    Reliable, dependable <br />
                    and transformative
                </motion.h2>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                    {/* Left: Label */}
                    <div className="lg:col-span-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Company</span>
                    </div>

                    {/* Geometric Diagram */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative w-64 h-64 opacity-40 hidden lg:block lg:col-span-3"
                    >
                        <div className="absolute left-0 top-0 w-40 h-40 rounded-full border border-gray-400"></div>
                        <div className="absolute right-0 top-0 w-40 h-40 rounded-full border border-gray-400"></div>
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-40 h-40 rounded-full border border-gray-400"></div>
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-16 h-16 rounded-full bg-amka-deep/10 blur-xl"></div>
                    </motion.div>

                    {/* Middle: Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900 leading-snug">
                                We are a mission-driven healthcare technology partner celebrating a new era of digital transformation.
                            </h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                AMKA Systems provides the digital backbone for modern medical facilities in Ethiopia.
                                We help you reduce billing errors, ensure compliance, and minimize risk while drastically improving the patient experience.
                            </p>
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gray-300 text-sm font-semibold hover:border-amka-deep hover:bg-amka-deep hover:text-white transition-all duration-300 group"
                            >
                                Our Story
                                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Spacer - Removed since diagram takes that column */}
                </div>
            </div>
        </section>
    );
}
