"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Smartphone, Globe, BarChart3, WifiOff } from "lucide-react";

export default function Features() {
    return (
        <section className="py-24 bg-gray-900 text-white relative">
            <div className="container mx-auto px-6">

                {/* Section Header */}
                <div className="mb-20 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                        Built for the unique challenges of <br />
                        <span className="text-amka-cyan">Ethiopian Healthcare.</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We didn&apos;t just build a standard HMIS. We built a resilience engine.
                        AMKA Systems thrives where other systems fail—managing low connectivity,
                        complex billing, and high patient volumes with ease.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1: Offline First (Big) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <WifiOff size={120} />
                        </div>
                        <div className="relative z-10">
                            <div className="h-12 w-12 rounded-full bg-amka-deep flex items-center justify-center mb-6">
                                <WifiOff className="text-white" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Offline-First Architecture</h3>
                            <p className="text-gray-400 max-w-sm">
                                Internet down? No problem. AMKA continues to run locally and syncs automatically when connection is restored. Never stop your operations.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 2: Mobile Money (Tall) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-amka-deep border border-amka-deep rounded-3xl p-8 md:p-12 relative overflow-hidden text-white"
                    >
                        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-amka-light/20 rounded-full blur-2xl"></div>
                        <div className="relative z-10">
                            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                                <Smartphone className="text-white" size={24} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Mobile Money Integrated</h3>
                            <p className="text-amka-light">
                                Automated reconciliation for TeleBirr and mobile payments. Zero leaks.
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 3: Analytics */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12"
                    >
                        <div className="h-12 w-12 rounded-full bg-amka-blue flex items-center justify-center mb-6">
                            <BarChart3 className="text-white" size={24} />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Real-time Analytics</h3>
                        <p className="text-gray-400">
                            Live dashboards for revenue, footfall, and inventory levels.
                        </p>
                    </motion.div>

                    {/* Card 4: Security (Wide) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="md:col-span-2 bg-gradient-to-r from-gray-800 to-gray-900 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1">
                                <div className="h-12 w-12 rounded-full bg-amka-cyan flex items-center justify-center mb-6">
                                    <Shield className="text-gray-900" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Bank-Level Security</h3>
                                <p className="text-gray-400">
                                    HIPAA & GDPR compliant. Role-based access control ensuring patient data is seen only by those who need to see it.
                                </p>
                            </div>
                            <div className="w-full md:w-1/3 bg-gray-950 rounded-xl p-4 border border-gray-800 shadow-2xl">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                    <span className="text-xs text-gray-500">System Status: Secure</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-2 w-3/4 bg-gray-800 rounded"></div>
                                    <div className="h-2 w-1/2 bg-gray-800 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
