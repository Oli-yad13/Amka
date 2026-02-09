"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Solutions", href: "/solutions" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "About Us", href: "/about" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 left-0 right-0 z-50 py-6"
            >
                <div className="container mx-auto px-6 flex items-center justify-center">

                    {/* Unified Floating Pill Container */}
                    <div className={`w-full flex items-center justify-between rounded-full py-3 px-6 md:py-5 md:px-10 transition-all duration-300 ${isScrolled && !isMobileMenuOpen
                        ? "bg-white/95 backdrop-blur-md border-[1.5px] border-gray-200 shadow-lg"
                        : "bg-gray-900/80 backdrop-blur-md border-[1.5px] border-gray-700/50 shadow-xl"
                        }`}>

                        {/* Logo (Far Left) */}
                        <Link href="/" className="flex items-center gap-2 group z-50">
                            <div className={`relative w-24 h-8 md:w-36 md:h-11 transition-transform duration-300 group-hover:scale-105 ${isScrolled && !isMobileMenuOpen ? "brightness-0" : "brightness-0 invert"}`}>
                                <Image
                                    src="/logo.svg"
                                    alt="AMKA Systems"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* Right Side Group (Links + CTA) */}
                        <div className="hidden md:flex items-center gap-12">
                            {/* Desktop Nav Links */}
                            <div className="flex items-center gap-10">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`text-lg font-semibold transition-colors tracking-wide ${isScrolled
                                            ? "text-gray-700 hover:text-amka-deep" 
                                            : "text-gray-100 hover:text-white drop-shadow-sm"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Separator */}
                            <div className={`h-8 w-[1.5px] ${isScrolled ? 'bg-gray-300' : 'bg-white/40'}`}></div>

                            {/* CTA */}
                            <div className="flex items-center">
                                <Link
                                    href="/contact"
                                    className={`px-9 py-3.5 rounded-full text-sm font-extrabold uppercase tracking-widest transition-all duration-300 hover:scale-105 ${isScrolled
                                        ? "bg-gray-900 text-white hover:bg-amka-deep shadow-md"
                                        : "bg-white text-gray-950 hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                        }`}
                                >
                                    Request Demo
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Button - Inside Pill */}
                        <div className={`md:hidden border-l pl-4 ml-auto ${isScrolled && !isMobileMenuOpen ? "border-gray-300" : "border-white/20"}`}>
                            <button
                                className={`${isScrolled && !isMobileMenuOpen ? "text-gray-900" : "text-white"}`}
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>

                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-gray-950 z-40 md:hidden overflow-hidden flex flex-col"
                    >
                        {/* Nav Links — vertically centered */}
                        <div className="flex-1 flex flex-col justify-center px-10 gap-2">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="block text-5xl font-bold text-white tracking-tight py-4 border-b border-white/10 hover:text-amka-cyan transition-colors"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        {/* Bottom Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.35 }}
                            className="px-10 pb-12"
                        >
                            <Link
                                href="/contact"
                                className="block w-full py-5 rounded-full bg-amka-deep text-white text-center font-bold text-lg hover:bg-amka-light transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Request Demo
                            </Link>
                            <p className="text-center text-sm text-gray-500 mt-6">
                                info@amkasystems.com
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
