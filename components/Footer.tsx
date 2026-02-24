'use client';

import React, { useState, useEffect } from 'react';

export default function Footer() {
    const [scrolledPixels, setScrolledPixels] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Get the current scroll position in pixels
            setScrolledPixels(Math.round(window.scrollY));
        };

        // Initialize on mount
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer className="relative w-full bg-[#0a0a0a] pt-32 pb-12 px-6 md:px-24 z-20 flex flex-col justify-between min-h-[50vh]">
            <div className="flex flex-col flex-1 mt-auto justify-end mb-24 cursor-default">
                <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[140px] font-black text-white tracking-tighter uppercase leading-[0.85] mb-2 sm:mb-4">
                    THANKS FOR SCROLLING
                </h2>
                <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-[140px] font-black text-[#5ce1e6] tracking-tighter uppercase leading-[0.85]">
                    {scrolledPixels} PIXELS!
                </h2>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 w-full pt-12 border-t border-white/5">
                <div className="flex gap-8 text-xs sm:text-sm font-bold tracking-widest text-neutral-400">
                    <a href="https://www.linkedin.com/in/stiffy-navales-b10555179/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors uppercase">LinkedIn</a>
                    <a href="https://github.com/stiffynavales" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors uppercase">GitHub</a>
                    <a href="#contact" className="hover:text-white transition-colors uppercase">Email</a>
                </div>

                <div className="text-left md:text-right text-[10px] sm:text-xs font-medium tracking-[0.2em] text-neutral-500 uppercase flex flex-col gap-1">
                    <p>© {new Date().getFullYear()} Stiffy Navales</p>
                    <p>Designed & Developed</p>
                </div>
            </div>
        </footer>
    );
}
