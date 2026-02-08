"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, ShieldCheck, Zap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Partner logos from public/logos
const partnerLogos = [
    "/logos/Clip path group.png",
    "/logos/Clip path group-1.png",
    "/logos/Clip path group-2.png",
    "/logos/Clip path group-3.png",
    "/logos/Clip path group-4.png",
    "/logos/Clip path group-5.png",
    "/logos/Clip path group-6.png",
    "/logos/Clip path group-7.png",
    "/logos/Clip path group-8.png",
    "/logos/Clip path group-10.png",
    "/logos/Clip path group-11.png",
    "/logos/Clip path group-12.png",
    "/logos/Group.png",
    "/logos/Group-1.png",
    "/logos/Group-2.png",
    "/logos/Rectangle.png",
    "/logos/Rectangle-1.png",
    "/logos/Rectangle-2.png",
    "/logos/Vector.png",
    "/logos/Layer 2.png",
    "/logos/layer1.png",
    "/logos/farm-africa-e1602251024644 1.png",
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white overflow-hidden">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 px-12 md:px-24 lg:px-32">
                {/* Abstract Background Decoration */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-amka-light/10 to-transparent rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl"
                >
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-amka-deep mb-8 block">Our Mission</span>
                    <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-12 text-gray-900">
                        Interoperability & <br />
                        <span className="text-gray-400">outreach, simplified.</span>
                    </h1>
                </motion.div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Narrative Section: Challenge vs Solution */}
            <section className="py-32 px-12 md:px-24 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/* The Challenge */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-bold mb-8 text-gray-900">The Challenge</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Healthcare in Ethiopia is vibrant but fragmented. Essential data is often trapped in paper files, leading to lost histories, revenue leakage, and inefficient care delivery. Clinics struggle to scale without a central nervous system.
                    </p>
                </motion.div>

                {/* The Solution */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h2 className="text-4xl font-bold mb-8 text-amka-deep">The Solution</h2>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                        AMKA provides a full, interoperable Medical Record System (fully OpenMRS compatible) and campaign-ready infrastructure for NGOs and healthcare providers. From mass screening campaigns with PSI Ethiopia&apos;s Tihut Clinics to unified clinic networks across Addis Ababa, we power modern care delivery.
                    </p>
                </motion.div>
            </section>

            {/* Core Values Section */}
            <section className="py-32 px-12 md:px-24 lg:px-32 bg-gray-50">
                <div className="mb-20">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-amka-deep mb-4 block">Our DNA</span>
                    <h2 className="text-5xl font-bold text-gray-900">Built on principle.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Innovation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-14 h-14 rounded-full bg-blue-50 text-amka-blue flex items-center justify-center mb-6">
                            <Zap size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovation</h3>
                        <p className="text-gray-600 leading-relaxed">
                            We don't just update software; we push boundaries. Continuous deployment of new features ensures our partners always have the leading edge.
                        </p>
                    </motion.div>

                    {/* Integrity */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-14 h-14 rounded-full bg-purple-50 text-amka-deep flex items-center justify-center mb-6">
                            <ShieldCheck size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Integrity</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Your data is sacred. We adhere to strict HIPAA & GDPR compliant data handling protocols to ensure patient privacy is never compromised.
                        </p>
                    </motion.div>

                    {/* Access */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="w-14 h-14 rounded-full bg-cyan-50 text-amka-cyan flex items-center justify-center mb-6">
                            <Globe size={28} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Access</h3>
                        <p className="text-gray-600 leading-relaxed">
                            Great technology shouldn't be a luxury. We engineer our solutions to be affordable and scalable for every tier of clinic, from rural outposts to city hospitals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="px-12 md:px-24 lg:px-32 mb-16 text-center">
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-amka-deep mb-4 block">Trusted Partnerships</span>
                    <h2 className="text-4xl font-bold text-gray-900">Working alongside industry leaders.</h2>
                </div>

                {/* Scrolling Logo Marquee */}
                <div className="relative">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                    {/* Scrolling container */}
                    <div className="flex animate-marquee">
                        {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 mx-8 h-20 w-40 relative grayscale hover:grayscale-0 transition-all duration-300"
                            >
                                <Image
                                    src={logo}
                                    alt="Partner Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Strip */}
            <section className="py-24 bg-amka-deep text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/amka_fluid_hero_bg_1770378438721.png')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
                <div className="container mx-auto px-12 md:px-24 lg:px-32 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-bold mb-12">Powering the future of care.</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/20 pt-12">
                        <div>
                            <p className="text-5xl md:text-6xl font-black mb-2">50K+</p>
                            <p className="text-lg uppercase tracking-widest opacity-80">Patient Records</p>
                        </div>
                        <div>
                            <p className="text-5xl md:text-6xl font-black mb-2">8+</p>
                            <p className="text-lg uppercase tracking-widest opacity-80">Facilities Served</p>
                        </div>
                        <div>
                            <p className="text-5xl md:text-6xl font-black mb-2">99.5%</p>
                            <p className="text-lg uppercase tracking-widest opacity-80">System Uptime</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career / CTA */}
            <section id="join" className="py-32 px-12 md:px-24 lg:px-32 text-center scroll-mt-24">
                <h2 className="text-4xl font-bold mb-6 text-gray-900">Join the movement.</h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                    We are always looking for passionate individuals who want to rewrite the story of healthcare in Ethiopia and beyond.
                </p>
                <div className="flex justify-center gap-6">
                    <Link
                        href="/contact"
                        className="px-8 py-4 rounded-full bg-gray-900 text-white font-bold hover:bg-amka-deep transition-colors"
                    >
                        View Careers
                    </Link>
                    <Link
                        href="/contact"
                        className="px-8 py-4 rounded-full border border-gray-200 text-gray-900 font-bold hover:border-amka-deep hover:text-amka-deep transition-colors"
                    >
                        Partner With Us
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
