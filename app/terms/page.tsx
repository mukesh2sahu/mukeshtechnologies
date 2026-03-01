"use client";

import Link from "next/link";
import { useState } from "react";

export default function TermsOfService() {
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
                        Terms of <span className="text-gradient">Service</span>
                    </h1>
                    <p className="text-white/60 text-lg">Last Updated: March 2026</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20 md:py-32">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="glass-card p-8 md:p-12 space-y-10">
                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Acceptance of Terms</h2>
                            <p className="text-white/70 leading-relaxed">
                                By accessing and using the services provided by Mukesh Technologies, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use our services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Use of Services</h2>
                            <p className="text-white/70 leading-relaxed">
                                Our services are provided for the purpose of software development, digital solutions, and creative design. You agree to use these services only for lawful purposes and in accordance with these terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Intellectual Property</h2>
                            <p className="text-white/70 leading-relaxed">
                                All content, trademarks, logos, and materials on this website are the intellectual property of Mukesh Technologies or its licensors. You may not reproduce, distribute, or modify any content without our prior written consent.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">User Responsibilities</h2>
                            <p className="text-white/70 leading-relaxed">
                                You are responsible for ensuring the accuracy of any information you provide to us through our contact forms or other communication channels. You agree not to use our services to transmit any harmful, unlawful, or offensive material.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Limitation of Liability</h2>
                            <p className="text-white/70 leading-relaxed">
                                Mukesh Technologies will not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our website or services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Service Availability</h2>
                            <p className="text-white/70 leading-relaxed">
                                While we strive to provide continuous and reliable service, we do not guarantee that our website will be available at all times. We reserve the right to modify or discontinue any part of our services without prior notice.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Governing Law</h2>
                            <p className="text-white/70 leading-relaxed">
                                These terms are governed by and construed in accordance with the laws of India. Any disputes arising from these terms will be subject to the exclusive jurisdiction of the courts in Rourkela, Odisha.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Third-Party Links</h2>
                            <p className="text-white/70 leading-relaxed">
                                Our website may contain links to third-party sites. Mukesh Technologies is not responsible for the content, privacy policies, or practices of any third-party websites.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Changes to Terms</h2>
                            <p className="text-white/70 leading-relaxed">
                                We reserve the right to modify these Terms of Service at any time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the new terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
                            <p className="text-white/70 leading-relaxed">
                                If you have any questions about these Terms of Service, please contact us:<br />
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
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors text-white">Terms of Service</Link>
                    </div>
                    <p className="text-white/20 text-sm">
                        © 2026 Mukesh Technologies. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
