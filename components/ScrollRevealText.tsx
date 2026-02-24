'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface WordProps {
    children: string;
    progress: MotionValue<number>;
    range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
    const opacity = useTransform(progress, range, [0.1, 1]);
    const color = useTransform(progress, range, ['#555', '#ffffff']);

    return (
        <motion.span
            style={{ opacity, color }}
            className="relative inline-block mr-[0.25em]"
        >
            {children}
        </motion.span>
    );
}

export default function ScrollRevealText() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        // Track from when the section hits the top until it leaves the top
        offset: ['start start', 'end end'],
    });

    const text =
        'Recognized for blending creativity with empathy to craft engaging, intuitive, and visually consistent digital products.';
    const words = text.split(' ');
    const total = words.length;

    // Each word gets a proportional window across the 0-1 scroll progress.
    // Overlap a bit (by 1.5x the step) so adjacent words don't snap.
    const step = 1 / total;

    return (
        <section
            ref={containerRef}
            className="relative w-full bg-[#0a0a0a] z-20"
        >
            {/* Tall section gives enough scroll travel for the scrub */}
            <div className="h-[200vh] md:h-[250vh]">
                <div className="sticky top-0 h-screen flex justify-center items-center px-6 md:px-24">
                    <p className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-center max-w-6xl leading-[1.2] flex flex-wrap justify-center gap-y-2 md:gap-y-3">
                        {words.map((word, i) => {
                            const start = Math.max(0, i * step - step * 0.5);
                            const end = Math.min(1, (i + 1) * step + step * 0.5);
                            return (
                                <Word
                                    key={i}
                                    progress={scrollYProgress}
                                    range={[start, end]}
                                >
                                    {word}
                                </Word>
                            );
                        })}
                    </p>
                </div>
            </div>
        </section>
    );
}
