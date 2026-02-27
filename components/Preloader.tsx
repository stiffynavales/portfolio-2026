'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [count, setCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    // Counter animation: 0 → 100
    useEffect(() => {
        const duration = 2800; // total count time in ms
        const steps = 100;
        const interval = duration / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= 100) {
                clearInterval(timer);
                // small pause before exit
                setTimeout(() => {
                    setIsExiting(true);
                    // Remove preloader from DOM after exit animation
                    setTimeout(() => setIsComplete(true), 1200);
                }, 400);
            }
        }, interval);

        return () => clearInterval(timer);
    }, []);

    if (isComplete) return null;

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black overflow-hidden"
                    animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                >
                    {/* Film grain overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.04] pointer-events-none z-50"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                            backgroundSize: '128px 128px',
                        }}
                    />

                    {/* Subtle edge glow */}
                    <div className="absolute inset-0 pointer-events-none"
                        style={{
                            background: 'radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.8) 100%)',
                        }}
                    />

                    {/* Centered Glowing Portal */}
                    <motion.div
                        className="relative flex flex-col items-center justify-center"
                        animate={isExiting ? { scale: 0.5, y: 100, opacity: 0 } : { scale: 1, y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    >
                        {/* Outer glow ring */}
                        <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] flex items-center justify-center">
                            {/* The glowing portal frame */}
                            <motion.div
                                className="absolute inset-0 rounded-3xl border border-white/10 overflow-hidden"
                                style={{
                                    background: 'linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(0,0,0,0.4) 100%)',
                                    backdropFilter: 'blur(2px)',
                                }}
                            >
                                {/* Inner glowing orbs */}
                                <motion.div
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                                    animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                >
                                    {/* Main cyan glow */}
                                    <div
                                        className="w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full"
                                        style={{
                                            background: 'radial-gradient(circle, rgba(92,225,230,0.5) 0%, rgba(92,225,230,0.15) 40%, transparent 70%)',
                                            filter: 'blur(30px)',
                                        }}
                                    />
                                </motion.div>

                                {/* Two glowing "eyes" */}
                                <motion.div
                                    className="absolute top-[35%] left-[32%] w-6 h-10 md:w-8 md:h-12 rounded-full"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(92,225,230,0.9) 0%, rgba(92,225,230,0.3) 60%, transparent 100%)',
                                        filter: 'blur(8px)',
                                    }}
                                    animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.05, 0.95] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                                />
                                <motion.div
                                    className="absolute top-[35%] right-[32%] w-6 h-10 md:w-8 md:h-12 rounded-full"
                                    style={{
                                        background: 'radial-gradient(circle, rgba(92,225,230,0.9) 0%, rgba(92,225,230,0.3) 60%, transparent 100%)',
                                        filter: 'blur(8px)',
                                    }}
                                    animate={{ opacity: [0.6, 1, 0.6], scale: [0.95, 1.05, 0.95] }}
                                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
                                />

                                {/* Bottom warm glow */}
                                <motion.div
                                    className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[160px] h-[100px] md:w-[200px] md:h-[120px] rounded-full"
                                    style={{
                                        background: 'radial-gradient(ellipse, rgba(92,225,230,0.35) 0%, transparent 70%)',
                                        filter: 'blur(20px)',
                                    }}
                                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                />
                            </motion.div>

                            {/* Portal labels */}
                            <div className="absolute -bottom-2 left-0 right-0 flex items-center justify-between px-4">
                                <span className="text-[10px] md:text-xs text-white/40 font-mono tracking-widest">
                                    // STIFFY //
                                </span>
                                <span className="text-[10px] md:text-xs text-white/40 font-mono tracking-widest">
                                    // PORTFOLIO //
                                </span>
                            </div>
                        </div>

                        {/* Loading text and counter */}
                        <motion.div
                            className="mt-16 flex flex-col items-center gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            {/* Animated counter */}
                            <div className="flex items-baseline gap-1">
                                <motion.span
                                    className="text-6xl md:text-8xl font-bold text-white/90 font-mono tabular-nums tracking-tighter"
                                    style={{ fontVariantNumeric: 'tabular-nums' }}
                                >
                                    {count.toString().padStart(3, '0')}
                                </motion.span>
                                <span className="text-2xl md:text-3xl text-[#5ce1e6]/70 font-mono">%</span>
                            </div>

                            {/* Progress bar */}
                            <div className="w-[200px] md:w-[280px] h-[2px] bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full rounded-full"
                                    style={{
                                        background: 'linear-gradient(90deg, #5ce1e6, #22d3ee)',
                                        width: `${count}%`,
                                    }}
                                />
                            </div>

                            {/* Loading label */}
                            <span className="text-[10px] md:text-xs text-white/30 font-mono tracking-[0.3em] uppercase">
                                Loading Portfolio...
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
