"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, DollarSign, Package, Users, FileText, Activity, Pill, Video, BarChart3, Store } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



// SECTION 1: HMIS
const hmisFeatures = [
    {
        title: "Financial Intelligence",
        description: "Automated invoicing linked to procedure codes. Insurance claim generation for CBHI & private insurers, plus integrated payment reconciliation.",
        icon: DollarSign,
        span: "md:col-span-2",

    },
    {
        title: "Inventory Command",
        description: "Real-time stock degradation tracking with expiry alerts and automated re-ordering.",
        icon: Package,
        span: "md:col-span-1",
    },
    {
        title: "Reporting & Compliance",
        description: "Auto-generated government reports and compliance dashboards aligned with Ethiopian Federal Ministry of Health standards.",
        icon: Users,
        span: "md:col-span-1",
    }
];

// SECTION 2: MRS
const mrsFeatures = [
    {
        title: "Clinical Notes & SOAP",
        description: "Structured templates for Subjective, Objective, Assessment, and Plan notes ensuring consistency.",
        icon: FileText,
        span: "md:col-span-1",
    },
    {
        title: "Vitals Dashboard",
        description: "Visual trends for BP, Pulse, Temp, and BMI to track patient health over time.",
        icon: Activity,
        span: "md:col-span-1",
    },
    {
        title: "Lab & e-Rx",
        description: "Order tests, view results, and prescribe with drug interaction checks directly in the file.",
        icon: Pill,
        span: "md:col-span-2",
    },
    {
        title: "Telemedicine",
        description: "Integrated video modules for remote consults, expanding your reach beyond the clinic.",
        icon: Video,
        span: "md:col-span-2",
    }
];

// SECTION 3: CAMPAIGNS (PSI Ethiopia & Outreach)
const campaignFeatures = [
    {
        title: "Rapid Deployment",
        description: "Launch a fully functional digital clinic in under 24 hours. Pre-configured tablets for instant field use.",
        icon: Activity,
        span: "md:col-span-2",
    },
    {
        title: "Offline-First",
        description: "Capture data without internet. Syncs automatically when connectivity is restored.",
        icon: Store,
        span: "md:col-span-1",
    },
    {
        title: "Mass Registration",
        description: "Streamlined workflows for high-volume entry. Process 1000+ patients per day with ease.",
        icon: Users,
        span: "md:col-span-1",
    }
];

export default function SolutionsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section - Massive Typographic Impact */}
            <section className="pt-48 pb-32 px-12 md:px-24 lg:px-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[90rem]"
                >
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-amka-deep mb-8 block">Total Clinic OS</span>
                    <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tight leading-[1] mb-12 text-gray-900">
                        Everything you need <br />
                        <span className="text-gray-400">to thrive digitally.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed border-l-4 border-amka-deep pl-8">
                        AMKA Systems provides the digital infrastructure that modern medical facilities in Ethiopia need to scale, secure data, and improve care.
                    </p>
                </motion.div>
            </section>

            <div className="border-t border-gray-100"></div>

            {/* Section 1: Smart HMIS - Bento Grid */}
            <section className="py-32 px-12 md:px-24 lg:px-32 bg-white">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Sticky Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <div className="mb-8 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg hidden lg:block">
                                <Image src="/hmis-professional.png" alt="Hospital Administrator using AMKA HMIS" fill className="object-cover object-top" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">01 — Operations</span>
                            <h2 className="text-5xl font-bold mb-6 text-gray-900">Smart HMIS</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Stop managing paperwork. Start managing your business with intelligent automation for billing, inventory, and staff.
                            </p>
                            <Link href="/contact" className="inline-flex items-center text-amka-deep font-bold hover:gap-4 gap-2 transition-all">
                                Scheduling Demo <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Bento Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {hmisFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`${feature.span} group relative overflow-hidden rounded-3xl bg-[#f2f3fa] p-10 border border-gray-100 hover:shadow-xl transition-all duration-500`}
                            >
                                <div className="absolute right-[-20px] top-[-20px] opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12">
                                    <feature.icon size={180} />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="text-gray-900" size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 2: Advanced MRS - Asymmetric Layout */}
            <section className="py-32 px-12 md:px-24 lg:px-32 bg-gray-50/50">
                <div className="flex flex-col lg:flex-row-reverse gap-20">

                    {/* Sticky Sidebar (Right Side) */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <div className="mb-8 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg hidden lg:block">
                                <Image src="/mrs-doctor.png" alt="Doctor consulting directly with patient" fill className="object-cover object-top" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">02 — Interoperability</span>
                            <h2 className="text-5xl font-bold mb-6 text-gray-900">Interoperable MRS</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                A longitudinal record that travels with the patient, ensuring continuity of care across every touchpoint. Fully OpenMRS compatible.
                            </p>
                            <Link href="/contact" className="inline-flex items-center text-amka-deep font-bold hover:gap-4 gap-2 transition-all">
                                Explore Clinical Tools <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Bento Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {mrsFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`${feature.span} group relative overflow-hidden rounded-3xl bg-[#f2f3fa] p-10 border border-gray-100 hover:border-amka-deep/20 hover:shadow-xl transition-all duration-500`}
                            >
                                <div className="absolute right-[-20px] top-[-20px] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 rotate-12 text-amka-deep">
                                    <feature.icon size={180} />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-amka-deep group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-8">
                                        <feature.icon size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Campaigns - Bento Grid */}
            <section className="py-32 px-12 md:px-24 lg:px-32 bg-white">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* Sticky Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <div className="mb-8 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-lg hidden lg:block">
                                <Image src="/mrs-icon.png" alt="AMKA Medical Campaign Management" fill className="object-cover object-top" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4 block">03 — Outreach</span>
                            <h2 className="text-5xl font-bold mb-6 text-gray-900">Medical Campaigns</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Deploy rapid, offline-capable digital systems for mass screenings and treatments. Trusted by PSI Ethiopia for their Tihut clinic campaigns.
                            </p>
                            <Link href="/contact" className="inline-flex items-center text-amka-deep font-bold hover:gap-4 gap-2 transition-all">
                                Launch Campaign <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Bento Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {campaignFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`${feature.span} group relative overflow-hidden rounded-3xl bg-[#f2f3fa] p-10 border border-gray-100 hover:shadow-xl transition-all duration-500`}
                            >
                                <div className="absolute right-[-20px] top-[-20px] opacity-5 group-hover:opacity-10 transition-opacity duration-500 rotate-12">
                                    <feature.icon size={180} />
                                </div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="text-gray-900" size={24} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Analytics Strip */}
            <section className="py-24 bg-amka-deep text-white overflow-hidden relative">
                {/* Abstract BG */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                    <div className="absolute top-[-50%] left-[-10%] w-[1000px] h-[1000px] rounded-full border border-white/20"></div>
                    <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full border border-white/20"></div>
                </div>

                <div className="container mx-auto px-12 md:px-24 lg:px-32 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-4 mb-6 text-amka-cyan">
                            <BarChart3 size={32} />
                            <span className="font-bold uppercase tracking-widest">Data Driven</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-medium mb-6 leading-tight">
                            Analytics that mean <br /> business.
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl max-w-xl">
                            Comprehensive reporting dashboards to track performance, revenue, and patient outcomes in real-time.
                        </p>
                    </div>

                    <div>
                        <Link href="/contact" className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white text-amka-deep hover:scale-110 transition-transform duration-300 font-bold text-xs uppercase tracking-widest text-center shadow-lg">
                            Get <br /> Started
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
