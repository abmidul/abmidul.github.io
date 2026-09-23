'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gamepad2, Bot, Code2, Eye, Brain, Palette } from 'lucide-react';

interface SkillCardItem {
  id: string;
  title: string;
  description: string;
  iconType: 'game' | 'ai' | 'programming' | 'vision' | 'brain' | 'graphics';
  iconColor: 'cyan' | 'ash';
  level: 'Expert' | 'Advanced' | 'Intermediate';
  progress: number;
}

const PRIMARY_SKILLS: SkillCardItem[] = [
  {
    id: 'game-dev',
    title: 'Game Development',
    description:
      'Building immersive, interactive experiences with modern game engines and cutting-edge design principles.',
    iconType: 'game',
    iconColor: 'cyan',
    level: 'Expert',
    progress: 90,
  },
  {
    id: 'ai-research',
    title: 'Ai Research',
    description:
      'Exploring advanced AI technologies through in-depth research, experimentation, and innovative applications.',
    iconType: 'ai',
    iconColor: 'cyan',
    level: 'Advanced',
    progress: 85,
  },
  {
    id: 'programming',
    title: 'Programming',
    description:
      'Creating innovative software solutions using diverse programming languages and modern development frameworks.',
    iconType: 'programming',
    iconColor: 'cyan',
    level: 'Advanced',
    progress: 85,
  },
];

const ADVANCED_SKILLS: SkillCardItem[] = [
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description:
      'Developing image processing and object detection solutions for practical real-world applications.',
    iconType: 'vision',
    iconColor: 'cyan',
    level: 'Advanced',
    progress: 80,
  },
  {
    id: 'deep-learning',
    title: 'Deep Learning',
    description:
      'Developing and training neural networks for advanced pattern recognition and predictive analytics.',
    iconType: 'brain',
    iconColor: 'cyan',
    level: 'Intermediate',
    progress: 75,
  },
  {
    id: 'graphics-designing',
    title: 'Graphics Designing',
    description:
      'Creating visually compelling graphics through modern design techniques, creative concepts, and professional visual composition.',
    iconType: 'graphics',
    iconColor: 'cyan',
    level: 'Advanced',
    progress: 88,
  },
];

function SkillIcon({ type, color }: { type: SkillCardItem['iconType']; color: 'cyan' | 'ash' }) {
  const isCyan = color === 'cyan';
  const iconClasses = isCyan
    ? 'text-[#00f0ff] drop-shadow-[0_0_12px_rgba(0,240,255,0.45)]'
    : 'text-zinc-400';

  const containerClasses = isCyan
    ? 'bg-cyan-500/10 border-cyan-500/30 text-[#00f0ff]'
    : 'bg-zinc-800/50 border-zinc-700/50 text-zinc-400';

  const renderIcon = () => {
    switch (type) {
      case 'game':
        return <Gamepad2 className={`h-6 w-6 ${iconClasses}`} />;
      case 'ai':
        return <Bot className={`h-6 w-6 ${iconClasses}`} />;
      case 'programming':
        return <Code2 className={`h-6 w-6 ${iconClasses}`} />;
      case 'vision':
        return <Eye className={`h-6 w-6 ${iconClasses}`} />;
      case 'brain':
        return <Brain className={`h-6 w-6 ${iconClasses}`} />;
      case 'graphics':
        return <Palette className={`h-6 w-6 ${iconClasses}`} />;
      default:
        return <Code2 className={`h-6 w-6 ${iconClasses}`} />;
    }
  };

  return (
    <div
      className={`inline-flex items-center justify-center p-3 rounded-xl border ${containerClasses} mb-5 transition-transform duration-300 group-hover:scale-110`}
    >
      {renderIcon()}
    </div>
  );
}

function SkillCard({ item }: { item: SkillCardItem; key?: React.Key }) {
  const [isTapped, setIsTapped] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
      whileTap={{ y: -4, transition: { duration: 0.15 } }}
      onClick={() => {
        setIsTapped(true);
        setTimeout(() => setIsTapped(false), 800);
      }}
      className={`group relative rounded-2xl border bg-zinc-900/60 p-6 sm:p-7 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between cursor-pointer select-none ${
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

      <div>
        {/* Icon */}
        <SkillIcon type={item.iconType} color={item.iconColor} />

        {/* Title: white color */}
        <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-white transition-colors">
          {item.title}
        </h4>

        {/* Description: Ash color */}
        <p className="text-zinc-400 text-sm leading-relaxed font-normal">
          {item.description}
        </p>
      </div>

      {/* Progress Bar at the bottom without text */}
      <div className="mt-7 pt-4 border-t border-zinc-800/70">
        <div className="w-full h-1.5 bg-zinc-800/90 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-[#00f0ff] rounded-full shadow-[0_0_8px_rgba(0,240,255,0.6)]"
            style={{ width: `${item.progress}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function TechnicalSkillsSection() {
  return (
    <section
      id="skills"
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
            <span className="text-white">Technical </span>
            <span className="text-[#00f0ff] drop-shadow-[0_0_24px_rgba(0,240,255,0.4)]">
              Skills
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto font-normal">
            Expertise across multiple technical domains
          </p>
          <div className="h-1 w-20 sm:w-28 bg-gradient-to-r from-transparent via-[#00f0ff] to-transparent mx-auto mt-5 rounded-full shadow-[0_0_12px_#00f0ff]" />
        </div>

        {/* 1. Primary Skills Sub-section */}
        <div className="mb-14 sm:mb-20">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              Primary Skills
            </h3>
            <div className="h-[2px] w-24 sm:w-28 bg-gradient-to-r from-[#00f0ff] via-cyan-400 to-transparent mt-2 rounded-full shadow-[0_0_8px_#00f0ff]" />
          </div>

          {/* Desktop: 1 row x 3 columns, Mobile: 1 row x 1 column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {PRIMARY_SKILLS.map((item) => (
              <SkillCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* 2. Advanced Skills Sub-section */}
        <div>
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              Advanced Skills
            </h3>
            <div className="h-[2px] w-28 sm:w-32 bg-gradient-to-r from-[#00f0ff] via-cyan-400 to-transparent mt-2 rounded-full shadow-[0_0_8px_#00f0ff]" />
          </div>

          {/* Desktop: 1 row x 3 columns, Mobile: 1 row x 1 column */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {ADVANCED_SKILLS.map((item) => (
              <SkillCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechnicalSkillsSection;
