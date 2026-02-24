'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSparkles, HiX } from 'react-icons/hi';

interface ComingSoonPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ComingSoonPopup({ isOpen, onClose }: ComingSoonPopupProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-[#121214] border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-md w-full text-center shadow-2xl"
                    >
                        <div className="w-20 h-20 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <HiSparkles className="w-12 h-12 text-[#a5f3fc]" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4">Coming Soon</h3>
                        <p className="text-neutral-400 mb-8 leading-relaxed">
                            This feature is currently under development. Stay tuned for more updates!
                        </p>
                        <button
                            onClick={onClose}
                            className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group"
                        >
                            <HiX className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
