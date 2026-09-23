'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Creation } from '@/types/creation';
import { INITIAL_CREATIONS } from '@/data/creations';

interface CreationsSectionProps {
  onSelectCreation?: (id: string) => void;
}

export function CreationsSection({ onSelectCreation }: CreationsSectionProps) {
  // `creations` data array maintained for dynamic state logic and future expansion.
  // Defaults to empty array (0 items) to fulfill the Current Placeholder State.
  const [creations] = useState<Creation[]>(INITIAL_CREATIONS);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const isPopulated = creations.length > 0;

  const handlePrev = () => {
    if (creations.length === 0) return;
    setCurrentIndex((prev) => (prev === 0 ? creations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (creations.length === 0) return;
    setCurrentIndex((prev) => (prev === creations.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (id: string) => {
    if (onSelectCreation) {
      onSelectCreation(id);
    } else {
      window.history.pushState({}, '', `/creations/${id}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  };

  return (
    <section
      id="creations-section"
      className="relative w-full py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-16 bg-zinc-950 text-white overflow-hidden"
    >
      {/* Dynamic Ambient Glows (Sky Blue & Royal Gold) */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] pointer-events-none rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.06)_0%,transparent_70%)] transform-gpu"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-[450px] h-[450px] pointer-events-none rounded-full bg-[radial-gradient(circle,rgba(234,179,8,0.05)_0%,transparent_70%)] transform-gpu"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center w-full max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight uppercase leading-[1.12]">
            <span className="block text-white">My Creations</span>
          </h2>

          {/* Subtle Glowing Sky Blue & Royal Gold Underline */}
          <div className="h-1 w-24 sm:w-36 bg-gradient-to-r from-transparent via-[#00f0ff] to-amber-400 mx-auto mt-4 sm:mt-5 rounded-full shadow-[0_0_16px_rgba(0,240,255,0.4)]" />

          {/* Subtitle */}
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto mt-4 sm:mt-6 leading-relaxed">
            Curated architectural projects, design prototypes, and exploratory web applications.
          </p>
        </div>

        {/* DYNAMIC CONTENT SWITCHER */}
        {!isPopulated ? (
          /* =========================================================================
             1. WHEN creations.length === 0 (Current Placeholder State)
             - Render centered Dark Glassmorphism card
               (bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center)
             - Prominent glowing '+' icon inside sleek rounded box
             - Text below: "Future Creations & Projects Will Appear Here"
             - Clicking the '+' icon does nothing (static placeholder behavior)
             ========================================================================= */
          <motion.div
            key="empty-placeholder"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-slate-950/40 backdrop-blur-xl border border-white/10 rounded-3xl p-10 sm:p-14 md:p-16 text-center shadow-2xl relative overflow-hidden group">
              {/* Subtle ambient interior beam */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent"
              />

              {/* Prominent Glowing '+' icon inside a sleek rounded box */}
              <div
                tabIndex={0}
                aria-label="Add creation placeholder (static)"
                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 rounded-2xl bg-white/[0.04] border border-white/15 flex items-center justify-center text-[#00f0ff] shadow-[0_0_28px_rgba(0,240,255,0.18)] cursor-default select-none relative group-hover:border-[#00f0ff]/40 group-hover:shadow-[0_0_36px_rgba(0,240,255,0.28)] transition-all duration-500"
                onClick={(e) => {
                  // Static placeholder behavior: does nothing on click
                  e.preventDefault();
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#00f0ff]/10 to-amber-500/10 pointer-events-none" />
                <Plus size={40} className="stroke-[2.2] drop-shadow-[0_0_12px_rgba(0,240,255,0.6)]" />
              </div>

              {/* Text Below */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-tight">
                Future Creations &amp; Projects Will Appear Here
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                New production releases, open-source modules, and creative laboratory experiments are actively being developed.
              </p>
            </div>
          </motion.div>
        ) : (
          /* =========================================================================
             2. WHEN creations.length > 0 (Future Populated State)
             - Horizontal carousel slider with Left (<) and Right (>) arrow controls
             - Bottom pagination dots
             - Card Elements:
               * Hero Preview: Project hero section screenshot
               * Title: Project name
               * Subtitle / Link: Clickable link pointing to dynamic detail route /creations/[id]
             ========================================================================= */
          <motion.div
            key="populated-carousel"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="w-full relative"
          >
            {/* Carousel Slider Controls Header */}
            <div className="flex items-center justify-between mb-6 px-1">
              <div className="text-xs sm:text-sm text-zinc-400 font-mono">
                Project <span className="text-yellow-400 font-bold">{currentIndex + 1}</span> of{' '}
                <span>{creations.length}</span>
              </div>

              {/* Left (<) and Right (>) Arrow Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  aria-label="Previous Creation"
                  className="p-3 rounded-xl bg-slate-950/60 backdrop-blur-xl border border-white/10 hover:border-[#00f0ff]/50 text-zinc-300 hover:text-white transition-all shadow-md active:scale-95 group"
                >
                  <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={handleNext}
                  aria-label="Next Creation"
                  className="p-3 rounded-xl bg-slate-950/60 backdrop-blur-xl border border-white/10 hover:border-[#00f0ff]/50 text-zinc-300 hover:text-white transition-all shadow-md active:scale-95 group"
                >
                  <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Active Carousel Card */}
            <div className="relative overflow-hidden rounded-3xl bg-slate-950/40 backdrop-blur-xl border border-white/10 p-4 sm:p-6 md:p-8 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={creations[currentIndex].id}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center"
                >
                  {/* Card Element 1: Hero Preview Image Slot */}
                  <div
                    onClick={() => handleCardClick(creations[currentIndex].id)}
                    className="lg:col-span-7 relative group cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 aspect-video shadow-lg"
                  >
                    <img
                      src={creations[currentIndex].heroImage}
                      alt={creations[currentIndex].title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Hover Glow Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-zinc-950/70 backdrop-blur-md border border-white/15 text-xs text-yellow-300 font-medium">
                      {creations[currentIndex].category}
                    </div>

                    <div className="absolute bottom-3 right-3 px-3.5 py-1.5 rounded-xl bg-zinc-950/80 backdrop-blur-md border border-white/15 text-xs text-white flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
                      <span>Preview Project</span>
                      <ArrowRight size={13} className="text-[#00f0ff]" />
                    </div>
                  </div>

                  {/* Card Element 2 & 3: Title, Subtitle, & Clickable Link pointing to /creations/[id] */}
                  <div className="lg:col-span-5 flex flex-col justify-between py-2">
                    <div>
                      <div className="text-xs uppercase tracking-wider text-yellow-400 font-medium mb-2">
                        Featured Showcase
                      </div>
                      <h3
                        onClick={() => handleCardClick(creations[currentIndex].id)}
                        className="text-2xl sm:text-3xl font-bold text-white mb-3 hover:text-amber-300 cursor-pointer transition-colors leading-tight"
                      >
                        {creations[currentIndex].title}
                      </h3>
                      <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                        {creations[currentIndex].subtitle}
                      </p>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {creations[currentIndex].technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Clickable Link pointing to /creations/[id] */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => handleCardClick(creations[currentIndex].id)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#00f0ff] hover:text-sky-300 transition-colors group"
                      >
                        <span>View Project Details</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </button>

                      <span className="text-xs text-zinc-500 font-mono">
                        /creations/{creations[currentIndex].id}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {creations.map((creation, idx) => (
                <button
                  key={creation.id}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx
                      ? 'w-8 bg-gradient-to-r from-[#00f0ff] to-amber-400 shadow-[0_0_12px_#00f0ff]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
