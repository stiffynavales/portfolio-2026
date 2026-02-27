'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/lib/projectsData';

export default function Projects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);
    const [endX, setEndX] = useState(0);

    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Measure the inner container and calculate how far it needs to scroll
    useEffect(() => {
        const measure = () => {
            if (innerRef.current) {
                const totalWidth = innerRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;
                setEndX(-(totalWidth - viewportWidth));
            }
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], [0, endX]);

    return (
        <section ref={targetRef} className="relative h-[180vh] bg-[#0a0a0a] z-20">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                <div className="w-full max-w-[1400px] mx-auto px-6 md:px-24">
                    <h3 className="text-3xl md:text-5xl font-extrabold tracking-widest text-white mb-8 md:mb-16 text-center">
                        WEB DESIGN <span className="text-cyan-400">WORKS</span>
                    </h3>
                </div>

                <motion.div ref={innerRef} style={{ x }} className="flex gap-6 md:gap-8 px-6 md:px-24 w-max">
                    {projects.slice(0, 4).map((project, index) => (
                        <Link
                            key={index}
                            href={`/projects#${project.slug}`}
                            className="group relative flex flex-col w-[300px] sm:w-[350px] md:w-[450px] shrink-0 rounded-[2rem] overflow-hidden border border-white/10 bg-[#121214] transition-all duration-500 ease-in-out hover:border-cyan-500/60 hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.35)] no-underline"
                        >
                            {/* Glow radial layer — fades in on hover */}
                            <div className="pointer-events-none absolute inset-0 z-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.12) 0%, transparent 70%)' }}
                            />

                            {/* Card Header/Image Area */}
                            <div className="relative h-48 md:h-64 overflow-hidden bg-black w-full">
                                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" />
                                {/* Noise overlay simulation */}
                                <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

                                {/* Year Badge */}
                                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white text-xs font-medium">
                                    {project.year}
                                </div>

                                {/* Title Overlay inside Image */}
                                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                    <h4 className="text-2xl md:text-4xl font-bold tracking-tight text-white/90 drop-shadow-lg">{project.title}</h4>
                                </div>
                            </div>

                            {/* Card Content Area */}
                            <div className="p-6 md:p-8 flex flex-col flex-1 border-t border-white/5 relative z-10 bg-[#121214]">
                                <h5 className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase mb-3">
                                    {project.category}
                                </h5>
                                <h4 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">
                                    {project.title}
                                </h4>
                                <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-1">
                                    {project.description}
                                </p>

                                {/* Tags & Arrow */}
                                <div className="flex items-end justify-between mt-auto pt-6 border-t border-white/10 relative">
                                    <div className="flex gap-2 flex-wrap flex-1 pr-4">
                                        {project.tags.slice(0, 4).map((tag, i) => (
                                            <span key={i} className="px-3 py-1 text-[10px] font-medium text-neutral-400 bg-white/5 rounded-md border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-300/70 transition-colors duration-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div
                                        className="w-10 h-10 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors group/btn"
                                    >
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5m0 0v10m0-10H9" /></svg>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                    {/* View All Projects Ending Card */}
                    <Link
                        href="/projects"
                        className="w-[200px] md:w-[300px] shrink-0 flex flex-col items-center justify-center px-12 group cursor-pointer no-underline"
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-white/5 transition-colors group-hover:scale-105 duration-300">
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </div>
                        <h4 className="text-xl md:text-2xl font-bold text-white text-center tracking-tight">View All<br />Projects</h4>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
