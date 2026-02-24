'use client';

import React, { useState, useRef } from 'react';
type ReactPlayerProps = React.ComponentProps<typeof import('react-player')['default']>;
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
import { SiWordpress, SiElementor, SiHtml5, SiCss3, SiJavascript, SiFigma } from 'react-icons/si';
import { HiSparkles, HiCheckCircle, HiX } from 'react-icons/hi';

const ReactPlayer = dynamic<ReactPlayerProps>(
    () => import('react-player').then((mod) => mod.default),
    { ssr: false }
);

const techStack = [
    { name: "Wordpress", icon: <SiWordpress className="w-6 h-6 text-[#21759b]" /> },
    { name: "Elementor", icon: <SiElementor className="w-6 h-6 text-[#92003B]" /> },
    { name: "HTML5", icon: <SiHtml5 className="w-6 h-6 text-[#E34F26]" /> },
    { name: "CSS3", icon: <SiCss3 className="w-6 h-6 text-[#1572B6]" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" /> },
    { name: "Figma", icon: <SiFigma className="w-6 h-6 text-[#F24E1E]" /> },
    { name: "Antigravity", icon: <HiSparkles className="w-6 h-6 text-[#5ce1e6]" /> },
];

export default function BentoGrid() {
    const [isMuted, setIsMuted] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleMute = () => {
        setIsMuted(!isMuted);
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.message || !formData.email) return;

        setIsSending(true);

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, // Use environment variable
                    subject: "Let's Collaborate!",
                    from_name: formData.name || "Portfolio Visitor",
                    email: formData.email,
                    message: formData.message,
                    to: "stiffy.navales1994@gmail.com"
                })
            });

            const result = await response.json();
            if (result.success) {
                setFormStatus('success');
                setShowSuccess(true);
                setFormData({ name: '', email: '', message: '' });
            } else {
                setFormStatus('error');
            }
        } catch (error) {
            setFormStatus('error');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="relative w-full bg-[#0a0a0a] py-24 px-6 md:px-24 z-20">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-4 md:auto-rows-[160px]">

                {/* 1. Scrolling Images replacing the single static image */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="md:col-span-4 row-span-2 rounded-[2rem] overflow-hidden relative border border-white/5 bg-white/5 min-h-[300px] md:min-h-0 group"
                >
                    {/* Infinite Scrolling Main Image container */}
                    <div className="absolute inset-0 flex items-center object-cover opacity-80 overflow-hidden w-full h-full">
                        <motion.div
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{
                                repeat: Infinity,
                                ease: "linear",
                                duration: 30, // Adjust speed of image scroll here
                            }}
                            className="flex shrink-0 w-max h-full"
                        >
                            {/* Map through your different images here. Duplicate the array so the loop connects seamlessly */}
                            {[
                                "/lp-harmonystream.png", // Image 1
                                "/lp-whey.png", // Image 2 (Placeholder)
                                "/lp-stiffy.png", // Image 3 (Placeholder)
                                "/lp-harmonystream.png", // Image 1 (Duplicated to sew the end sequence)
                                "/lp-whey.png", // Image 2 (Duplicated)
                                "/lp-stiffy.png", // Image 3 (Duplicated)
                            ].map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    className="h-full w-[600px] object-cover shrink-0"
                                    alt={`Scrolling background ${index}`}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                {/* 2. Abstract Blue Image (Narrow and Tall) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:col-span-2 row-span-2 rounded-[2rem] overflow-hidden relative border border-white/5 bg-white/5 min-h-[300px] md:min-h-0"
                >
                    <img src="/stiffy.jpg" className="w-full h-full object-cover opacity-80" alt="Placeholder 2" />
                </motion.div>

                {/* 3. Contact Form (Wide and Tall) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="md:col-span-6 row-span-2 rounded-[2rem] p-8 border border-white/5 bg-[#121214] flex flex-col relative min-h-[300px] md:min-h-0"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Hi, I'm Stiffy</h2>
                    <p className="text-neutral-400 mb-6 leading-relaxed text-lg">Ready to build something intelligent together? Drop your info—let's collaborate!</p>

                    <form onSubmit={handleSubmit} className="space-y-4 mt-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="bg-[#1a1a1c] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400/50 transition-colors"
                            />
                            <input
                                type="email"
                                required
                                placeholder="Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="bg-[#1a1a1c] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400/50 transition-colors"
                            />
                        </div>
                        <div className="flex gap-2 w-full">
                            <input
                                type="text"
                                required
                                placeholder="Type your message..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                className="flex-1 bg-[#1a1a1c] border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-cyan-400/50 transition-colors"
                            />
                            <button
                                type="submit"
                                disabled={isSending}
                                className="bg-[#a5f3fc] text-black px-6 rounded-2xl font-bold hover:bg-cyan-200 transition-all active:scale-95 disabled:opacity-50 disabled:scale-100 flex items-center justify-center shrink-0 min-w-[64px]"
                            >
                                {isSending ? (
                                    <div className="w-6 h-6 border-4 border-black/20 border-t-black rounded-full animate-spin"></div>
                                ) : (
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                )}
                            </button>
                        </div>
                        {formStatus === 'error' && (
                            <p className="text-red-400 text-sm ml-2">Something went wrong. Please try again.</p>
                        )}
                    </form>
                </motion.div>

                {/* 4. Tech Stack Marquee (Wide, Single Row) */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="md:col-span-6 row-span-1 rounded-[2rem] border border-white/5 bg-[#121214] flex items-center overflow-hidden relative p-8 min-h-[160px] md:min-h-0"
                >
                    <div className="flex gap-4 w-full overflow-hidden mask-image-gradient">
                        <div className="flex gap-6 items-center shrink-0 animate-[marquee_20s_linear_infinite]">
                            {/* Tech Stack Icons */}
                            {techStack.map(tech => (
                                <div key={tech.name} className="px-6 h-14 bg-[#1a1a1c] rounded-full flex items-center justify-center gap-3 border border-white/5 text-neutral-300 text-sm font-bold shadow-inner whitespace-nowrap">
                                    {tech.icon}
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                            {/* Duplicate for infinite loop effect */}
                            {techStack.map(tech => (
                                <div key={tech.name + "1"} className="px-6 h-14 bg-[#1a1a1c] rounded-full flex items-center justify-center gap-3 border border-white/5 text-neutral-300 text-sm font-bold shadow-inner whitespace-nowrap">
                                    {tech.icon}
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* 5. Person Image (Narrow, Tall) - Stays under Contact Form left side */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="md:col-span-2 row-span-2 rounded-[2rem] overflow-hidden relative border border-white/5 bg-white/5 min-h-[300px] md:min-h-0"
                >
                    <img src="meai.jpg" className="w-full h-full object-cover grayscale opacity-70" alt="Person Placeholder" />
                </motion.div>

                {/* 6. City Video/Image (Medium wide, Tall) - Stays under Contact Form right side */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="md:col-span-4 row-span-2 rounded-[2rem] overflow-hidden relative border border-white/5 bg-white/5 min-h-[300px] md:min-h-0"
                >
                    <video
                        ref={videoRef}
                        src="Whisk_ujmzqgmkbdzxctox0ymkljytimn1qtljbzmy0ym.mp4"
                        className="w-full h-full object-cover opacity-80"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    {/* Mute button */}
                    <div
                        onClick={toggleMute}
                        className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white border border-white/10 hover:bg-black/70 transition-colors cursor-pointer"
                    >
                        {isMuted ? (
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z m10.657-6.071a3 3 0 010 4.243m2.828-7.071a7 7 0 010 9.9" />
                            </svg>
                        ) : (
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            </svg>
                        )}
                    </div>
                </motion.div>

                {/* 7. Music Player (Wide, Single Row) - Fills remaining space left under Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="md:col-span-6 row-span-1 rounded-[2rem] border border-white/5 bg-[#252321] flex items-center justify-between p-6 gap-6 relative min-h-[160px] md:min-h-0 overflow-hidden"
                >
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-2xl overflow-hidden shrink-0 shadow-lg border border-white/10 relative">
                            <img src="/ab67616d00001e022d9e8e3e016cf68d53536c64.jpg" className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-110' : 'scale-100'}`} alt="Album art" />
                            {isPlaying && (
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
                                </div>
                            )}
                        </div>
                        <div className="flex-col pb-1">
                            <h3 className="text-white font-bold text-2xl tracking-tight">Super Far</h3>
                            <p className="text-neutral-400 text-base font-medium">LANY</p>
                        </div>
                    </div>

                    <div className="flex items-center">
                        {/* Hidden Player */}
                        <div className="hidden">
                            <ReactPlayer
                                src="https://www.youtube.com/watch?v=O78Lpo4ctSE&list=RDO78Lpo4ctSE&start_radio=1"
                                playing={isPlaying}
                                volume={0.5}
                                width={0}
                                height={0}
                            />
                        </div>

                        {/* Animated Equalizer */}
                        <div className="hidden sm:flex items-center gap-1.5 opacity-30 mr-8 h-8">
                            {[1.5, 3, 2, 4.5, 1.5, 3.5, 2, 5, 3, 1.5].map((h, i) => (
                                <motion.div
                                    key={i}
                                    animate={isPlaying ? {
                                        height: [`${h * 0.2}rem`, `${h * 0.5}rem`, `${h * 0.2}rem`]
                                    } : {
                                        height: `${h * 0.2}rem`
                                    }}
                                    transition={{
                                        duration: 0.5 + (i * 0.1),
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="w-1 bg-white rounded-full"
                                ></motion.div>
                            ))}
                        </div>

                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white shrink-0 hover:bg-white/10 transition-colors cursor-pointer bg-white/5 active:scale-95 transition-transform"
                        >
                            {isPlaying ? (
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" /></svg>
                            ) : (
                                <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 ml-1"><path d="M8 5v14l11-7z" /></svg>
                            )}
                        </button>
                    </div>
                </motion.div>

            </div>

            {/* Success Popup */}
            <AnimatePresence>
                {showSuccess && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setShowSuccess(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-[#121214] border border-white/10 p-8 md:p-12 rounded-[2.5rem] max-w-md w-full text-center shadow-2xl"
                        >
                            <div className="w-20 h-20 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <HiCheckCircle className="w-12 h-12 text-[#a5f3fc]" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                            <p className="text-neutral-400 mb-8 leading-relaxed">
                                Thanks for reaching out. I've received your message and will get back to you as soon as possible.
                            </p>
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-2 group"
                            >
                                <HiX className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                                Close
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Global style inject for the marquee animation and mask */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .mask-image-gradient {
                    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                    -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                }
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}} />
        </section>
    );
}
