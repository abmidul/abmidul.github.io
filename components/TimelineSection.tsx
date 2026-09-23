'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

interface TimelineItem {
  id: string;
  year: string;
  details: string;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    id: 'item-1',
    year: '2023 - 2024',
    details:
      'Initiated a self-directed deep dive into digital ecosystems, graphic editing, and market trends, spending extensive time analyzing modern UI/UX patterns, testing creative software, and building fundamental knowledge in visual mechanics and digital asset branding, with a key focus on Visual Editing, Asset Management, and Graphic Fundamentals.',
  },
  {
    id: 'item-2',
    year: '2025',
    details:
      'Shifted focus toward practical technology execution by developing logic-building skills and practicing mobile-based Python scripting, while recreating complex graphic designs line-by-line to master color theory, layout structure, and modern Dark Glassmorphic aesthetics, with a key focus on Design Precision, Scripting Logic, and Glassmorphism Aesthetics.',
  },
  {
    id: 'item-3',
    year: 'EARLY 2026',
    details:
      'Successfully completed Secondary School Certificate (SSC) studies from Mizmizi Paschim Para High School and College with a strong focus on science and logical computing, an academic phase that reinforced problem-solving skills, analytical discipline, and structured thinking, with a key focus on Science Stream, Computer Fundamentals, and Analytical Discipline.',
  },
  {
    id: 'item-4',
    year: 'NOW (2026)',
    details:
      'Currently pursuing Higher Secondary Certificate (HSC 1st Year) studies while actively expanding expertise in modern IT trends, harnessing AI-driven development, prompt engineering, and Vibe Coding workflows to transform complex design concepts into functional web applications, with a key focus on HSC Academics, Next.js Architectures, and AI Prompt Engineering.',
  },
  {
    id: 'item-5',
    year: 'NEXT PHASE',
    details:
      'Aiming to merge AI-assisted execution with high-end luxury frontend design while continuously researching emerging web frameworks, interactive 3D elements, and automated workflows to establish a presence as an autonomous tech builder and digital creator, with a key focus on High-End Luxury UI, Interactive 3D Web, and Full Automation.',
  },
];

export function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Pre-calculated offset ratios along the track for each milestone circle
  // Default values evenly distributed, updated on mount/resize via static offsetTop
  const circleOffsetsRef = useRef<number[]>([0, 0.22, 0.47, 0.72, 0.95]);

  // Track which circle the beam has currently tapped/reached (0 to 4)
  const [currentTappedIndex, setCurrentTappedIndex] = useState(0);
  const currentTappedIndexRef = useRef(0);

  // Measure milestone circle positions relative to the track ONCE and on window resize (never during scroll)
  const updateOffsets = useCallback(() => {
    if (!trackRef.current) return;
    const trackHeight = trackRef.current.offsetHeight;
    if (trackHeight <= 0) return;

    const newOffsets: number[] = [];
    for (let i = 0; i < TIMELINE_DATA.length; i++) {
      const el = rowRefs.current[i];
      if (el) {
        // Exact vertical center of each circle node relative to track top
        const circleCenter = el.offsetTop + el.offsetHeight / 2;
        newOffsets.push(Math.max(0, Math.min(1, circleCenter / trackHeight)));
      } else {
        newOffsets.push(i / (TIMELINE_DATA.length - 1));
      }
    }

    if (newOffsets.length === TIMELINE_DATA.length) {
      newOffsets[0] = 0; // First circle is always at start
      circleOffsetsRef.current = newOffsets;
    }
  }, []);

  useEffect(() => {
    updateOffsets();

    let resizeTimer: number;
    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(updateOffsets, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.clearTimeout(resizeTimer);
    };
  }, [updateOffsets]);

  // Scroll progress controlling the downwards glowing beam
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 60%', 'end 60%'],
  });

  // Ultra-responsive, zero-lag spring physics: tracks instantaneous finger movement at 60/120 FPS
  const scaleYBeam = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    mass: 0.05,
    restDelta: 0.0001,
  });

  // Event listener on scroll progress: runs with zero layout thrashing, updates state ONLY on stage transitions
  useMotionValueEvent(scaleYBeam, 'change', (progress) => {
    const offsets = circleOffsetsRef.current;
    let reached = 0;

    // Determine which circle the tip of the beam has reached
    for (let i = 0; i < offsets.length; i++) {
      // 0.015 margin ensures the tap triggers right as the beam touches the circle
      if (progress >= offsets[i] - 0.015) {
        reached = i;
      }
    }

    if (reached !== currentTappedIndexRef.current) {
      currentTappedIndexRef.current = reached;
      setCurrentTappedIndex(reached);
    }
  });

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-zinc-950 text-white py-24 sm:py-32 md:py-40 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden transform-gpu"
    >
      {/* High-performance GPU radial glow (zero blur filter penalty for mobile) */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.07)_0%,transparent_70%)] transform-gpu"
      />

      {/* 1. TITLE: Centered on the X-axis in 2 lines */}
      <div className="text-center w-full max-w-4xl mx-auto mb-20 sm:mb-28 relative z-20">
        <h2 className="font-extrabold tracking-tight uppercase leading-[1.12]">
          <span className="block text-3xl sm:text-5xl md:text-6xl text-white">
            My Career
          </span>
          <span className="block text-3xl sm:text-5xl md:text-6xl bg-gradient-to-r from-[#00f0ff] via-sky-300 to-[#00f0ff] bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(0,240,255,0.35)]">
            & Experience
          </span>
        </h2>
        <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mx-auto mt-4 sm:mt-5 rounded-full shadow-[0_0_14px_#00f0ff]" />
      </div>

      {/* 2. TIMELINE TRACK & ITEMS */}
      <div ref={trackRef} className="max-w-6xl mx-auto relative">
        {/* Static Background Guide Track */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-zinc-800/80 rounded-full pointer-events-none" />

        {/* Central Growing Glowing Sky Blue Beam Line (Hardware Accelerated Compositor Layer) */}
        <motion.div
          style={{
            scaleY: scaleYBeam,
            transformOrigin: 'top',
            boxShadow: '0 0 16px #00f0ff, 0 0 32px rgba(0, 240, 255, 0.4)',
          }}
          className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-[#00f0ff] z-10 rounded-full transform-gpu will-change-transform pointer-events-none"
        />

        {/* Milestone Rows */}
        <div className="space-y-20 sm:space-y-28 md:space-y-36">
          {TIMELINE_DATA.map((item, index) => {
            const isCurrentActive = currentTappedIndex === index;
            const isPast = currentTappedIndex > index;
            const isWaiting = currentTappedIndex < index;
            const isRevealed = index <= currentTappedIndex;

            return (
              <div
                key={item.id}
                ref={(el) => {
                  rowRefs.current[index] = el;
                }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 items-center"
              >
                {/* Central Station Circle Node on the beam */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none transform-gpu">
                  {/* Active Station State: Glowing with pulsing cyan halo */}
                  {isCurrentActive && (
                    <div className="relative flex items-center justify-center">
                      <span className="absolute -inset-2.5 rounded-full bg-[#00f0ff]/40 animate-ping opacity-75 pointer-events-none" />
                      <div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-[#00f0ff] shadow-[0_0_20px_#00f0ff,0_0_36px_rgba(0,240,255,0.7)] flex items-center justify-center scale-110 transition-transform duration-300">
                        <div className="w-2 h-2 rounded-full bg-[#00f0ff] shadow-[0_0_8px_#00f0ff]" />
                      </div>
                    </div>
                  )}

                  {/* Past Station State: Solid fill sky blue circle */}
                  {isPast && (
                    <div className="w-5 h-5 rounded-full bg-[#00f0ff] border-2 border-[#00f0ff] shadow-[0_0_12px_rgba(0,240,255,0.7)] flex items-center justify-center transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_4px_#ffffff]" />
                    </div>
                  )}

                  {/* Waiting Station State: White silver outline waiting for beam */}
                  {isWaiting && (
                    <div className="w-5 h-5 rounded-full bg-zinc-950 border-2 border-slate-300 shadow-[0_0_8px_rgba(226,232,240,0.25)] flex items-center justify-center transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-300/80 shadow-[0_0_4px_rgba(255,255,255,0.6)]" />
                    </div>
                  )}
                </div>

                {/* LEFT SIDE: Year Badge Styling */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isRevealed ? 1 : 0,
                    x: isRevealed ? 0 : -20,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`pl-16 md:pl-0 md:pr-12 flex flex-col justify-center items-start md:items-end transform-gpu will-change-[transform,opacity] ${
                    !isRevealed ? 'pointer-events-none' : ''
                  }`}
                >
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter uppercase select-none leading-none text-white text-left md:text-right">
                    {item.year}
                  </span>
                </motion.div>

                {/* RIGHT SIDE: Details Card Styling (High Performance GPU-accelerated Layer) */}
                <motion.div
                  initial={false}
                  animate={{
                    opacity: isRevealed ? 1 : 0,
                    y: isRevealed ? 0 : 20,
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`pl-16 md:pl-12 transform-gpu will-change-[transform,opacity] ${
                    !isRevealed ? 'pointer-events-none' : ''
                  }`}
                >
                  <div className="bg-zinc-900/95 border border-white/10 p-6 sm:p-7 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-white/20 transition-all duration-300">
                    <p className="text-neutral-300 text-sm sm:text-base leading-relaxed font-normal">
                      {item.details}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
