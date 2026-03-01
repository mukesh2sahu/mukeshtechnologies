"use client";

import Link from "next/link";
import { useState } from "react";

export default function PrivacyPolicy() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-primary/30 font-inter">
            {/* Navigation */}
            <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="text-2xl font-bold tracking-tighter">
                        <span className="text-gradient">Mukesh</span>Technologies
                    </Link>
                    <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/70">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link href="/#services" className="hover:text-primary transition-colors">Services</Link>
                        <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
                        <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/#contact" className="hidden sm:inline-flex px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300">
                            Get Started
                        </Link>

                        {/* Hamburger Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-white hover:text-primary transition-colors"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {isMenuOpen ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Side Menu Drawer */}
            <div
                className={`fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsMenuOpen(false)}
            >
                <div
                    className={`absolute top-0 right-0 h-full w-[280px] bg-black border-l border-white/10 p-10 transition-transform duration-300 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col gap-8 text-xl font-bold">
                        <div className="text-gradient mb-4">MukeshTech</div>
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Home</Link>
                        <Link href="/#services" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Services</Link>
                        <Link href="/#about" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">About</Link>
                        <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Contact</Link>
                    </div>
                </div>
            </div>

            {/* Header Section */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-mesh overflow-hidden">
                <div className="hero-glow top-0 left-0"></div>
                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Privacy <span className="text-gradient">Policy</span>
                    </h1>
                    <p className="text-white/60 text-lg">Last Updated: March 2026</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 md:py-32">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="glass-card p-8 md:p-12 space-y-10">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Introduction</h2>
                            <p className="text-white/70 leading-relaxed">
                                Welcome to Mukesh Technologies. We value your privacy and are committed to protecting it. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Information We Collect</h2>
                            <ul className="list-disc pl-5 text-white/70 space-y-3">
                                <li><strong>Personal Data:</strong> Name, email address, phone number, and other contact details provided by you voluntarily through our contact forms or when subscribing to our newsletter.</li>
                                <li><strong>Usage Data:</strong> Information automatically collected through cookies and tracking technologies, such as IP address, browser type, device information, and your interaction with our website.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">How We Use Your Information</h2>
                            <p className="text-white/70 leading-relaxed">
                                We use the information we collect for various purposes, including:
                            </p>
                            <ul className="list-disc pl-5 mt-4 text-white/70 space-y-3">
                                <li>Providing and maintaining our services.</li>
                                <li>Communicating with you about your inquiries or updates regarding our services.</li>
                                <li>Personalizing your experience on our website.</li>
                                <li>Improving our website and service offerings through analytics.</li>
                                <li>Complying with legal obligations.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Data Protection and Security</h2>
                            <p className="text-white/70 leading-relaxed">
                                We implement a variety of security measures to maintain the safety of your personal information. However, please note that no method of transmission over the Internet or method of electronic storage is 100% secure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Third-Party Services</h2>
                            <p className="text-white/70 leading-relaxed">
                                We may share your information with third-party service providers (such as hosting partners or analytics tools) only to the extent necessary for them to provide their services to us. These third parties are obligated not to disclose or use your information for any other purpose.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Your Rights</h2>
                            <p className="text-white/70 leading-relaxed">
                                You have the right to access, update, or delete your personal information. If you wish to exercise any of these rights, please contact us at mukeshsahurkl1@gmail.com.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Changes to This Policy</h2>
                            <p className="text-white/70 leading-relaxed">
                                We may update our Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
                            <p className="text-white/70 leading-relaxed">
                                If you have any questions about this Privacy Policy, please contact us:<br />
                                <strong>Email:</strong> mukeshsahurkl1@gmail.com<br />
                                <strong>Phone:</strong> +91 93375 59575
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 border-t border-white/5">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-center md:text-left">
                        <span className="text-gradient">Mukesh</span>Technologies
                    </Link>
                    <div className="flex gap-10 text-white/40 text-sm">
                        <Link href="/privacy" className="hover:text-white transition-colors text-white">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                    <p className="text-white/20 text-sm">
                        © 2026 Mukesh Technologies. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
