"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What is AMKA Systems?",
        answer: "AMKA is a digital health platform built for Ethiopian healthcare facilities. We provide a Smart HMIS for clinic operations (billing, inventory, reporting) and an Interoperable MRS for patient records that is fully OpenMRS compatible.",
    },
    {
        question: "How long does implementation take?",
        answer: "A typical clinic can be fully onboarded in 1-2 weeks, including data migration, staff training, and configuration. For medical campaigns, we can deploy a field-ready system in under 24 hours.",
    },
    {
        question: "Does it work offline?",
        answer: "Yes. AMKA is built offline-first. All patient data is captured and stored locally on the device, then syncs automatically when connectivity is restored. Zero data loss, even in areas with unreliable internet.",
    },
    {
        question: "Is patient data secure?",
        answer: "Absolutely. We use end-to-end encryption, role-based access control, and comply with international data protection standards. Your patient records are stored securely and are only accessible to authorized staff.",
    },
    {
        question: "Can AMKA integrate with existing systems?",
        answer: "Yes. Our MRS is fully OpenMRS compatible, meaning it can exchange data with other OpenMRS-based systems. We also support CBHI insurance claim generation and TeleBirr payment reconciliation.",
    },
    {
        question: "Who uses AMKA?",
        answer: "We serve clinics, hospitals, and NGOs across Ethiopia. Our largest deployment is with PSI Ethiopia's Tihut Clinics network in Addis Ababa, where we provide the MRS and run medical campaign infrastructure.",
    },
    {
        question: "What kind of support do you provide?",
        answer: "We provide on-site training during onboarding, ongoing remote support, and dedicated account management. Our team is based in Addis Ababa and can be on-site when needed.",
    },
    {
        question: "How much does AMKA cost?",
        answer: "Pricing depends on your facility size and which modules you need. Contact us for a tailored quote — we offer flexible plans for solo practices up to large hospital networks.",
    },
];

function FAQItem({ faq, isOpen, onToggle }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className="border-b border-gray-200 last:border-b-0">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <span className="text-lg font-semibold text-gray-900 group-hover:text-amka-deep transition-colors pr-8">
                    {faq.question}
                </span>
                <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-amka-deep/10 flex items-center justify-center shrink-0 transition-colors">
                    {isOpen ? (
                        <Minus size={18} className="text-amka-deep" />
                    ) : (
                        <Plus size={18} className="text-gray-500 group-hover:text-amka-deep transition-colors" />
                    )}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-600 leading-relaxed pb-6 pr-16">
                            {faq.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 max-w-6xl mx-auto">
                    {/* Left Column */}
                    <div className="lg:col-span-4">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="lg:sticky lg:top-32"
                        >
                            <span className="text-sm font-bold uppercase tracking-[0.2em] text-amka-deep mb-4 block">FAQ</span>
                            <h2 className="text-3xl md:text-7xl font-sans font-medium tracking-tight text-gray-900 mb-6">
                                Common questions.
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                Everything you need to know about AMKA. Can&apos;t find what you&apos;re looking for? Reach out to our team.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Column - Questions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-8"
                    >
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                faq={faq}
                                isOpen={openIndex === index}
                                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
