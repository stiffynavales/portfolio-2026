'use client';

import Preloader from '@/components/Preloader';
import HeroSection from '@/components/HeroSection';
import InfiniteMarquee from '@/components/InfiniteMarquee';
import ScrollRevealText from '@/components/ScrollRevealText';
import BentoGrid from '@/components/BentoGrid';
import Projects from '@/components/Projects';
import TechArsenal from '@/components/TechArsenal';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            <Preloader />
            <main className="relative min-h-screen w-full bg-[#121212]">
                {/* Hero Section: 500vh container for the scroll-linked sequence animation */}
                <HeroSection />

                {/* Post-scroll content section mimicking reference layout */}
                <InfiniteMarquee />
                <ScrollRevealText />
                <BentoGrid />
                <Projects />
                <TechArsenal />
                <ExperienceSection />
                <Footer />
            </main>
        </>
    );
}
