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
                    <div className={`w-full flex items-center justify-between rounded-full py-5 px-10 transition-all duration-300 ${isScrolled
                        ? "bg-white/95 backdrop-blur-md border-[1.5px] border-gray-200 shadow-lg"
                        : "bg-gray-900/80 backdrop-blur-md border-[1.5px] border-gray-700/50 shadow-xl"
                        }`}>

                        {/* Logo (Far Left) */}
                        <Link href="/" className="flex items-center gap-2 group z-50">
                            <div className={`relative w-36 h-11 transition-transform duration-300 group-hover:scale-105 ${isScrolled ? "brightness-0" : "brightness-0 invert"}`}>
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
                        <div className="md:hidden border-l border-white/20 pl-4 ml-auto">
                            <button
                                className={`${isScrolled ? "text-gray-900" : "text-white"}`}
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
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-white z-40 pt-28 px-6 md:hidden overflow-hidden flex flex-col"
                    >
                        <div className="flex flex-col gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-4xl font-bold text-gray-900 tracking-tight"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <hr className="border-gray-100 mt-4" />
                            <Link
                                href="/contact"
                                className="w-full py-5 rounded-full bg-amka-deep text-white text-center font-bold text-lg mt-4"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Request Demo
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
