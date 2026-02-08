"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const solutions = [
    {
        title: "Smart HMIS",
        subtitle: "Operations, Autopilot",
        description: "Stop managing paperwork. Start managing your business with our all-in-one hospital management system.",
        icon: "/hmis-icon.png",
        features: [
            "Automated Invoicing & Insurance",
            "Real-time Inventory Tracking",
            "Staff Performance Analytics",
            "Revenue Command Center",
        ],
        link: "/solutions/hmis",
        color: "from-amka-deep to-amka-light",
    },
    {
        title: "Advanced MRS",
        subtitle: "The Complete Patient Story",
        description: "A longitudinal record that travels with the patient, ensuring continuity of care and better clinical outcomes.",
        icon: "/mrs-fluid-icon.png",
        features: [
            "Unified Patient Profiles",
            "Lab & Pharmacy Integration",
            "e-Prescriptions with Interactions",
            "Telemedicine Ready",
        ],
        link: "/solutions/mrs",
        color: "from-amka-blue to-amka-cyan",
    },
];

export default function Solutions() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <p className="text-amka-blue font-semibold tracking-wide uppercase text-sm mb-3">
                        Our Solutions
                    </p>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Everything you need to <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amka-deep to-amka-blue">
                            thrive in the digital age.
                        </span>
                    </h2>
                    <p className="text-gray-600">
                        AMKA Systems provides the digital infrastructure that modern medical facilities need to scale, secure data, and improve care.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative rounded-3xl bg-gray-50 border border-gray-100 hover:border-amka-blue/20 hover:shadow-2xl hover:shadow-amka-blue/10 transition-all duration-300 overflow-hidden"
                        >
                            <div className="grid lg:grid-cols-2 h-full">
                                <div className="p-8 lg:p-10 flex flex-col justify-between order-2 lg:order-1">
                                    <div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                            {solution.title}
                                        </h3>
                                        <p className="text-amka-deep font-medium mb-4 text-sm">
                                            {solution.subtitle}
                                        </p>
                                        <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                                            {solution.description}
                                        </p>
                                        <ul className="space-y-3 mb-8">
                                            {solution.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                                                    <CheckCircle2 className="w-5 h-5 text-amka-blue shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <Link
                                        href={solution.link}
                                        className="inline-flex items-center text-amka-deep font-semibold hover:gap-2 transition-all group-hover:text-amka-royal"
                                    >
                                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                                    </Link>
                                </div>

                                {/* Image Side */}
                                <div className={`relative h-64 lg:h-auto order-1 lg:order-2 bg-gradient-to-br ${solution.color} p-8 flex items-center justify-center overflow-hidden`}>
                                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]" />
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className="relative z-10 w-48 h-48 lg:w-40 lg:h-40"
                                    >
                                        <Image
                                            src={solution.icon}
                                            alt={solution.title}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
