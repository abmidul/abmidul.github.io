'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Plus } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  image: string;
  themeColor: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'trip-to-earth',
    title: 'TRIP TO EARTH',
    subtitle: 'Interactive 3D Earth Experience',
    url: 'https://the-earth3d.vercel.app',
    image: '/assets/trip_to_earth.jpg',
    themeColor: '#00f0ff',
  },
  {
    id: 'blackhole',
    title: 'BLACKHOLE',
    subtitle: 'Beyond the limits of space and time.',
    url: 'https://the-blackhole.vercel.app',
    image: '/assets/blackhole.jpg',
    themeColor: '#a855f7',
  },
];

export function MyCreationsSection() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Drag tracking
  const dragStartX = useRef<number | null>(null);
  const dragDeltaX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  const total = PROJECTS.length;

  // Active project index (0 or 1)
  const activeProjectIdx = ((slideIndex % total) + total) % total;

  const nextSlide = useCallback(() => {
    setSlideIndex((prev) => prev + 1);
  }, []);

  const prevSlide = useCallback(() => {
    setSlideIndex((prev) => prev - 1);
  }, []);

  // Auto-swipe every 4 seconds (right to left)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    dragStartX.current = e.touches[0].clientX;
    dragDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    dragDeltaX.current = e.touches[0].clientX - dragStartX.current;
  };

  const handleTouchEnd = () => {
    if (Math.abs(dragDeltaX.current) > 35) {
      if (dragDeltaX.current < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    dragStartX.current = null;
    dragDeltaX.current = 0;
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsPaused(true);
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragDeltaX.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    dragDeltaX.current = e.clientX - dragStartX.current;
  };

  const handleMouseUp = () => {
    if (isDragging.current && Math.abs(dragDeltaX.current) > 35) {
      if (dragDeltaX.current < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    isDragging.current = false;
    dragStartX.current = null;
    dragDeltaX.current = 0;
    setTimeout(() => setIsPaused(false), 2000);
  };

  const handleDotClick = (targetIndex: number) => {
    if (targetIndex === activeProjectIdx) return;
    // Advance smoothly
    setSlideIndex((prev) => prev + 1);
  };

  // We render 5 virtual slots so the incoming card from the right glides in smoothly
  // while scaling up, and the exiting card glides out to the left while scaling down.
  const slots = [
    slideIndex - 2,
    slideIndex - 1,
    slideIndex,
    slideIndex + 1,
    slideIndex + 2,
  ];

  return (
    <section
      id="my-creations"
      className="relative w-full bg-black py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden border-t border-zinc-900"
    >
      {/* Subtle ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[radial-gradient(ellipse,rgba(0,240,255,0.04)_0%,transparent_70%)]"
      />

      <div className="relative max-w-6xl mx-auto z-10 flex flex-col gap-16 sm:gap-24">
        {/* ================= MAIN TITLE ================= */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
            <span className="text-white">My </span>
            <span className="text-[#00f0ff] drop-shadow-[0_0_24px_rgba(0,240,255,0.35)]">
              Creations
            </span>
          </h2>
          <div className="h-1 w-20 sm:w-28 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mx-auto mt-4 rounded-full shadow-[0_0_10px_#00f0ff]" />
        </div>

        {/* ================= SUB-SECTION 1: FEATURED CAROUSEL ================= */}
        <div className="w-full flex flex-col gap-6">
          {/* Header Layout */}
          <div className="flex items-center justify-between px-2 sm:px-4">
            <div className="flex items-center gap-3">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide">
                Featured
              </h3>
              <span className="text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-[#00f0ff] border border-cyan-500/30">
                Interactive
              </span>
            </div>

            {/* Pagination Dots (2 projects) */}
            <div className="flex items-center gap-2" aria-label="Carousel pagination">
              {PROJECTS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleDotClick(idx)}
                  className={`transition-all duration-500 h-2 rounded-full cursor-pointer ${
                    activeProjectIdx === idx
                      ? 'w-7 sm:w-8 bg-[#00f0ff] shadow-[0_0_8px_rgba(0,240,255,0.6)]'
                      : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Carousel Stage */}
          <div
            className="relative w-full h-[260px] sm:h-[370px] md:h-[450px] flex items-center justify-center overflow-hidden select-none cursor-grab active:cursor-grabbing rounded-2xl bg-zinc-950/30"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              handleMouseUp();
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          >
            {slots.map((virtualIndex) => {
              const offset = virtualIndex - slideIndex;
              const project = PROJECTS[((virtualIndex % total) + total) % total];
              const isCenter = offset === 0;

              // Animate visual properties based on distance from center
              let xPosition = '0%';
              let scaleValue = 1;
              let opacityValue = 1;
              let zIndexValue = 20;
              let pointerEvents: 'auto' | 'none' = 'auto';

              if (offset === 0) {
                // Center active card
                xPosition = '0%';
                scaleValue = 1;
                opacityValue = 1;
                zIndexValue = 30;
                pointerEvents = 'auto';
              } else if (offset === 1) {
                // Right side card (waiting to slide into center)
                xPosition = '72%';
                scaleValue = 0.82;
                opacityValue = 0.48;
                zIndexValue = 20;
                pointerEvents = 'auto';
              } else if (offset === -1) {
                // Left side card
                xPosition = '-72%';
                scaleValue = 0.82;
                opacityValue = 0.48;
                zIndexValue = 20;
                pointerEvents = 'auto';
              } else if (offset > 1) {
                // Far right off-screen (incoming)
                xPosition = '145%';
                scaleValue = 0.65;
                opacityValue = 0;
                zIndexValue = 10;
                pointerEvents = 'none';
              } else {
                // Far left off-screen (outgoing)
                xPosition = '-145%';
                scaleValue = 0.65;
                opacityValue = 0;
                zIndexValue = 10;
                pointerEvents = 'none';
              }

              return (
                <motion.div
                  key={virtualIndex}
                  initial={false}
                  animate={{
                    x: xPosition,
                    scale: scaleValue,
                    opacity: opacityValue,
                    zIndex: zIndexValue,
                  }}
                  transition={{
                    duration: 0.72,
                    ease: [0.22, 1, 0.36, 1], // Smooth silky ease-out curve
                  }}
                  onClick={() => {
                    if (Math.abs(dragDeltaX.current) > 10) return;
                    if (isCenter) {
                      window.open(project.url, '_blank', 'noopener,noreferrer');
                    } else if (offset === 1) {
                      nextSlide();
                    } else if (offset === -1) {
                      prevSlide();
                    }
                  }}
                  style={{
                    pointerEvents,
                    boxShadow: isCenter
                      ? '0 16px 36px -12px rgba(0,0,0,0.8), 0 0 12px rgba(0, 240, 255, 0.12)'
                      : '0 8px 20px rgba(0,0,0,0.5)',
                  }}
                  className={`absolute w-[75%] sm:w-[68%] md:w-[62%] max-w-2xl h-[220px] sm:h-[320px] md:h-[390px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer select-none ${
                    isCenter
                      ? 'border border-cyan-400/35 bg-zinc-900 group'
                      : 'border border-white/10 bg-zinc-900/90 hover:opacity-70'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Center Card Overlays & Details */}
                  {isCenter ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-8">
                      <div className="flex items-end justify-between gap-4">
                        <div>
                          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#00f0ff] mb-1 inline-block">
                            Featured Project
                          </span>
                          <h4 className="text-lg sm:text-2xl md:text-3xl font-black text-white tracking-wide">
                            {project.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-zinc-300 line-clamp-1 mt-0.5">
                            {project.subtitle}
                          </p>
                        </div>

                        <span className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-cyan-500/15 text-[#00f0ff] border border-cyan-500/40 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-[0_0_12px_rgba(0,240,255,0.2)] group-hover:bg-[#00f0ff] group-hover:text-black transition-all">
                          <span>Explore</span>
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Side Card subtle dark overlay */
                    <div className="absolute inset-0 bg-black/45 flex items-end p-4">
                      <span className="text-xs sm:text-sm font-semibold text-zinc-300 drop-shadow">
                        {project.title}
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= SUB-SECTION 2: ALL PROJECTS (GRID VIEW) ================= */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex items-center justify-between px-2 sm:px-4">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide">
              All Projects
            </h3>
            <span className="text-xs text-zinc-400">Total: 2 Projects</span>
          </div>

          {/* 1 Row x 3 Columns grid for BOTH Mobile and Desktop */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full">
            {/* Card 1: TRIP TO EARTH */}
            <a
              href="https://the-earth3d.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative aspect-square sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/70 transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <img
                  src="/assets/trip_to_earth.jpg"
                  alt="TRIP TO EARTH"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-[#00f0ff] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
              <h4 className="mt-2.5 sm:mt-3 text-center text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-[#00f0ff] transition-colors tracking-wide truncate px-1">
                TRIP TO EARTH
              </h4>
            </a>

            {/* Card 2: BLACKHOLE */}
            <a
              href="https://the-blackhole.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col cursor-pointer"
            >
              <div className="relative aspect-square sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/70 transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                <img
                  src="/assets/blackhole.jpg"
                  alt="BLACKHOLE"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
              <h4 className="mt-2.5 sm:mt-3 text-center text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-purple-400 transition-colors tracking-wide truncate px-1">
                BLACKHOLE
              </h4>
            </a>

            {/* Card 3: Placeholder with '+' icon */}
            <div className="group flex flex-col">
              <div className="relative aspect-square sm:aspect-[4/3] rounded-xl sm:rounded-2xl border-2 border-dashed border-zinc-800 hover:border-cyan-500/50 bg-zinc-950/60 flex flex-col items-center justify-center p-2 text-center transition-all duration-300 group-hover:bg-cyan-950/10">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-zinc-700 group-hover:border-cyan-400 flex items-center justify-center text-zinc-500 group-hover:text-[#00f0ff] transition-all duration-300 group-hover:scale-110 mb-1 sm:mb-2">
                  <Plus className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span className="text-[10px] sm:text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors hidden sm:inline">
                  Stay Tuned
                </span>
              </div>
              <h4 className="mt-2.5 sm:mt-3 text-center text-[10px] sm:text-xs md:text-sm font-medium text-zinc-500 group-hover:text-zinc-300 transition-colors px-1 italic line-clamp-2">
                More Projects Coming Soon...
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyCreationsSection;
