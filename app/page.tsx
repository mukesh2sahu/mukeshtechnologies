"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs with modern tech stacks.",
      image: "/software.png"
    },
    {
      title: "Mobile App Development",
      description: "High-performance iOS and Android apps with seamless user experiences.",
      image: "/mobile.png"
    },
    {
      title: "UI/UX Design",
      description: "Intuitive and stunning designs that engage users and enhance brand identity.",
      image: "/uiux.png"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to boost your online presence and conversion rates.",
      image: "/marketing.png"
    },
    {
      title: "YouTube Management",
      description: "Professional channel growth, content strategy, and SEO optimization for creators.",
      image: "/youtube.png"
    },
    {
      title: "Social Media Handling",
      description: "Engaging content creation and audience management across all major platforms.",
      image: "/marketing.png" // Fallback to marketing for now
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full bg-black/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="text-gradient">Mukesh</span>Technologies
          </div>
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/70">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden sm:inline-flex px-6 py-2.5 bg-white text-black text-sm font-bold rounded-full hover:bg-primary hover:text-white transition-all duration-300">
              Get Started
            </a>

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

      {/* Side Menu Drawer (Portal simulation) */}
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
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Home</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Services</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">About</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-primary transition-colors">Contact</a>

            <div className="mt-10 pt-10 border-t border-white/5 space-y-4">
              <p className="text-xs uppercase tracking-widest text-white/30 font-semibold">Contact Info</p>
              <p className="text-sm font-normal text-white/60">+91 93375 59575</p>
              <p className="text-sm font-normal text-white/60 break-all">mukeshsahurkl1@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section (Home) */}
      <section id="home" className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden bg-gradient-mesh">
        <div className="hero-glow top-0 left-0"></div>
        <div className="hero-glow bottom-0 right-0 opacity-10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center text-center lg:text-left">
            <div className="max-w-2xl mx-auto lg:mx-0">
              <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[10px] md:text-xs font-bold text-primary tracking-widest uppercase">
                Innovating the Future
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 md:mb-8">
                Crafting <span className="text-gradient">Digital</span> Excellence
              </h1>
              <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0">
                Mukesh Technologies delivers world-class software solutions, mobile applications, and stunning designs to help your business thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center lg:justify-start">
                <a href="#services" className="px-8 py-3.5 md:py-4 bg-primary text-black font-bold rounded-xl hover:shadow-[0_0_20px_rgba(45,212,191,0.4)] transition-all flex items-center justify-center gap-2">
                  Our Services
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                </a>
                <a href="#about" className="px-8 py-3.5 md:py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center">
                  Learn More
                </a>
              </div>
            </div>
            <div className="relative group mt-10 lg:mt-0">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative glass-card overflow-hidden aspect-square sm:aspect-video lg:aspect-square max-w-[500px] mx-auto">
                <Image
                  src="/hero.png"
                  alt="Future Tech"
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-gradient">Core Services</span></h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm md:base">
              We combine deep technical expertise with creative vision to deliver solutions that make a difference.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div key={index} className="glass-card p-6 md:p-8 group flex flex-col">
                <div className="w-14 h-14 md:w-16 md:h-16 mb-6 md:mb-8 rounded-2xl overflow-hidden shrink-0">
                  <Image src={service.image} alt={service.title} width={64} height={64} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">{service.title}</h3>
                <p className="text-white/50 text-sm md:text-base leading-relaxed flex-grow">
                  {service.description}
                </p>
                <div className="mt-6 md:mt-8 flex items-center text-primary font-bold text-xs md:text-sm tracking-wide group-hover:gap-3 transition-all cursor-pointer">
                  EXPLORE MORE
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="relative glass-card p-2">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl"></div>
                <div className="relative rounded-2xl overflow-hidden aspect-video lg:aspect-[4/3]">
                  <Image src="/software.png" alt="Collaborative Innovation" fill className="object-cover" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Why Choose <span className="text-gradient">Mukesh Technologies</span>?</h2>
              <p className="text-white/60 mb-8 leading-relaxed text-sm md:text-base">
                At Mukesh Technologies, we are more than just developers. We are partners in your digital transformation. We focus on scalability, performance, and user-centric design to ensure your product stands out.
              </p>
              <div className="space-y-4 max-w-md mx-auto lg:mx-0">
                {[
                  "Agile Development Process",
                  "Expert Tech Support",
                  "Cutting Edge Technology Stack",
                  "Responsive & Dedicated Team"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M20 6 9 17l-5-5" /></svg>
                    </div>
                    <span className="font-semibold text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">Ready to Build <span className="text-gradient">Something Great</span>?</h2>
            <p className="text-white/50 mb-6 md:mb-8 text-base md:text-lg">
              Get in touch with Mukesh Technologies today and let's turn your vision into reality.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs font-semibold text-white/50 mb-10 md:mb-12 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              AVAILABLE: 10 AM — 6 PM
            </div>

            <div className="grid sm:grid-cols-2 gap-6 md:gap-8 items-center justify-center">
              <a href="tel:+919337559575" className="group p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary md:w-6 md:h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                </div>
                <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary mb-2">Call Us</h3>
                <p className="text-lg md:text-2xl font-bold">+91 93375 59575</p>
              </a>

              <a href="mailto:mukeshsahurkl1@gmail.com" className="group p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-secondary transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary md:w-6 md:h-6"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </div>
                <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-secondary mb-2">Email Us</h3>
                <p className="text-lg md:text-2xl font-bold break-all">mukeshsahurkl1@gmail.com</p>
              </a>
            </div>

            <div className="mt-12 md:mt-16">
              <a href="tel:+919337559575" className="inline-flex items-center gap-3 px-8 md:px-10 py-3.5 md:py-4 bg-primary text-black font-bold rounded-full hover:scale-105 transition-all text-sm md:text-base">
                Let's Talk
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-2xl font-bold tracking-tighter text-center md:text-left">
            <span className="text-gradient">Mukesh</span>Technologies
          </div>
          <div className="flex gap-10 text-white/40 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
          <p className="text-white/20 text-sm">
            © 2026 Mukesh Technologies. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
