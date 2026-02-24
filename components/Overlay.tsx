'use client';

import React from 'react';
import { motion, useTransform, MotionValue } from 'framer-motion';

export default function Overlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
    // Section 1: 0% -> 15% (visible), then fades out until 25%
    const opacity1 = useTransform(scrollProgress, [0, 0.15, 0.25], [1, 1, 0]);
    const y1 = useTransform(scrollProgress, [0, 0.25], [0, -100]);

    // Section 2: Fades in starting 20%, fully visible 30%-40%, fades out 50%
    const opacity2 = useTransform(scrollProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollProgress, [0.2, 0.5], [50, -50]);

    // Section 3: Fades in starting 50%, fully visible 60%-70%, fades out 80%
    const opacity3 = useTransform(scrollProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
    const y3 = useTransform(scrollProgress, [0.5, 0.8], [50, -50]);

    return (
        <div className="absolute top-0 left-0 h-[500vh] w-full pointer-events-none">

            {/* Sticky container for the text sections */}
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">

                {/* Section 1: Center */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-x-0 flex flex-col items-center justify-center text-center"
                >
                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl">
                        Stiffy Navales.
                    </h1>
                    <p className="text-2xl md:text-4xl font-medium tracking-tight text-gray-400 mt-2 md:mt-4 drop-shadow-lg">
                        Creative Developer.
                    </p>
                </motion.div>

                {/* Section 2: Left */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute left-8 md:left-24 max-w-3xl"
                >
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white drop-shadow-xl">
                        Building AI-driven <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">digital experiences.</span>
                    </h2>
                </motion.div>

                {/* Section 3: Right */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute right-8 md:right-24 max-w-3xl text-right"
                >
                    <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white drop-shadow-xl">
                        At the intersection of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-l from-neutral-300 to-neutral-600">design and engineering.</span>
                    </h2>
                </motion.div>

            </div>
        </div>
    );
}
