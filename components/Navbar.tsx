'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
    onResumeClick: () => void;
}

const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
];

export default function Navbar({ onResumeClick }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="fixed top-8 left-0 right-0 z-[80] flex justify-center pointer-events-none">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                // Replicating outer target structure: flex, p-1.5, bg-black/20, backdrop-blur-lg
                className={`flex items-center gap-1 md:gap-2 p-1.5 rounded-full border transition-all duration-300 shadow-2xl w-[90%] md:w-auto overflow-x-auto no-scrollbar pointer-events-auto ${
                    scrolled 
                        ? 'border-white/10 bg-black/40 backdrop-blur-xl' 
                        : 'border-white/10 bg-black/20 backdrop-blur-lg'
                }`}
            >
            <div className="hidden md:flex items-center gap-1 shrink-0">
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => scrollToSection(e, link.href)}
                        className="relative group flex items-center gap-2 px-5 py-2 rounded-full hover:bg-white/10 transition-all duration-300 text-sm font-medium text-gray-400 hover:text-gray-100 overflow-hidden shrink-0"
                    >
                        {link.name}
                    </a>
                ))}
            </div>

            {/* Mobile Links Container - simplified view */}
            <div className="flex md:hidden items-center justify-between w-full px-2">
                <span className="text-white font-bold tracking-widest text-sm">STIFFY</span>
                <button
                    onClick={onResumeClick}
                    className="relative group flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold text-white transition-all duration-500 overflow-hidden bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 shrink-0"
                >
                    Resume
                </button>
            </div>

            {/* Desktop Resume Button */}
            <button
                onClick={onResumeClick}
                className="hidden md:flex relative group items-center gap-2 px-6 py-2 ml-1 rounded-full text-sm font-semibold text-white transition-all duration-500 overflow-hidden bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/40 shrink-0"
            >
                Resume
            </button>
        </motion.nav>
        </div>
    );
}
