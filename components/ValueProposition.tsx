"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, HeartPulse, ShieldCheck } from "lucide-react";
import Link from "next/link";

const features = [
    {
        title: "Maximized revenues",
        description: "Optimizing patient care while maximizing financial profitability through automated billing and inventory tracking.",
        icon: BarChart3
    },
    {
        title: "Enhanced patient loyalty",
        description: "Improving patient satisfaction with faster service, accurate histories, and positive word-of-mouth referrals.",
        icon: HeartPulse
    },
    {
        title: "Secure practices",
        description: "Protecting sensitive patient information with bank-level encryption and role-based access control.",
        icon: ShieldCheck
    }
];

export default function ValueProposition() {
    return (
        <section className="py-32 bg-white text-gray-900">
            {/* Full Bleed Layout */}
            <div className="w-full">

                {/* Header Section - Left Aligned to Page Edge */}
                <div className="mb-32 px-6 md:px-40 lg:px-56">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-7xl lg:text-[5.5rem] font-sans font-medium tracking-tight leading-[1.1] max-w-4xl"
                    >
                        Efficient and effective solutions for patients and providers
                    </motion.h2>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200"></div>

                {/* Content Grid - Asymmetric */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 pt-20 px-6 md:px-40 lg:px-56">

                    {/* Label Column */}
                    <div className="hidden lg:block lg:col-span-2">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 sticky top-32">Services</span>
                    </div>

                    {/* Main Content - Offset to Right */}
                    <div className="lg:col-span-7">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-2xl md:text-4xl font-light leading-normal text-gray-800 mb-20 max-w-3xl"
                        >
                            We build digital health systems that empower clinics and providers to deliver better care, protect patient data, and operate more efficiently.
                        </motion.p>

                        {/* Features Grid */}
                        <div className="grid md:grid-cols-3 gap-12 mb-20">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                                    className="group"
                                >
                                    <div className="mb-6 text-gray-400 group-hover:text-amka-deep transition-colors duration-300">
                                        <feature.icon strokeWidth={1} size={56} />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <Link
                                href="/solutions"
                                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-gray-200 text-sm font-semibold hover:border-amka-deep hover:bg-amka-deep hover:text-white transition-all duration-300 group"
                            >
                                Our Services
                                <div className="w-6 h-6 rounded-full bg-amka-cyan/20 flex items-center justify-center group-hover:bg-white/20">
                                    <ArrowRight size={14} className="text-amka-deep group-hover:text-white" />
                                </div>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Spacer for Balance */}
                    <div className="hidden lg:block lg:col-span-3"></div>
                </div>
            </div>
        </section>
    );
}
