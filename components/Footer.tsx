"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <Link href="/" className="relative w-32 h-10">
                            <Image
                                src="/logo.svg"
                                alt="AMKA Systems"
                                fill
                                className="object-contain object-left"
                            />
                        </Link>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            AMKA Systems provides the digital backbone for modern healthcare facilities in Ethiopia and across Africa. Digitize, simplify, and scale with confidence.
                        </p>
                        <div className="flex gap-4 mt-2">
                            {[
                                { Icon: Linkedin, href: "https://linkedin.com/company/amkasystems" },
                                { Icon: Facebook, href: "https://facebook.com/amkasystems" },
                                { Icon: Twitter, href: "https://x.com/amkasystems" },
                                { Icon: Instagram, href: "https://instagram.com/amkasystems" },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-10 w-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-amka-deep hover:text-white transition-all"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="lg:col-span-2 lg:col-start-6">
                        <h4 className="font-bold text-gray-900 mb-6">Solutions</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li><Link href="/solutions" className="hover:text-amka-deep transition-colors">Smart HMIS</Link></li>
                            <li><Link href="/solutions" className="hover:text-amka-deep transition-colors">Interoperable MRS</Link></li>
                            <li><Link href="/solutions" className="hover:text-amka-deep transition-colors">Medical Campaigns</Link></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="lg:col-span-2">
                        <h4 className="font-bold text-gray-900 mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li><Link href="/about" className="hover:text-amka-deep transition-colors">About Us</Link></li>
                            <li><Link href="/case-studies" className="hover:text-amka-deep transition-colors">Case Studies</Link></li>
                            <li><Link href="/resources" className="hover:text-amka-deep transition-colors">Resources</Link></li>
                            <li><Link href="/contact" className="hover:text-amka-deep transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-3">
                        <h4 className="font-bold text-gray-900 mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-600">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-amka-deep shrink-0" size={18} />
                                <span>Z Building, 1st Floor<br />Hayahulet Mazoriya, Addis Ababa, Ethiopia</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-amka-deep shrink-0" size={18} />
                                <a href="tel:+251944131837" className="hover:text-amka-deep transition-colors">+251 944 131 837</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-amka-deep shrink-0" size={18} />
                                <a href="mailto:hello@amkasystems.com" className="hover:text-amka-deep transition-colors">info@amkasystems.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                    <p>&copy; {currentYear} AMKA Systems. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
