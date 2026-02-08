"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CompanyHighlight() {
    return (
        <section className="py-32 bg-gray-50 text-gray-900 overflow-hidden">
            {/* Full Bleed - No Container */}

            {/* 1. Images Section (Full Bleed Grid) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16 mb-32">

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-[500px] md:h-[600px] relative rounded-lg overflow-hidden shadow-2xl"
                >
                    <Image
                        src="/hero-dna-abstract.png"
                        alt="Advanced Medical Tech"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Right Image - Offset Down */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="h-[400px] md:h-[500px] relative rounded-lg overflow-hidden shadow-2xl md:mt-24"
                >
                    <Image
                        src="/mrs-fluid-icon.png"
                        alt="Doctor using AMKA"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-amka-deep/10 mix-blend-multiply"></div>
                </motion.div>
            </div>


            {/* 2. Headline Section - Left Aligned */}
            <div className="mb-20 px-8 md:px-16">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-sans font-medium tracking-tight max-w-4xl"
                >
                    Reliable, dependable <br />
                    and transformative
                </motion.h2>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200"></div>

            {/* 3. Details Grid - Asymmetric */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 pt-20 px-8 md:px-16">

                {/* Left: Geometric Diagram */}
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
                <div className="lg:col-span-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6 block">Company</span>
                        <h3 className="text-2xl md:text-3xl font-medium mb-6 text-gray-900 leading-snug">
                            We are a mission-driven healthcare technology partner celebrating a new era of digital transformation.
                        </h3>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Healthcare&apos;s patient-dependent revenue cycle is forcing hospitals and other providers to change their strategies.
                            We help you reduce billing errors, ensure compliance, and minimize risk while drastically improving the patient financial experience.
                        </p>
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-gray-300 text-sm font-semibold hover:border-amka-deep hover:bg-amka-deep hover:text-white transition-all duration-300 group"
                        >
                            More Details
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-white/20">
                                <ArrowRight size={14} className="text-gray-900 group-hover:text-white" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Right: Spacer */}
                <div className="hidden lg:block lg:col-span-3"></div>

            </div>
        </section>
    );
}
