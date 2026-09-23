'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Microscope, Code2, Palette, Brain } from 'lucide-react';

interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const EXPERTISE_DATA: ExpertiseItem[] = [
  {
    id: 'research',
    title: 'Research',
    description:
      'Conducting in-depth technical analysis, academic literature reviews, data-driven methodologies, and innovative problem-solving.',
    icon: Microscope,
    tag: 'Analysis & Theory',
  },
  {
    id: 'programming',
    title: 'Programming',
    description:
      'Building efficient, scalable, and robust software applications using modern programming languages and clean architecture principles.',
    icon: Code2,
    tag: 'Software Architecture',
  },
  {
    id: 'graphics-design',
    title: 'Graphics Design',
    description:
      'Crafting visually compelling user interfaces, digital graphics, brand identities, and modern aesthetic UI/UX experiences.',
    icon: Palette,
    tag: 'Visual & UI/UX',
  },
  {
    id: 'artificial-intelligence',
    title: 'Artificial Intelligence',
    description:
      'Developing intelligent models, machine learning algorithms, and modern AI-driven solutions for automated workflows.',
    icon: Brain,
    tag: 'ML & Neural Networks',
  },
];

function ExpertiseCard({ item }: { item: ExpertiseItem; key?: React.Key }) {
  const [isTapped, setIsTapped] = useState(false);
  const IconComponent = item.icon;

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
      whileTap={{ y: -4, transition: { duration: 0.15 } }}
      onClick={() => {
        setIsTapped(true);
        setTimeout(() => setIsTapped(false), 700);
      }}
      className={`group relative rounded-2xl border bg-zinc-900/60 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between cursor-pointer select-none ${
        isTapped
          ? 'border-cyan-400/80 shadow-[0_10px_25px_rgba(0,210,255,0.35)] -translate-y-2 bg-zinc-900/90'
          : 'border-zinc-800/80 hover:border-cyan-400/70 hover:bg-zinc-900/90 hover:shadow-[0_10px_25px_rgba(0,210,255,0.3)]'
      }`}
    >
      {/* Top corner cyan ambient light on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -right-8 h-28 w-28 rounded-full bg-cyan-500/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-500/15"
      />

      <div className="relative z-10">
        {/* Icon & Category Tag Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="inline-flex items-center justify-center p-3 rounded-xl border bg-cyan-500/10 border-cyan-500/30 text-[#00f0ff] transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.35)]">
            <IconComponent className="h-6 w-6 text-[#00f0ff] drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]" />
          </div>
          <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400 px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/40 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-colors">
            {item.tag}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 transition-colors group-hover:text-white">
          {item.title}
        </h4>

        {/* Description */}
        <p className="text-sm sm:text-[15px] leading-relaxed text-zinc-400 group-hover:text-zinc-300 transition-colors">
          {item.description}
        </p>
      </div>

      {/* Bottom glowing accent bar on hover */}
      <div className="relative z-10 mt-6 pt-4 border-t border-zinc-800/60 flex items-center justify-between">
        <span className="text-xs text-zinc-400 group-hover:text-cyan-400 transition-colors font-medium">
          Specialized Field
        </span>
        <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[#00f0ff] group-hover:shadow-[0_0_8px_#00f0ff] transition-all" />
      </div>
    </motion.div>
  );
}

export function AreasOfExpertiseSection() {
  return (
    <section
      id="areas-of-expertise"
      className="relative w-full bg-zinc-950 py-20 sm:py-28 px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden border-t border-zinc-900"
    >
      {/* Background ambient radial lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] rounded-full bg-[radial-gradient(ellipse,rgba(0,240,255,0.04)_0%,transparent_70%)]"
      />

      <div className="relative max-w-6xl mx-auto z-10 flex flex-col gap-12 sm:gap-16">
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
            <span className="text-white">Areas of </span>
            <span className="text-[#00f0ff] drop-shadow-[0_0_24px_rgba(0,240,255,0.4)]">
              Expertise
            </span>
          </h2>

          {/* Underline glow */}
          <div className="h-1 w-20 sm:w-28 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mx-auto mt-4 rounded-full shadow-[0_0_12px_#00f0ff]" />

          {/* Subtitle */}
          <p className="mt-4 text-base sm:text-lg text-zinc-400 max-w-2xl text-center">
            Multidisciplinary skills and specialized fields driving modern innovation.
          </p>
        </div>

        {/* ================= 4-CARD RESPONSIVE GRID ================= */}
        {/* Mobile: 1 Row x 1 Col | Tablet: 2 Rows x 2 Cols | Desktop: 1 Row x 4 Cols */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {EXPERTISE_DATA.map((item) => (
            <ExpertiseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AreasOfExpertiseSection;
