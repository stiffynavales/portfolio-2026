import React from 'react';

export default function IntroStats() {
    return (
        <section className="relative w-full bg-[#121212] py-24 px-6 md:px-24 z-20 flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-7xl mx-auto">
            {/* Music Player Mockup */}
            <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex flex-col items-center justify-center hover:border-cyan-400/20 transition-all duration-300">
                <div className="w-32 h-32 mb-6 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-600 animate-[spin_4s_linear_infinite] overflow-hidden flex items-center justify-center shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                    <div className="w-12 h-12 bg-[#121212] rounded-full"></div>
                </div>
                <h3 className="text-white font-bold text-2xl tracking-tight">Best of Me</h3>
                <p className="text-neutral-400 mb-8 font-medium">NEFFEX</p>

                {/* Fake progress bar */}
                <div className="w-full h-1.5 bg-white/10 rounded-full mb-4 overflow-hidden">
                    <div className="h-full bg-cyan-400 w-1/3 rounded-full relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(0,255,255,0.8)]"></div>
                    </div>
                </div>
                <div className="flex w-full justify-between text-sm text-neutral-500 mb-8 font-medium">
                    <span>1:24</span>
                    <span>3:45</span>
                </div>

                {/* Controls */}
                <div className="flex gap-8 items-center text-white">
                    <button className="hover:text-cyan-400 transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" /></svg>
                    </button>
                    <button className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                    </button>
                    <button className="hover:text-cyan-400 transition-colors">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" /></svg>
                    </button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex flex-col justify-center items-center text-center hover:border-cyan-400/20 transition-all duration-300 cursor-default">
                    <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">4+</span>
                    <p className="text-white font-semibold text-lg">Years of Experience</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex flex-col justify-center items-center text-center hover:border-cyan-400/20 transition-all duration-300 cursor-default">
                    <span className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">5+</span>
                    <p className="text-white font-semibold text-lg">Hackathon Wins</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 flex flex-col justify-center items-center text-center sm:col-span-2 hover:border-cyan-400/20 transition-all duration-300 cursor-default">
                    <span className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3 drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">15+</span>
                    <p className="text-white font-semibold text-xl">Projects Completed</p>
                </div>
            </div>
        </section>
    );
}
