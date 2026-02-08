"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Globe, Wifi, Lock } from "lucide-react";

const badges = [
    {
        icon: ShieldCheck,
        label: "HIPAA & GDPR Compliant",
        description: "International data protection standards",
    },
    {
        icon: Globe,
        label: "OpenMRS Compatible",
        description: "Full interoperability with OpenMRS systems",
    },
    {
        icon: Wifi,
        label: "Offline-First Architecture",
        description: "Zero data loss without internet",
    },
    {
        icon: Lock,
        label: "End-to-End Encryption",
        description: "Bank-level security for patient data",
    },
];

export default function TrustBadges() {
    return (
        <section className="py-16 bg-gray-50 border-y border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
                    {badges.map((badge, i) => (
                        <motion.div
                            key={badge.label}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="flex flex-col items-center text-center gap-3"
                        >
                            <div className="w-14 h-14 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm">
                                <badge.icon size={24} className="text-amka-deep" />
                            </div>
                            <p className="text-sm font-bold text-gray-900">{badge.label}</p>
                            <p className="text-xs text-gray-500">{badge.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
