"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden bg-[#050510] text-white flex items-center justify-center">

            {/* Background Image (Full Scale + Animated Pulse) */}
            <div className="absolute inset-0 z-0 select-none">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="relative w-full h-full"
                >
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        poster="/hero-dna-abstract.png"
                        className="w-full h-full object-cover opacity-90"
                    >
                        <source src="/hero-bg.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </motion.div>
                {/* Dark overlay for text readability - Gradient to ensure text pops */}
                <div className="absolute inset-0 bg-black/30 z-0"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#050510]/95 via-[#050510]/50 to-transparent z-0"></div>
            </div>

            {/* Content Container (Centered / Slightly Left) */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full pt-20">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="w-full max-w-[90vw] md:max-w-full"
                >
                    {/* Logo / Brand Mark (Top Left) */}
                    <div className="mb-12">
                        {/* Optional: Add a small tagline or logo mark here if needed, 
                but main nav handles it. */}
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold leading-[0.9] tracking-tighter mb-10 drop-shadow-2xl">
                        A proven solution <br />
                        for a complex <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            healthcare market.
                        </span>
                    </h1>

                    <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-12 mt-16 border-t border-white/20 pt-10">
                        <p className="max-w-md text-xl text-gray-100 font-light leading-relaxed drop-shadow-md">
                            We deliver grounded, client-friendly, and dynamic HMIS and MRS solutions to healthcare providers across Ethiopia.
                        </p>

                        <Link
                            href="/contact"
                            className="group flex items-center gap-4 px-10 py-5 rounded-full border-2 border-white/30 hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-md hover:scale-105"
                        >
                            <span className="text-base font-bold tracking-widest uppercase">Get Started</span>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 right-12 z-20"
            >
                <button
                    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                    className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-black hover:scale-110 transition-transform shadow-lg shadow-white/10"
                >
                    <ChevronDown size={24} />
                </button>
            </motion.div>

        </section>
    );
}
