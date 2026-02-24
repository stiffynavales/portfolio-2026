'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experiences = [
    {
        role: "Web Developer",
        company: "Freelancer",
        date: "2025 - PRESENT",
        description: "Design and develop custom, high-performance websites using WordPress and Elementor, transforming client visions into premium digital experiences. Specialize in creating responsive layouts with pixel-perfect precision and interactive elements."
    },
    {
        role: "Application Systems Engineer",
        company: "Fujitsu Global Delivery Center",
        date: "2022 - 2025",
        description: "Designed, developed, and maintained scalable software applications using Python and Java. Collaborated with web teams to build responsive and interactive web applications. Integrated data science models to support complex business decision-making."
    },
    {
        role: "Technical Support Engineer",
        company: "Technofreeze Inc.",
        date: "2018 - 2021",
        description: "Diagnosed and resolved technical issues related to software, hardware, and IT systems. Provided exceptional customer support and performed regular maintenance and security updates on IT infrastructure."
    },
    {
        role: "IT Support Specialist",
        company: "Agile Touch Data Outsourcing",
        date: "2017 - 2018",
        description: "Provided first-level technical support, diagnosed network issues, and maintained computer systems and peripheral devices. Collaborated with team members to address systemic issues and ensure security protocols."
    },
    {
        role: "Warehouse Checker",
        company: "Abenson",
        date: "2016 - 2017",
        description: "Inspected incoming/outgoing shipments for accuracy and quality. Maintained precise inventory records and coordinated with warehouse staff to ensure smooth operations and safety compliance."
    }
];

export default function ExperienceSection() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Translate the timeline horizontally.
    // Experiences array goes from Present down to past, but usually timeline flows left-to-right from past->present.
    // Looking at the screenshots, "Present" is at the end of the scroll, meaning the timeline goes Past -> Present
    // We will reverse the array for rendering so Past is on left, Present is on right.
    const timelineData = [...experiences].reverse();

    // The entire timeline translates leftwards as we scroll down
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={targetRef} className="relative h-[250vh] bg-[#0a0a0a] z-20">
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                <h3 className="absolute top-24 left-1/2 -translate-x-1/2 text-4xl md:text-5xl font-extrabold tracking-widest text-[#5ce1e6] z-50">
                    EXPERIENCE
                </h3>

                {/* The Timeline Container */}
                <div className="relative w-full flex items-center h-full pt-20">
                    {/* The continuous horizontal line */}
                    <div className="absolute left-0 right-0 h-[1px] bg-white/10 top-1/2 -translate-y-1/2"></div>

                    {/* The sliding content */}
                    <motion.div style={{ x }} className="flex relative w-max px-[20vw] md:px-[30vw]">
                        {timelineData.map((exp, index) => {
                            // Alternate positions: Top, Bottom, Top, Bottom
                            const isTop = index % 2 === 0;

                            return (
                                <div key={index} className="relative w-[350px] md:w-[600px] shrink-0 flex flex-col items-center">

                                    {/* The glowing dot on the line */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center">
                                        <div className="w-4 h-4 rounded-full bg-[#5ce1e6] shadow-[0_0_15px_rgba(92,225,230,0.8)] relative z-20"></div>
                                        <div className="absolute w-8 h-8 rounded-full border border-[#5ce1e6]/30 bg-[#5ce1e6]/10 z-10"></div>
                                    </div>

                                    {/* Content Card */}
                                    <div className={`absolute w-[300px] flex flex-col ${isTop ? 'bottom-[50px] mb-8' : 'top-[50px] mt-8'}
                                        items-start text-left ml-[-50px] md:ml-[-300px]
                                    `}>
                                        <h5 className="text-[10px] sm:text-xs font-bold tracking-widest text-[#5ce1e6] uppercase mb-2">
                                            {exp.date}
                                        </h5>
                                        <h4 className="text-xl sm:text-3xl font-extrabold text-white mb-2 tracking-tight">
                                            {exp.role}
                                        </h4>
                                        <p className="text-neutral-300 font-medium mb-3">
                                            {exp.company}
                                        </p>
                                        <p className="text-neutral-500 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>

                                </div>
                            );
                        })}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
