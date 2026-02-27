'use client';

import React from 'react';
import { motion } from 'framer-motion';

const items = [
    "Web Development",
    "UI/UX",
    "Product Design",
    "AI Agents"
];

export default function InfiniteMarquee() {
    // Duplicate the array multiple times to ensure the container is wide enough 
    // to fill the screen and allow for a seamless 50% translation loop.
    const repeatedItems = [...items, ...items, ...items, ...items, ...items, ...items];

    return (
        <section className="w-full bg-[#050505] border-y border-white/5 py-10 md:py-16 overflow-hidden flex relative z-20">
            {/* 
              By animating from 0% to -50%, we shift exactly half of the duplicated content.
              Because the first half and second half are identical, the loop is completely seamless.
            */}
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 35, // Adjust this to make it scroll faster/slower
                }}
                className="flex shrink-0 w-max items-center uppercase"
            >
                {repeatedItems.map((item, index) => (
                    <div key={index} className="flex items-center group">
                        <span
                            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-transparent px-4 md:px-8 transition-all duration-300 hover:text-white cursor-default"
                            style={{ WebkitTextStroke: '2px rgba(255,255,255,0.7)' }}
                        >
                            {item}
                        </span>
                        <span className="text-4xl md:text-6xl text-cyan-200 mx-4 md:mx-8">
                            ✺
                        </span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
