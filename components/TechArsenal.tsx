'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const columnsData = [
    {
        top: { name: "Wordpress", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/wordpress/wordpress-plain.svg", line: "bg-blue-500" },
        bottom: { name: "Elementor", logo: "/elementor.svg", line: "bg-blue-400" },
    },
    {
        top: { name: "Figma", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg", line: "bg-orange-500" },
        bottom: { name: "Google Stitch", logo: "/google-labs.png", line: "bg-blue-500" },
    },
    {
        top: { name: "Google Studio", logo: "/google-labs.png", line: "bg-blue-300" },
        bottom: { name: "Google Antigravity", logo: "/Google-Antigravity.png", line: "bg-blue-500" },
    },
    {
        top: { name: "Github", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg", line: "bg-red-500" },
        bottom: { name: "Vercel", logo: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png", line: "bg-white" },
    },
    {
        top: { name: "Google Whisk", logo: "/google-labs.png", line: "bg-blue-600" },
        bottom: { name: "Gemini 3", logo: "/Gemini-logo.svg", line: "bg-green-700" },
    },
    {
        top: { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", line: "bg-cyan-300" },
        bottom: { name: "Django", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg", line: "bg-white" }
    }
];

export default function TechArsenal() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={sectionRef} className="relative h-[300vh] bg-[#0a0a0a] z-20">
            <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">

                <h3 className="text-4xl md:text-6xl font-extrabold tracking-widest text-[#5ce1e6] mb-24 z-50 uppercase drop-shadow-[0_0_15px_rgba(92,225,230,0.4)]">
                    Tech Arsenal
                </h3>

                {/* Grid Container */}
                <div className="relative w-full h-[500px] flex items-center justify-center scale-[0.6] sm:scale-75 md:scale-100">
                    {columnsData.map((col, i) => {
                        // 6 columns: indices 0 to 5.
                        // Center is between 2 and 3.
                        // Position factor: -2.5, -1.5, -0.5, +0.5, +1.5, +2.5
                        const factor = i - 2.5;
                        const stepX = 160; // cardWidth (140) + gap (20)
                        const finalX = factor * stepX;

                        // Stack offsets at the start
                        const initialY = i * 15;

                        // Fanning out coordinates
                        const finalTopY = -110;
                        const finalBottomY = 110;

                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const x = useTransform(scrollYProgress, [0.1, 0.7], [0, finalX]);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const topY = useTransform(scrollYProgress, [0.1, 0.7], [initialY, finalTopY]);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const bottomY = useTransform(scrollYProgress, [0.1, 0.7], [initialY, finalBottomY]);

                        // Manage proper stacking order when overlapping
                        const zBase = 60 - i * 2;

                        return (
                            <React.Fragment key={i}>
                                {/* Top Card (Foreground) */}
                                <motion.div
                                    style={{ x, y: topY, zIndex: zBase }}
                                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)", boxShadow: "0 0 20px rgba(92,225,230,0.2)" }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-1/2 top-1/2 ml-[-70px] mt-[-95px] w-[140px] h-[190px] bg-[#121214] border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                                    <img
                                        src={col.top.logo}
                                        alt={col.top.name}
                                        className={`w-14 h-14 object-contain mb-4 filter drop-shadow-md rounded-lg ${col.top.name === "Github" ? "invert brightness-200" : ""}`}
                                    />
                                    <p className="text-white font-bold text-sm z-10">{col.top.name}</p>
                                    <div className={`w-8 h-[3px] mt-3 rounded-full ${col.top.line} z-10 shadow-[0_0_10px_currentColor] opacity-80`} />
                                </motion.div>

                                {/* Bottom Card (Background piece that slides down) */}
                                <motion.div
                                    style={{ x, y: bottomY, zIndex: zBase - 1 }}
                                    whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)", boxShadow: "0 0 20px rgba(92,225,230,0.2)" }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute left-1/2 top-1/2 ml-[-70px] mt-[-95px] w-[140px] h-[190px] bg-[#121214] border border-white/10 rounded-2xl flex flex-col items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden cursor-pointer"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                                    <img
                                        src={col.bottom.logo}
                                        alt={col.bottom.name}
                                        className={`w-14 h-14 object-contain mb-4 filter drop-shadow-md rounded-lg ${col.bottom.name === "Github" ? "invert brightness-200" : ""}`}
                                    />
                                    <p className="text-white font-bold text-sm z-10">{col.bottom.name}</p>
                                    <div className={`w-8 h-[3px] mt-3 rounded-full ${col.bottom.line} z-10 shadow-[0_0_10px_currentColor] opacity-80`} />
                                </motion.div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
