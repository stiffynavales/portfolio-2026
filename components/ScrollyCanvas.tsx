'use client';

import React, { useRef, useEffect, useState } from 'react';
import { useMotionValueEvent, MotionValue } from 'framer-motion';

const frameFiles = [
    "frame_000_delay-0.067s.png", "frame_001_delay-0.066s.png", "frame_002_delay-0.067s.png", "frame_003_delay-0.067s.png",
    "frame_004_delay-0.066s.png", "frame_005_delay-0.067s.png", "frame_006_delay-0.067s.png", "frame_007_delay-0.066s.png",
    "frame_008_delay-0.067s.png", "frame_009_delay-0.067s.png", "frame_010_delay-0.066s.png", "frame_011_delay-0.067s.png",
    "frame_012_delay-0.067s.png", "frame_013_delay-0.066s.png", "frame_014_delay-0.067s.png", "frame_015_delay-0.067s.png",
    "frame_016_delay-0.066s.png", "frame_017_delay-0.067s.png", "frame_018_delay-0.067s.png", "frame_019_delay-0.066s.png",
    "frame_020_delay-0.067s.png", "frame_021_delay-0.067s.png", "frame_022_delay-0.066s.png", "frame_023_delay-0.067s.png",
    "frame_024_delay-0.067s.png", "frame_025_delay-0.066s.png", "frame_026_delay-0.067s.png", "frame_027_delay-0.067s.png",
    "frame_028_delay-0.066s.png", "frame_029_delay-0.067s.png", "frame_030_delay-0.067s.png", "frame_031_delay-0.066s.png",
    "frame_032_delay-0.067s.png", "frame_033_delay-0.067s.png", "frame_034_delay-0.066s.png", "frame_035_delay-0.067s.png",
    "frame_036_delay-0.067s.png", "frame_037_delay-0.066s.png", "frame_038_delay-0.067s.png", "frame_039_delay-0.067s.png",
    "frame_040_delay-0.066s.png", "frame_041_delay-0.067s.png", "frame_042_delay-0.067s.png", "frame_043_delay-0.066s.png",
    "frame_044_delay-0.067s.png", "frame_045_delay-0.067s.png", "frame_046_delay-0.066s.png", "frame_047_delay-0.067s.png",
    "frame_048_delay-0.067s.png", "frame_049_delay-0.066s.png", "frame_050_delay-0.067s.png", "frame_051_delay-0.067s.png",
    "frame_052_delay-0.066s.png", "frame_053_delay-0.067s.png", "frame_054_delay-0.067s.png", "frame_055_delay-0.066s.png",
    "frame_056_delay-0.067s.png", "frame_057_delay-0.067s.png", "frame_058_delay-0.066s.png", "frame_059_delay-0.067s.png",
    "frame_060_delay-0.067s.png", "frame_061_delay-0.066s.png", "frame_062_delay-0.067s.png", "frame_063_delay-0.067s.png",
    "frame_064_delay-0.066s.png", "frame_065_delay-0.067s.png", "frame_066_delay-0.067s.png", "frame_067_delay-0.066s.png",
    "frame_068_delay-0.067s.png", "frame_069_delay-0.067s.png", "frame_070_delay-0.066s.png", "frame_071_delay-0.067s.png",
    "frame_072_delay-0.067s.png", "frame_073_delay-0.066s.png", "frame_074_delay-0.067s.png", "frame_075_delay-0.067s.png",
    "frame_076_delay-0.066s.png", "frame_077_delay-0.067s.png", "frame_078_delay-0.067s.png", "frame_079_delay-0.066s.png",
    "frame_080_delay-0.067s.png", "frame_081_delay-0.067s.png", "frame_082_delay-0.066s.png", "frame_083_delay-0.067s.png",
    "frame_084_delay-0.067s.png", "frame_085_delay-0.066s.png", "frame_086_delay-0.067s.png", "frame_087_delay-0.067s.png",
    "frame_088_delay-0.066s.png", "frame_089_delay-0.067s.png", "frame_090_delay-0.067s.png", "frame_091_delay-0.066s.png",
    "frame_092_delay-0.067s.png", "frame_093_delay-0.067s.png", "frame_094_delay-0.066s.png", "frame_095_delay-0.067s.png",
    "frame_096_delay-0.067s.png", "frame_097_delay-0.066s.png", "frame_098_delay-0.067s.png", "frame_099_delay-0.067s.png",
    "frame_100_delay-0.066s.png", "frame_101_delay-0.067s.png", "frame_102_delay-0.067s.png", "frame_103_delay-0.066s.png",
    "frame_104_delay-0.067s.png", "frame_105_delay-0.067s.png", "frame_106_delay-0.066s.png", "frame_107_delay-0.067s.png",
    "frame_108_delay-0.067s.png", "frame_109_delay-0.066s.png", "frame_110_delay-0.067s.png", "frame_111_delay-0.067s.png",
    "frame_112_delay-0.066s.png", "frame_113_delay-0.067s.png", "frame_114_delay-0.067s.png", "frame_115_delay-0.066s.png",
    "frame_116_delay-0.067s.png", "frame_117_delay-0.067s.png", "frame_118_delay-0.066s.png", "frame_119_delay-0.067s.png"
];

export default function ScrollyCanvas({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    const FRAME_COUNT = frameFiles.length;

    useEffect(() => {
        // Preload images
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            img.src = `/sequence/${frameFiles[i]}`;

            img.onload = () => {
                loadedCount++;
                // We can start rendering as soon as the first frame loads if we wanted,
                // but wait for all to prevent flashing, or just render frame 0 once it's ready.
                if (i === 0) {
                    renderFrame(0, [img]);
                }
                if (loadedCount === FRAME_COUNT) {
                    setImages(loadedImages);
                }
            };

            loadedImages[i] = img;
        }

        // Fallback to update state if images are cached and load immediately
        setImages(loadedImages);
    }, []);

    const renderFrame = (index: number, imgArray: HTMLImageElement[]) => {
        if (!canvasRef.current || imgArray.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = imgArray[index];
        if (!img || !img.complete) return;

        // Object-fit: cover logic
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);

        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
            img,
            0, 0, img.width, img.height,
            centerShift_x, centerShift_y, img.width * ratio, img.height * ratio
        );
    };

    useMotionValueEvent(scrollProgress, 'change', (latest) => {
        if (images.length === 0) return;

        // Map scroll progress (0 to 1) to frame index (0 to FRAME_COUNT - 1)
        // The sequence is mapped strictly to the scrollable height.
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(latest * FRAME_COUNT)
        );

        requestAnimationFrame(() => renderFrame(frameIndex, images));
    });

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                // Pixel ratio for sharp rendering
                const pixelRatio = window.devicePixelRatio || 1;
                canvasRef.current.width = window.innerWidth * pixelRatio;
                canvasRef.current.height = window.innerHeight * pixelRatio;

                const currentProgress = scrollProgress.get();
                const frameIndex = Math.min(
                    FRAME_COUNT - 1,
                    Math.floor(currentProgress * FRAME_COUNT)
                );
                renderFrame(frameIndex, images);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [images, scrollProgress]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full object-cover"
            style={{
                width: '100%',
                height: '100%',
            }}
        />
    );
}
