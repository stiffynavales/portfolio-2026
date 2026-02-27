'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projects, Project } from '@/lib/projectsData';
import Footer from '@/components/Footer';

export default function ProjectsPage() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Handle hash-based scroll on mount
    useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash) {
            const slug = window.location.hash.replace('#', '');
            const project = projects.find(p => p.slug === slug);
            if (project) {
                setSelectedProject(project);
                // Scroll to the project card
                setTimeout(() => {
                    const el = document.getElementById(slug);
                    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 300);
            }
        }
    }, []);

    return (
        <main className="relative min-h-screen w-full bg-[#0a0a0a]">
            {/* Navigation Bar */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5 bg-black/60 backdrop-blur-xl border-b border-white/5">
                <Link
                    href="/"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group no-underline"
                >
                    <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-colors">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </div>
                    <span className="text-sm font-medium tracking-wide uppercase">Back to Home</span>
                </Link>
                <span className="text-xs text-white/30 font-mono tracking-widest hidden md:block">
                    {projects.length} PROJECTS
                </span>
            </nav>

            {/* Hero Header */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-20 px-6 md:px-12">
                <div className="max-w-[1400px] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    >
                        <h5 className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-cyan-400 uppercase mb-4">
                            Portfolio
                        </h5>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6">
                            Web Design<br />
                            <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.5)' }}>Works</span>
                        </h1>
                        <p className="text-neutral-400 text-base md:text-lg max-w-xl leading-relaxed">
                            A curated collection of web design and development projects — from landing pages to full-stack applications, each crafted with precision and purpose.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-6 md:px-12 pb-20">
                <div className="max-w-[1400px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.slug}
                                id={project.slug}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
                            >
                                <div
                                    onClick={() => setSelectedProject(selectedProject?.slug === project.slug ? null : project)}
                                    className="cursor-pointer"
                                >
                                    <div className={`group relative flex flex-col w-full rounded-[2rem] overflow-hidden border transition-all duration-500 ease-in-out ${selectedProject?.slug === project.slug ? 'border-cyan-500/60 shadow-[0_0_40px_-5px_rgba(34,211,238,0.35)]' : 'border-white/10 hover:border-cyan-500/60 hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.35)]'} bg-[#121214]`}>
                                        {/* Glow radial layer */}
                                        <div className="pointer-events-none absolute inset-0 z-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.12) 0%, transparent 70%)' }}
                                        />

                                        {/* Card Header/Image Area */}
                                        <div className="relative h-48 md:h-72 overflow-hidden bg-black w-full">
                                            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" />
                                            <div className="absolute inset-0 mix-blend-overlay opacity-30" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

                                            {/* Year Badge */}
                                            <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-white text-xs font-medium">
                                                {project.year}
                                            </div>

                                            {/* Title Overlay */}
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
                                            <p className="text-neutral-400 text-xs md:text-sm leading-relaxed mb-6 flex-1">
                                                {project.description}
                                            </p>

                                            {/* Tags */}
                                            <div className="flex items-end justify-between mt-auto pt-6 border-t border-white/10 relative">
                                                <div className="flex gap-2 flex-wrap flex-1 pr-4">
                                                    {project.tags.slice(0, 4).map((tag, i) => (
                                                        <span key={i} className="px-3 py-1 text-[10px] font-medium text-neutral-400 bg-white/5 rounded-md border border-white/5 group-hover:border-cyan-500/20 group-hover:text-cyan-300/70 transition-colors duration-300">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className={`w-10 h-10 shrink-0 rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${selectedProject?.slug === project.slug ? 'bg-cyan-500/20 rotate-45' : 'hover:bg-white/10'}`}>
                                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Expandable Detail Section */}
                                <AnimatePresence>
                                    {selectedProject?.slug === project.slug && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-4 p-6 md:p-10 rounded-[2rem] border border-white/10 bg-[#121214]/80 backdrop-blur-sm">
                                                {/* Role badge */}
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                                                    <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase">{project.role}</span>
                                                </div>

                                                {/* Full details */}
                                                <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-8">
                                                    {project.details}
                                                </p>

                                                {/* Tools used */}
                                                <div className="mb-6">
                                                    <h6 className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-4">Tools & Technologies</h6>
                                                    <div className="flex gap-2 flex-wrap">
                                                        {project.tools.map((tool, i) => (
                                                            <span key={i} className="px-4 py-2 text-xs font-medium text-cyan-300/80 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                                                                {tool}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Visit Site link */}
                                                {project.link && (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl text-cyan-300 text-sm font-bold tracking-wide hover:bg-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 no-underline group/visit"
                                                    >
                                                        {project.linkText || 'Visit Live Site'}
                                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-4 h-4 group-hover/visit:translate-x-0.5 group-hover/visit:-translate-y-0.5 transition-transform">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 19L19 5m0 0v10m0-10H9" />
                                                        </svg>
                                                    </a>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
