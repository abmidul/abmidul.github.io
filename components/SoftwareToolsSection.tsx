'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Palette, Gamepad2 } from 'lucide-react';

export interface ToolItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconType: 'ai' | 'graphics' | 'game';
  tags: string[];
}

const TOOLS_DATA: ToolItem[] = [
  {
    id: 'ai',
    title: 'Artificial Intelligence',
    category: 'AI Development',
    description:
      'Building intelligent solutions using machine learning, neural networks, and modern AI technologies.',
    iconType: 'ai',
    tags: ['Machine Learning', 'Neural Networks', 'AI Models'],
  },
  {
    id: 'canva',
    title: 'Canva',
    category: 'Graphics Designing',
    description:
      'Creating engaging visual designs, graphics, and creative assets for digital and branding projects.',
    iconType: 'graphics',
    tags: ['Brand Assets', 'Visual Design', 'Digital Media'],
  },
  {
    id: 'unity',
    title: 'Unity',
    category: 'Game Development',
    description:
      'Creating immersive games and interactive experiences with real-time rendering, physics, and modern gameplay systems.',
    iconType: 'game',
    tags: ['Game Engine', 'Real-time 3D', 'Physics Systems'],
  },
];

function ToolIcon({ type }: { type: ToolItem['iconType'] }) {
  const iconClasses = 'h-7 w-7 text-[#00f0ff] drop-shadow-[0_0_12px_rgba(0,240,255,0.45)]';

  const renderIcon = () => {
    switch (type) {
      case 'ai':
        return <Brain className={iconClasses} />;
      case 'graphics':
        return <Palette className={iconClasses} />;
      case 'game':
        return <Gamepad2 className={iconClasses} />;
      default:
        return <Brain className={iconClasses} />;
    }
  };

  return (
    <div className="inline-flex items-center justify-center p-3.5 rounded-2xl border bg-cyan-500/10 border-cyan-500/30 text-[#00f0ff] mb-5 transition-transform duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
      {renderIcon()}
    </div>
  );
}

function ToolCard({ item }: { item: ToolItem; key?: React.Key }) {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
      whileTap={{ y: -4, transition: { duration: 0.15 } }}
      onClick={() => {
        setIsTapped(true);
        setTimeout(() => setIsTapped(false), 800);
      }}
      className={`group relative rounded-2xl border bg-zinc-900/60 p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 flex flex-col items-center text-center justify-between cursor-pointer select-none ${
        isTapped
          ? 'border-cyan-400/80 shadow-[0_0_30px_rgba(0,240,255,0.35)] -translate-y-2 bg-zinc-900/90'
          : 'border-zinc-800/80 hover:border-cyan-400/60 hover:bg-zinc-900/90 hover:shadow-[0_0_30px_rgba(0,240,255,0.22)]'
      }`}
    >
      {/* Subtle top corner ambient glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-cyan-500/0 blur-2xl transition-all duration-500 group-hover:bg-cyan-500/10"
      />

      <div className="flex flex-col items-center">
        {/* Icon */}
        <ToolIcon type={item.iconType} />

        {/* Title: white color */}
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1 group-hover:text-white transition-colors">
          {item.title}
        </h3>

        {/* Category: subtle cyan/zinc subtitle */}
        <p className="text-xs sm:text-sm font-semibold text-cyan-400/90 tracking-wide uppercase mb-3">
          {item.category}
        </p>

        {/* Description: Ash color */}
        <p className="text-zinc-400 text-sm leading-relaxed font-normal mb-6 max-w-xs">
          {item.description}
        </p>
      </div>

      {/* Tags / Pills matching screenshot */}
      <div className="flex flex-wrap gap-2 justify-center items-center pt-4 border-t border-zinc-800/70 w-full">
        {item.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-cyan-950/30 text-cyan-300 border border-cyan-800/30 group-hover:border-cyan-500/40 transition-colors font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export function SoftwareToolsSection() {
  return (
    <section
      id="tools"
      className="relative w-full bg-zinc-950 py-24 sm:py-32 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden border-t border-zinc-900/80"
    >
      {/* Background ambient radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.06)_0%,transparent_70%)]"
      />

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header: Title and Subtitle */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-tight">
            <span className="text-white">Software &amp; </span>
            <span className="text-[#00f0ff] drop-shadow-[0_0_24px_rgba(0,240,255,0.4)]">
              Tools
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-normal">
            Mastering the tools that bring ideas to life
          </p>
          <div className="h-1 w-20 sm:w-28 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mx-auto mt-5 rounded-full shadow-[0_0_12px_#00f0ff]" />
        </div>

        {/* 3 Cards: Desktop 1 row x 3 columns, Mobile 1 row x 1 column */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {TOOLS_DATA.map((item) => (
            <ToolCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SoftwareToolsSection;
