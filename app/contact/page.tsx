"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, CheckCircle, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        facility: "",
        role: "Administrator",
        size: "Solo Practice",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (!res.ok) {
                setErrorMessage(data.error || "Something went wrong.");
                setStatus("error");
                return;
            }

            setStatus("success");
        } catch {
            setErrorMessage("Could not send message. Please try again.");
            setStatus("error");
        }
    };

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-48 pb-20 px-12 md:px-24 lg:px-32 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-sm font-bold uppercase tracking-[0.2em] text-amka-deep mb-8 block">Get in Touch</span>
                    <h1 className="text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-8 text-gray-900">
                        Let&apos;s build your <br />
                        <span className="text-gray-400">digital clinic.</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to transform your facility? Schedule a demo with our implementation team today.
                    </p>
                </motion.div>
            </section>

            <div className="border-t border-gray-100 mb-20"></div>

            {/* Content Grid */}
            <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 className="text-3xl font-bold mb-10 text-gray-900">We&apos;re here to help.</h2>

                        <div className="space-y-12">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-amka-deep shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Visit AMKA HQ</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Z Building, 1st Floor<br />
                                        Hayahulet Mazoriya, Addis Ababa<br />
                                        Ethiopia
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-amka-blue shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
                                    <p className="text-gray-600 leading-relaxed mb-1">
                                        <span className="font-semibold">Sales:</span>{" "}
                                        <a href="mailto:sales@amkasystems.com" className="hover:text-amka-deep transition-colors">sales@amkasystems.com</a>
                                    </p>
                                    <p className="text-gray-600 leading-relaxed">
                                        <span className="font-semibold">Support:</span>{" "}
                                        <a href="mailto:help@amkasystems.com" className="hover:text-amka-deep transition-colors">help@amkasystems.com</a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center text-amka-cyan shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        <a href="tel:+251944131837" className="hover:text-amka-deep transition-colors">+251 944 131 837</a>
                                    </p>
                                    <p className="text-sm text-gray-400 mt-1">Mon-Fri from 8am to 5pm EAT.</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Proof Mini */}
                        <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                            <p className="text-gray-900 font-medium italic mb-4">
                                &ldquo;The onboarding process was incredibly smooth. The AMKA team was on-site for 3 days to train our entire staff.&rdquo;
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-amka-deep/20 rounded-full flex items-center justify-center text-amka-deep text-sm font-bold">
                                    AJ
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-gray-900">Dr. Amina J.</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">Chief Medical Officer</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100"
                    >
                        {status === "success" ? (
                            <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px] gap-6">
                                <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center">
                                    <CheckCircle size={40} className="text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">Message sent!</h3>
                                <p className="text-gray-600 max-w-sm">
                                    Thank you for reaching out. Our team will get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => {
                                        setStatus("idle");
                                        setFormData({ firstName: "", lastName: "", email: "", facility: "", role: "Administrator", size: "Solo Practice", message: "" });
                                    }}
                                    className="text-amka-deep font-semibold hover:underline mt-4"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-bold text-gray-900 uppercase tracking-wider">First Name *</label>
                                        <input type="text" id="firstName" required value={formData.firstName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:border-amka-deep focus:bg-white focus:outline-none transition-colors" placeholder="Abebe" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Last Name</label>
                                        <input type="text" id="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:border-amka-deep focus:bg-white focus:outline-none transition-colors" placeholder="Kebede" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Work Email *</label>
                                    <input type="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:border-amka-deep focus:bg-white focus:outline-none transition-colors" placeholder="abebe@clinic.com" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="facility" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Facility Name</label>
                                    <input type="text" id="facility" value={formData.facility} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:border-amka-deep focus:bg-white focus:outline-none transition-colors" placeholder="Addis Medical Centre" />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="role" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Role</label>
                                        <select id="role" value={formData.role} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:border-amka-deep focus:bg-white focus:outline-none transition-colors text-gray-600">
                                            <option>Administrator</option>
                                            <option>Doctor / Clinician</option>
                                            <option>Pharmacist</option>
                                            <option>NGO Program Manager</option>
                                            <option>Investor</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="size" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Facility Size</label>
                                        <select id="size" value={formData.size} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:border-amka-deep focus:bg-white focus:outline-none transition-colors text-gray-600">
                                            <option>Solo Practice</option>
                                            <option>Small Clinic (1-10 staff)</option>
                                            <option>Medium Hospital (10-50 staff)</option>
                                            <option>Large Hospital (50+ staff)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold text-gray-900 uppercase tracking-wider">Message *</label>
                                    <textarea id="message" rows={4} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:border-amka-deep focus:bg-white focus:outline-none transition-colors" placeholder="Tell us about your needs..."></textarea>
                                </div>

                                {status === "error" && (
                                    <p className="text-red-500 text-sm font-medium">{errorMessage}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="w-full py-4 rounded-xl bg-amka-deep text-white font-bold text-lg hover:bg-gray-900 transition-colors shadow-lg shadow-purple-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {status === "loading" ? (
                                        <>
                                            <Loader2 size={20} className="animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        "Send Message"
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                </div>
            </section>

            <Footer />
        </main>
    );
}
