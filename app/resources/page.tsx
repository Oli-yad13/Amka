"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Download, FileText, Video, CheckCircle, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const resources = [
    {
        title: "The Digital Clinic Roadmap",
        category: "Guide",
        description: "A step-by-step guide to transitioning from paper records to a fully digital HMIS without disrupting operations.",
        icon: BookOpen,
        color: "bg-blue-50 text-amka-blue"
    },
    {
        title: "Optimizing Revenue Cycle Management",
        category: "Whitepaper",
        description: "Discover how automated billing and insurance claim processing can recover up to 30% of lost revenue.",
        icon: FileText,
        color: "bg-purple-50 text-amka-deep"
    },
    {
        title: "AMKA Product Brochure 2026",
        category: "Download",
        description: "Full feature list, technical specifications, and pricing tiers for our HMIS and MRS solutions.",
        icon: Download,
        color: "bg-cyan-50 text-amka-cyan"
    },
    {
        title: "Telemedicine Best Practices",
        category: "Webinar",
        description: "Watch our recorded session on how to effectively implement remote consultations in Ethiopian clinics.",
        icon: Video,
        color: "bg-rose-50 text-rose-600"
    }
];

const blogPosts = [
    {
        title: "Why 'Offline-First' Matters in Ethiopian Healthcare",
        date: "Jan 15, 2026",
        summary: "Internet connectivity isn't always guaranteed. Here's how AMKA ensures continuity of care even when the network is down.",
        readTime: "5 min read",
    },
    {
        title: "Digitizing PSI's Tihut Clinics: Lessons Learned",
        date: "Dec 20, 2025",
        summary: "How we deployed a full MRS across multiple community clinics in Addis Ababa and what the rollout taught us.",
        readTime: "7 min read",
    },
    {
        title: "Running Mass Screening Campaigns with Zero Data Loss",
        date: "Nov 30, 2025",
        summary: "A behind-the-scenes look at how AMKA's offline-first system powers high-volume medical campaigns for PSI Ethiopia.",
        readTime: "8 min read",
    }
];

export default function ResourcesPage() {
    const [email, setEmail] = useState("");
    const [nlStatus, setNlStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setNlStatus("loading");

        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            if (!res.ok) {
                setNlStatus("error");
                return;
            }

            setNlStatus("success");
            setEmail("");
        } catch {
            setNlStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-48 pb-20 px-12 md:px-24 lg:px-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl"
                >
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-amka-deep mb-8 block">Knowledge Hub</span>
                    <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-12 text-gray-900">
                        Insights for the <br />
                        <span className="text-gray-400">modern provider.</span>
                    </h1>
                </motion.div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Featured Resources Grid */}
            <section className="py-32 px-12 md:px-24 lg:px-32 bg-gray-50/50">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-gray-900">Featured Guides</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {resources.map((resource, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link
                                href="/contact"
                                className="block bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-amka-deep/20 transition-all duration-300 group"
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div className={`w-16 h-16 rounded-2xl ${resource.color} flex items-center justify-center`}>
                                        <resource.icon size={32} />
                                    </div>
                                    <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${resource.color}`}>
                                        {resource.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-amka-deep transition-colors">
                                    {resource.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    {resource.description}
                                </p>
                                <div className="flex items-center gap-2 text-amka-deep font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                                    Request Access <ArrowRight size={16} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Latest Articles */}
            <section className="py-32 px-12 md:px-24 lg:px-32">
                <h2 className="text-4xl font-bold text-gray-900 mb-16">Latest from the Blog</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href="/contact" className="block group">
                                <div className="mb-8 overflow-hidden rounded-2xl aspect-video bg-gray-100 relative">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-amka-deep/20 to-amka-cyan/20 group-hover:scale-105 transition-transform duration-700"></div>
                                </div>
                                <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-amka-deep transition-colors leading-tight">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {post.summary}
                                </p>
                                <span className="inline-flex items-center gap-2 text-amka-deep font-bold text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                                    Read Article <ArrowRight size={16} />
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-32 px-6 md:px-12 bg-gray-900 text-white text-center rounded-t-[3rem] mx-4 md:mx-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/amka_fluid_hero_bg_1770378438721.png')] bg-cover bg-center mix-blend-overlay pointer-events-none"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Stay ahead of the curve.</h2>
                    <p className="text-xl text-gray-400 mb-12">
                        Join healthcare professionals receiving our insights on digital health trends in Ethiopia.
                    </p>

                    {nlStatus === "success" ? (
                        <div className="flex items-center justify-center gap-3 text-amka-cyan">
                            <CheckCircle size={24} />
                            <span className="text-lg font-semibold">You&apos;re subscribed! We&apos;ll be in touch.</span>
                        </div>
                    ) : (
                        <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
                            <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-500 focus:outline-none focus:bg-white/20 focus:border-amka-cyan transition-all"
                            />
                            <button
                                type="submit"
                                disabled={nlStatus === "loading"}
                                className="px-8 py-4 rounded-full bg-amka-cyan text-gray-900 font-bold hover:bg-white transition-colors shadow-lg shadow-cyan-900/50 disabled:opacity-60 flex items-center justify-center gap-2"
                            >
                                {nlStatus === "loading" ? (
                                    <Loader2 size={18} className="animate-spin" />
                                ) : (
                                    "Subscribe"
                                )}
                            </button>
                        </form>
                    )}

                    {nlStatus === "error" && (
                        <p className="text-red-400 text-sm mt-4">Something went wrong. Please try again.</p>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
