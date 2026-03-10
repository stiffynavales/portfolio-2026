'use client';

import React from 'react';
import { Project } from '@/lib/projectsData';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <div
            className="group relative flex flex-col w-full rounded-[2rem] overflow-hidden border border-white/10 bg-[#121214] transition-all duration-500 ease-in-out hover:border-cyan-500/60 hover:shadow-[0_0_40px_-5px_rgba(34,211,238,0.35)]"
        >
            {/* Glow radial layer — fades in on hover */}
            <div className="pointer-events-none absolute inset-0 z-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.12) 0%, transparent 70%)' }}
            />

            {/* Card Header/Image Area */}
            <div className="relative h-48 md:h-64 overflow-hidden bg-black w-full">
                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out" />
                {/* Noise overlay */}
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
                <h5 className="text-[10px] font-bold tracking-widest text-cyan-400 uppercase mb-3 flex items-center justify-between">
                    <span>{project.category}</span>
                    {project.category === 'Wordpress Websites' && (
                        <div className="group/tooltip relative" onClick={(e) => e.stopPropagation()}>
                            <svg className="w-4 h-4 text-orange-400/80 hover:text-orange-400 transition-colors cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div className="absolute bottom-full right-0 mb-2 w-48 md:w-56 p-3 bg-neutral-900 border border-white/10 rounded-xl text-xs text-neutral-300 opacity-0 group-hover/tooltip:opacity-100 pointer-events-none transition-opacity z-50 shadow-xl font-normal normal-case tracking-normal">
                                <span className="font-bold text-orange-400 block mb-1">Agency Work</span>
                                These projects belong to the agency I work for. I am including them here for reference purposes.
                            </div>
                        </div>
                    )}
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
                </div>
            </div>
        </div>
    );
}
