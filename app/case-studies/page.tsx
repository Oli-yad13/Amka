"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Quote, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caseStudies = [
    {
        title: "PSI Ethiopia — Tihut Clinics",
        category: "MRS & Medical Campaigns",
        image: "/cs-consult.png",
        quote: "AMKA built and deployed the Medical Records System for our Tihut medium clinics across Addis Ababa, handling everything from digital patient registration to market research on pricing models for our community-level primary healthcare services.",
        author: "Program Lead, PSI Ethiopia",
        stat: "5+ Clinics in Addis Ababa",
        color: "bg-rose-50"
    },
    {
        title: "PSI Community Screening Campaigns",
        category: "Rapid Deployment",
        image: "/cs-clinic.png",
        quote: "AMKA's offline-first campaign system allowed us to run mass screening events in areas with limited connectivity. Patient data synced automatically once back online, with zero data loss.",
        author: "Campaign Coordinator, PSI Ethiopia",
        stat: "1000+ Patients/Campaign Day",
        color: "bg-purple-50"
    },
    {
        title: "Tihut Clinic Network — Unified Records",
        category: "Interoperable MRS",
        image: "/cs-equipment.png",
        quote: "With AMKA's OpenMRS-compatible system, patients across multiple Tihut locations can walk into any branch and continue their care seamlessly. The unified records have transformed how we deliver primary healthcare.",
        author: "Medical Director, Tihut Clinics",
        stat: "8 Locations Unified",
        color: "bg-emerald-50"
    }
];

export default function CaseStudiesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-48 pb-24 px-12 md:px-24 lg:px-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl"
                >
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-amka-deep mb-8 block">Success Stories</span>
                    <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-12 text-gray-900">
                        Real Impact. <br />
                        <span className="text-gray-400">Real Stories.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-3xl leading-relaxed border-l-4 border-amka-deep pl-8">
                        See how healthcare providers across Ethiopia are transforming their operations and patient care with AMKA Systems.
                    </p>
                </motion.div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Featured Case Studies Grid */}
            <section className="py-32 px-12 md:px-24 lg:px-32">
                <div className="space-y-32">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className={`group grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            {/* Image Side */}
                            <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>

                            {/* Content Side */}
                            <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="flex items-center gap-3 mb-6">
                                    <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${study.color} text-gray-900`}>
                                        {study.category}
                                    </span>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                                    {study.title}
                                </h2>

                                <div className="mb-10 relative">
                                    <Quote className="absolute -top-4 -left-6 text-gray-200 w-12 h-12 -z-10" />
                                    <p className="text-xl md:text-2xl text-gray-600 italic leading-relaxed">
                                        "{study.quote}"
                                    </p>
                                    <div className="mt-6 flex items-center gap-4">
                                        <div className="w-12 h-0.5 bg-gray-300"></div>
                                        <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
                                            {study.author}
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 inline-block">
                                    <div className="flex items-center gap-4 mb-2">
                                        <TrendingUp className="text-amka-deep" size={24} />
                                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Key Result</span>
                                    </div>
                                    <p className="text-3xl font-bold text-amka-deep">
                                        {study.stat}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-32 px-12 md:px-24 lg:px-32 bg-amka-deep text-white">
                <div className="max-w-4xl">
                    <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                        Start your success story.
                    </h2>
                    <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed max-w-2xl">
                        Join the fastest growing network of modern healthcare providers in Ethiopia today.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-amka-deep text-base font-bold hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                        Contact Sales
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
