'use client';

import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { highlight: "Microsoft Certified:", text: " Azure Fundamentals" },
    { highlight: "Oracle Cloud Certified: ", text: "2025 AI Foundations Associate" },
    { highlight: "5+", text: "Years of Experience in IT Support Industry" },
    { highlight: "2+", text: "Years of Web Development Experience" }
];

export default function InfiniteMarquee() {
    // We duplicate the array multiple times to ensure the container is wide enough 
    // to fill the screen and allow for a seamless 50% translation loop.
    const repeatedStats = [...stats, ...stats, ...stats, ...stats, ...stats, ...stats];

    return (
        <section className="w-full bg-[#080808] border-y border-white/5 py-6 overflow-hidden flex relative z-20">
            {/* 
              By animating from 0% to -50%, we shift exactly half of the duplicated content.
              Because the first half and second half are identical, the loop is completely seamless.
            */}
            <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 40, // Adjust this to make it scroll faster/slower
                }}
                className="flex shrink-0 w-max items-center"
            >
                {repeatedStats.map((stat, index) => (
                    <div key={index} className="flex items-center">
                        <span className="text-xl md:text-2xl font-bold text-[#5ce1e6] mr-2 tracking-wide">
                            {stat.highlight}
                        </span>
                        <span className="text-xl md:text-2xl text-white font-medium tracking-wide">
                            {stat.text}
                        </span>
                        <span className="mx-8 md:mx-12 text-neutral-600 font-bold text-xl md:text-2xl">
                            •
                        </span>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
