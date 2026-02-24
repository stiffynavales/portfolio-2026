'use client';

import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import ScrollyCanvas from './ScrollyCanvas';
import Overlay from './Overlay';

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative h-[500vh] w-full z-10">
            <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none">
                <ScrollyCanvas scrollProgress={scrollYProgress} />
            </div>
            <Overlay scrollProgress={scrollYProgress} />
        </div>
    );
}
