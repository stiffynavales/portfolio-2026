'use client';

import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
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
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Looking forward to considering my application.
                        </h3>
                        <p className="text-neutral-400 mb-8 leading-relaxed">
                            You can Download my resume by clicking the button below.
                        </p>
                        <a
                            href="/Stiffy Navales_Resume.pdf"
                            download
                            onClick={onClose}
                            className="w-full bg-[#5ce1e6] text-black py-4 rounded-2xl font-bold hover:bg-cyan-200 transition-colors flex items-center justify-center gap-2 group mb-4"
                        >
                            <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download Resume
                        </a>
                        <button
                            onClick={onClose}
                            className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
